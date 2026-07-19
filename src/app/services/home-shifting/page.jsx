

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import Navbar from "../../../component/navbar";
import Footer from "../../../component/footer";
import styles from "../../../styles/homeshifting.module.css";

export const metadata = {
  title:
    "Home Shifting Services in India | South Packer and Movers India",

  description:
    "South Packer and Movers provides professional home shifting services in India with safe packing, secure transportation, and reliable relocation solutions. Choose our trusted home packers and movers for hassle-free packing and shifting services across India.",

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

export default function HomeShiftingPage() {
  const benefits = [
    'Multi-layer premium heavy bubble wrapping',
    'Expert glassware, mirror & delicate electronics handling',
    'Full furniture dismantling & structural reassembly',
    'Secure door-to-door transit and unloading execution'
  ];

  return (
    <>
      <Navbar />
      
      {/* 1. Page Header Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/services/home.webp" 
            alt="South Packer and Movers professional squad carefully shifting living room household items" 
            fill 
            priority 
            sizes="100vw" 
            className={styles.bannerImage} 
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Domestic Home Shifting</h1>
          <p className={styles.tagline}>Stress-Free Household Relocation Nationwide</p>
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
            <h2 className={styles.sectionHeading}>Service Operational Scope</h2>
            <div className={styles.underline}></div>
            <p className={styles.descriptionText}>
              Our domestic home shifting service handles your entire residential ecosystem with premium care. We take care of heavy furniture disassembling, structural packing using multilayer protective elements, and safe transit routes to ensure a completely safe delivery sequence at your destination.
            </p>
            
            <h3 className={styles.subHeading}>What is Included in the Shifting Package:</h3>
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
              <h3>Book This Service</h3>
              <p>Get a precise, line-by-line custom shifting quotation based on your exact residential inventory volume.</p>
              <Link href="/contact" className={styles.ctaButton}>Request Free Shifting Quote</Link>
            </div>
            
            <div className={styles.trustWidget}>
              <div className={styles.trustItem}>
                <ShieldCheck size={24} />
                <div>
                  <h4>100% Secure Packing</h4>
                  <p>Premium multi-layer defense wraps for heavy assets.</p>
                </div>
              </div>
              <div className={styles.trustItem}>
                <Clock size={24} />
                <div>
                  <h4>On-Time Guarantee</h4>
                  <p>Real-time vehicle fleet optimization logs.</p>
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