import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/faqhero.module.css";

export default function FAQHero() {
  return (
    <section className={styles.heroBanner}>
      {/* Background Media Overlay Wrapper */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/faq-hero-infrastructure.jpg" // Place your minimalist background graphic here
          alt="Clean organized logistics planning office representing customer assistance"
          fill
          priority
          sizes="100vw"
          className={styles.bannerImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Text Foreground */}
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>FAQ</span>
        </div>
      </div>
    </section>
  );
}