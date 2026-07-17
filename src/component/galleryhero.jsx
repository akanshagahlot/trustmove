import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/galleryhero.module.css";

export default function GalleryHero() {
  return (
    <section className={styles.heroBanner}>
      {/* Background Media Container */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/gallery-hero-banner.jpg" // Place your wide infrastructure photo in public/images/
          alt="TrustMove modern logistics fleet and moving equipment lined up securely"
          fill
          priority
          sizes="100vw"
          className={styles.bannerImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Text Foreground */}
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Our Media Gallery</h1>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Gallery</span>
        </div>
      </div>
    </section>
  );
}