#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT_DIR = process.cwd();
const MAX_SIZE_BYTES = 120000; // strict 120 KB decimal
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const CODE_EXTENSIONS = new Set([
  ".html",
  ".htm",
  ".css",
  ".scss",
  ".sass",
  ".less",
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".json",
  ".md",
  ".mdx",
  ".vue",
]);

const IGNORE_DIRS = new Set([
  ".git",
  "node_modules",
  ".next",
  "dist",
  "build",
  "out",
  "coverage",
]);

const DRY_RUN = process.argv.includes("--dry-run");

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function walkDir(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const absPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      walkDir(absPath, files);
    } else if (entry.isFile()) {
      files.push(absPath);
    }
  }

  return files;
}

async function encodeUnder120KB(inputPath) {
  const original = sharp(inputPath, { failOnError: false });
  const meta = await original.metadata();

  if (!meta.width || !meta.height) {
    throw new Error(`Cannot read dimensions: ${inputPath}`);
  }

  let scale = 1.0;
  const minScale = 0.5;
  const scaleStep = 0.9;
  const qualitySteps = [90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30];

  while (scale >= minScale - 1e-6) {
    const width = Math.max(1, Math.floor(meta.width * scale));
    const height = Math.max(1, Math.floor(meta.height * scale));

    for (const q of qualitySteps) {
      const buffer = await sharp(inputPath, { failOnError: false })
        .resize(width, height, { fit: "inside", withoutEnlargement: true })
        .webp({ quality: q, effort: 6 })
        .toBuffer();

      if (buffer.length < MAX_SIZE_BYTES) {
        return {
          buffer,
          size: buffer.length,
          quality: q,
          width,
          height,
          scale,
        };
      }
    }

    scale *= scaleStep;
  }

  const fallbackWidth = Math.max(1, Math.floor(meta.width * 0.45));
  const fallbackHeight = Math.max(1, Math.floor(meta.height * 0.45));
  const fallback = await sharp(inputPath, { failOnError: false })
    .resize(fallbackWidth, fallbackHeight, {
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 35, effort: 6 })
    .toBuffer();

  if (fallback.length >= MAX_SIZE_BYTES) {
    throw new Error(
      `Failed strict target (<120KB): ${toPosix(path.relative(ROOT_DIR, inputPath))}, got ${(fallback.length / 1024).toFixed(1)}KB`
    );
  }

  return {
    buffer: fallback,
    size: fallback.length,
    quality: 35,
    width: fallbackWidth,
    height: fallbackHeight,
    scale: 0.45,
  };
}

function replacePathRefs(content, oldRelPath, newRelPath) {
  const variants = new Set();
  const posixOld = toPosix(oldRelPath);
  const posixNew = toPosix(newRelPath);

  variants.add(posixOld);
  variants.add(`/${posixOld}`);
  variants.add(`./${posixOld}`);
  variants.add(`../${posixOld}`);

  const fileNameOnly = path.basename(posixOld);
  variants.add(fileNameOnly);

  let updated = content;
  for (const oldVariant of variants) {
    const escaped = escapeRegExp(oldVariant);
    const rx = new RegExp(escaped, "g");

    let replacement = posixNew;
    if (oldVariant.startsWith("/")) replacement = `/${posixNew}`;
    else if (oldVariant.startsWith("./")) replacement = `./${posixNew}`;
    else if (oldVariant.startsWith("../")) replacement = `../${posixNew}`;
    else if (oldVariant === fileNameOnly) replacement = path.basename(posixNew);

    updated = updated.replace(rx, replacement);
  }

  return updated;
}

