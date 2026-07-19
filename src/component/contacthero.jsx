import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/contacthero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.heroBanner}>
      {/* Background Visual Setup */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/contact-hero-support.jpg" // Place your support/communication image in public/images/
          alt="South Packer and Movers customer care support team helping clients with booking logistics"
          fill
          priority
          sizes="100vw"
          className={styles.bannerImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Content Foreground */}
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Contact Us</span>
        </div>
      </div>
    </section>
  );
}