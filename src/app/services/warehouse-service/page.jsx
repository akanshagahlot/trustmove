'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Database } from 'lucide-react';
import Navbar from "../../../component/navbar";
import Footer from "../../../component/footer";
import styles from "../../../styles/warehouseservice.module.css";
export const metadata = {
  title:
    "Warehouse and Storage Services | TrustMove Packers and Movers India",

  description:
    "TrustMove provides secure warehouse and storage services for household goods, office equipment, and commercial belongings with safe storage solutions across India.",

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

export default function WarehouseServicePage() {
  const benefits = [
    '24/7 continuous CCTV digital surveillance logging',
    'Moisture-controlled and dust-proof modern storage bays',
    'Highly flexible short-term or long-term monthly storage agreements',
    'Fully itemized and barcoded digital inventory validation checks'
  ];

  return (
    <>
      <Navbar />
      
      {/* 1. Page Header Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/services/warehouse.png" 
            alt="Clean and spacious warehouse facility with securely stored pallets and packages managed by Nex Go" 
            fill 
            priority 
            sizes="100vw" 
            className={styles.bannerImage} 
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Warehouse & Storage Services</h1>
          <p className={styles.tagline}>Safe, Secure, and Managed Inventory Storage Solutions</p>
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
            <h2 className={styles.sectionHeading}>Secure Enterprise & Household Storage</h2>
            <div className={styles.underline}></div>
            <p className={styles.descriptionText}>
              If your new commercial headquarters or residential property is not completely ready for move-in yet, keep your packed items safe inside our modern warehouse facilities. We offer immaculately clean, pest-controlled, and climate-monitored storage structures designed to preserve corporate setups or home items for as long as you need.
            </p>
            
            <h3 className={styles.subHeading}>What is Included in Our Storage Module:</h3>
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
              <h3>Book Storage Space</h3>
              <p>Get a precise estimation based on your spatial cubical footprint and intended storage timeline.</p>
              <Link href="/contact" className={styles.ctaButton}>Request Storage Quote</Link>
            </div>
            
            <div className={styles.trustWidget}>
              <div className={styles.trustItem}>
                <ShieldCheck size={24} />
                <div>
                  <h4>Round-The-Clock Security</h4>
                  <p>Monitored perimeter checkpoints and electronic alarm systems.</p>
                </div>
              </div>
              <div className={styles.trustItem}>
                <Database size={24} />
                <div>
                  <h4>Digital Inventory Mapping</h4>
                  <p>Streamlined item tracking for immediate partial recall requests.</p>
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