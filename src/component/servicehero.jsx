import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ServicesHero.module.css';

export default function ServicesHero() {
  return (
    <section className={styles.heroBanner}>
      {/* Background Visual Layer */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/services-hero-fleet.jpg" // Place your corporate logistics/moving van image in public/images/
          alt="Nex Go branded moving trucks and transport fleet lined up outside a clean terminal warehouse"
          fill
          priority
          sizes="100vw"
          className={styles.bannerImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Foreground Text & Navigation */}
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Our Services</h1>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Services</span>
        </div>
      </div>
    </section>
  );
}