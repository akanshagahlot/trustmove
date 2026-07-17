import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/abouthero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.heroBanner}>
      {/* Background Visual Setup */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/about-hero-infrastructure.jpg" // Place your wide infrastructure photo in public/images/
          alt="TrustMove operational team planning secure logistics and shifting routes"
          fill
          priority
          sizes="100vw"
          className={styles.bannerImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Content Foreground */}
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>About TrustMove</h1>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>About Us</span>
        </div>
      </div>
    </section>
  );
}
