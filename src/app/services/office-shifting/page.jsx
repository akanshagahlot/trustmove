

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import Navbar from "../../../component/navbar";
import Footer from "../../../component/footer";
import styles from "../../../styles/officeshifting.module.css";

export const metadata = {
  title:
    "Office Packers and Movers | South Packer and Movers India",

  description:
    "South Packer and Movers provides professional office packers and movers with safe office relocation, expert packing and shifting services, secure transportation, and reliable business moving solutions across India.",

  keywords: [
    "home shifting services in india",
    "packers and movers india",
    "packing and movers near me",
    "home packers and movers",
    "home shifting services",
    "packing and shifting services",
    "office packers and movers",
    "packers and movers",
    "room shifting services near me",
    "the best packers and movers",
  ],
};

export default function OfficeShiftingPage() {
  const benefits = [
    'Weekend & off-hours shifting execution for zero downtime',
    'Secure IT infrastructure and server rack specialized packing',
    'Systematic desktop and asset labeling for mistake-free setups',
    'Comprehensive transit protection for high-value corporate items'
  ];

  return (
    <>
      <Navbar />
      
      {/* 1. Page Header Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/services/office.webp" 
            alt="Corporate logistics team organizedly packing office computers and desks during an office relocation project" 
            fill 
            priority 
            sizes="100vw" 
            className={styles.bannerImage} 
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Corporate Office Shifting</h1>
          <p className={styles.tagline}>Minimal Downtime Commercial Relocations</p>
        </div>
      </section>

      {/* 2. Main Detail Content Split Panel */}
      <section className={styles.detailSection}>
        <div className={styles.container}>
          
          {/* Main Informational Content Column */}
          <div className={styles.contentColumn}>
            <Link href="/" className={styles.backLink}>
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h2 className={styles.sectionHeading}>Commercial Shifting Operations</h2>
            <div className={styles.underline}></div>
            <p className={styles.descriptionText}>
              Minimize business operational disruptions with our specialized office relocation protocols. We provide secure handling of complete IT infrastructures, heavy office server configurations, corporate modular setups, and secure management profiles for confidential documentation storage bins.
            </p>
            
            <h3 className={styles.subHeading}>What is Included in the Office Package:</h3>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Call & Trust Sidebar Column */}
          <div className={styles.sidebarColumn}>
            <div className={styles.ctaCard}>
              <h3>Book Corporate Shifting</h3>
              <p>Get a precise, itemized commercial shifting assessment based on your organization's exact inventory scale.</p>
              <Link href="/contact" className={styles.ctaButton}>Request Corporate Quote</Link>
            </div>
            
            <div className={styles.trustWidget}>
              <div className={styles.trustItem}>
                <ShieldCheck size={24} />
                <div>
                  <h4>Fully Secure Protocols</h4>
                  <p>Coded asset labeling maps and zero mix-up guarantees.</p>
                </div>
              </div>
              <div className={styles.trustItem}>
                <Clock size={24} />
                <div>
                  <h4>Zero Downtime Execution</h4>
                  <p>Flexible scheduling over holidays and off-peak hours.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}