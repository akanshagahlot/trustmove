

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Box } from 'lucide-react';
import Navbar from "../../../component/navbar";
import Footer from "../../../component/footer";
import styles from "../../../styles/packingunpacking.module.css";

export const metadata = {
  title:
    "Packing and Unpacking Services | South Packer and Movers India",

  description:
    "South Packer and Movers offers professional packing and unpacking services with high-quality packing materials to ensure safe home and office relocation across India.",

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

export default function PackingUnpackingPage() {
  const benefits = [
    'Premium high-tensile multi-layer boxes and sheets',
    'Custom tailored dense anti-scratch foam coatings',
    'Careful structural unboxing and system placements',
    'Complete debris clearing and recycling after layout setup'
  ];

  return (
    <>
      <Navbar />
      
      {/* 1. Page Header Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/services/packing.webp" 
            alt="Close up of hands using bubble wrap and heavy duty tape to secure delicate goods for transit" 
            fill 
            priority 
            sizes="100vw" 
            className={styles.bannerImage} 
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Packing & Unpacking</h1>
          <p className={styles.tagline}>Premium Protection Frameworks for Absolute Safety</p>
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
            <h2 className={styles.sectionHeading}>Advanced Protective Packaging Methods</h2>
            <div className={styles.underline}></div>
            <p className={styles.descriptionText}>
              The primary key to zero structural shifting damage lies within premium defensive wraps. Our crews apply dynamic multi-layer wrap setups, using shock-absorbent bubble wraps, corrugated fiber sheets, and edge protectors to completely guard electronics and glass assets before completing clean unboxing structures at your destination.
            </p>
            
            <h3 className={styles.subHeading}>What is Included in Our Packing System:</h3>
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
              <h3>Secure Your Assets</h3>
              <p>Opt for complete full-scale architectural packing options or isolated fragile item defensive crating wraps.</p>
              <Link href="/contact" className={styles.ctaButton}>Request Material Quote</Link>
            </div>
            
            <div className={styles.trustWidget}>
              <div className={styles.trustItem}>
                <ShieldCheck size={24} />
                <div>
                  <h4>Industrial Grade Supply</h4>
                  <p>Heavy duty double-walled storage materials exclusively.</p>
                </div>
              </div>
              <div className={styles.trustItem}>
                <Box size={24} />
                <div>
                  <h4>Neat Home Unboxing</h4>
                  <p>Systematic unboxing setups to help speed up room arrangement.</p>
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