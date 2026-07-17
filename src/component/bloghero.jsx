import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/bloghero.module.css";

export default function BlogHero() {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/blog-hero.jpg" 
          alt="Branded logistics notebooks and moving plans organized neatly on a desk"
          fill
          priority
          sizes="100vw"
          className={styles.bannerImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Logistics Insights & Tips</h1>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Blog</span>
        </div>
      </div>
    </section>
  );
}