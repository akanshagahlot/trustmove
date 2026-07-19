import Link from 'next/link';
import Image from 'next/image';
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Column 1: Brand Info */}
        <div className={styles.column}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/images/footer.webp" 
              alt="South Packer and Movers Logo" 
              width={180} 
              height={50} 
              className={styles.footerLogo}
            />
          </div>
          <p className={styles.brandDesc}>
            South Packer and Movers provides safe, reliable, and affordable relocation services across India — for homes, offices, and commercial goods.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.iconCircle}>f</a>
            <a href="#" className={styles.iconCircle}>in</a>
            <a href="#" className={styles.iconCircle}>𝕏</a>
            <a href="#" className={styles.iconCircle}>▶</a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <ul className={styles.linksList}>
            <li><Link href="/">› Home</Link></li>
            <li><Link href="/about">› About Us</Link></li>
            <li><Link href="/faq">› Faq</Link></li>
            <li><Link href="/gallery">› Gallery</Link></li>
            <li><Link href="/contact">› Contact Us</Link></li>
            <li><Link href="/contact">› Get A Quote</Link></li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Our Services</h3>
          <ul className={styles.linksList}>
            <li><Link href="/services/home-shifting">› Home Shifting</Link></li>
            <li><Link href="/services/office-shifting">› Office Shifting</Link></li>
            <li><Link href="/services/loading-unloading">› Loading & Unloading</Link></li>
            <li><Link href="/services/packing-unpacking">› Packing & Unpacking</Link></li>
            <li><Link href="/services/warehouse-service">› Warehouse Services</Link></li>
            <li><Link href="/services/insurance-service">› Insurance Services</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact / Get In Touch */}
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Get In Touch</h3>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <p>P-65 Greenfild kananiguda alwal secunderabad 500015</p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <p>+91 7093384607</p>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉</span>
              <p>info@southmoverspackers.com</p>
            </div>
          </div>
          <Link href="contact" className={styles.footerCta}>
            Get Free Quote →
          </Link>
        </div>

      </div>

      {/* Bottom Bar Custom Copyrights */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p>© 2026 <span className={styles.highlightText}>South Packer and Movers</span>. All Rights Reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="#terms">Terms & Conditions</Link>
            <Link href="#privacy">Privacy Policy</Link>
            <Link href="#sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}