async function main() {
  console.log(`Root: ${ROOT_DIR}`);
  console.log(`Mode: ${DRY_RUN ? "DRY RUN" : "LIVE"}`);

  const allFiles = walkDir(ROOT_DIR);
  const imageFiles = allFiles.filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()));
  const codeFiles = allFiles.filter((f) => CODE_EXTENSIONS.has(path.extname(f).toLowerCase()));

  console.log(`Discovered images: ${imageFiles.length}`);
  console.log(`Discovered code files: ${codeFiles.length}`);

  if (imageFiles.length === 0) {
    console.log("No .jpg/.jpeg/.png files found.");
    return;
  }

  const replaceMap = new Map();
  const convertedRows = [];
  const failed = [];
  let totalBefore = 0;
  let totalAfter = 0;
  let resizedCount = 0;

  for (const absImgPath of imageFiles) {
    const relImgPath = path.relative(ROOT_DIR, absImgPath);
    const parsed = path.parse(absImgPath);
    const webpAbs = path.join(parsed.dir, `${parsed.name}.webp`);
    const webpRel = path.relative(ROOT_DIR, webpAbs);

    const beforeSize = fs.statSync(absImgPath).size;
    totalBefore += beforeSize;

    try {
      const result = await encodeUnder120KB(absImgPath);
      if (result.scale < 1) resizedCount += 1;
      totalAfter += result.size;

      if (!DRY_RUN) {
        fs.writeFileSync(webpAbs, result.buffer);
      }

      replaceMap.set(toPosix(relImgPath), toPosix(webpRel));
      convertedRows.push({
        from: toPosix(relImgPath),
        to: toPosix(webpRel),
        beforeKB: Number((beforeSize / 1024).toFixed(2)),
        afterKB: Number((result.size / 1024).toFixed(2)),
        quality: result.quality,
        scale: Number(result.scale.toFixed(2)),
      });

      console.log(
        `✔ ${toPosix(relImgPath)} -> ${toPosix(webpRel)} | ${result.size} bytes | q=${result.quality} scale=${result.scale.toFixed(2)}`
      );
    } catch (err) {
      failed.push({ file: toPosix(relImgPath), reason: err.message });
      console.error(`✖ Failed: ${toPosix(relImgPath)} | ${err.message}`);
    }
  }

  if (failed.length > 0) {
    console.error("Conversion failures detected. Aborting code updates and cleanup.");
    const failReportPath = path.join(ROOT_DIR, `image-optimization-report-${DRY_RUN ? "dry" : "live"}.json`);
    const report = {
      mode: DRY_RUN ? "dry-run" : "live",
      totals: {
        imagesFound: imageFiles.length,
        converted: convertedRows.length,
        conversionFailures: failed.length,
      },
      skipped: failed,
    };
    fs.writeFileSync(failReportPath, JSON.stringify(report, null, 2), "utf8");
    process.exit(1);
  }

  const updatedFiles = [];

  for (const codePath of codeFiles) {
    let content = fs.readFileSync(codePath, "utf8");
    const original = content;

    for (const [oldRel, newRel] of replaceMap.entries()) {
      content = replacePathRefs(content, oldRel, newRel);
    }

    if (content !== original) {
      updatedFiles.push(toPosix(path.relative(ROOT_DIR, codePath)));
      if (!DRY_RUN) {
        fs.writeFileSync(codePath, content, "utf8");
      }
      console.log(`✎ Updated refs in: ${toPosix(path.relative(ROOT_DIR, codePath))}`);
    }
  }

  let deletedCount = 0;
  if (!DRY_RUN) {
    for (const absImgPath of imageFiles) {
      fs.unlinkSync(absImgPath);
      deletedCount += 1;
    }
  }

  const report = {
    mode: DRY_RUN ? "dry-run" : "live",
    totals: {
      imagesFound: imageFiles.length,
      converted: convertedRows.length,
      conversionFailures: failed.length,
      codeFilesScanned: codeFiles.length,
      filesUpdated: updatedFiles.length,
      originalsDeleted: deletedCount,
      imagesResized: resizedCount,
      avgSizeReductionPercent:
        convertedRows.length > 0 && totalBefore > 0
          ? Number((((totalBefore - totalAfter) / totalBefore) * 100).toFixed(2))
          : 0,
    },
    updatedFiles,
    skipped: failed,
    sampleConversions: convertedRows.slice(0, 50),
  };

  const reportPath = path.join(ROOT_DIR, `image-optimization-report-${DRY_RUN ? "dry" : "live"}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");

  console.log("===== SUMMARY =====");
  console.log(JSON.stringify(report.totals, null, 2));
  console.log(`Report written: ${reportPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
