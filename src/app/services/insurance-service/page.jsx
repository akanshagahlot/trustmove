

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import Navbar from "../../../component/navbar";
import Footer from "../../../component/footer";
import styles from "../../../styles/insuranceservice.module.css";

export const metadata = {
  title:
    "Transit Insurance Service | South Packer and Movers India",

  description:
    "Protect your belongings with South Packer and Movers' transit insurance service. We provide reliable insurance coverage for home shifting services in India, packing and shifting services, office relocation, and secure transportation across India.",

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

export default function InsuranceServicePage() {
  const benefits = [
    'Comprehensive multi-risk goods safety coverage',
    'Transparent itemized digital inventory evaluation',
    'Accelerated verification and stress-free claim logging',
    'Zero hidden fees with clear legal documentation printouts'
  ];

  return (
    <>
      <Navbar />
      
      {/* 1. Page Header Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/services/insurance.webp" 
            alt="Official legal documentation for comprehensive logistics safety coverage on transit goods" 
            fill 
            priority 
            sizes="100vw" 
            className={styles.bannerImage} 
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Transit Insurance Service</h1>
          <p className={styles.tagline}>Complete Peace of Mind for Your Valuables</p>
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
            <h2 className={styles.sectionHeading}>Risk Management & Safety Coverage</h2>
            <div className={styles.underline}></div>
            <p className={styles.descriptionText}>
              Protect your premium inventory against unpredictable transit elements, structural road accidents, or natural conditions. Our professional transit safety plans offer line-by-line itemized declaration mappings, ensuring that your commercial goods or home appliances remain completely secure financially throughout the shifting cycle.
            </p>
            
            <h3 className={styles.subHeading}>What is Included in Our Safety Plan:</h3>
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
              <h3>Add Safety Coverage</h3>
              <p>Get a precise, legal safety evaluation estimate calculated transparently against your moving package scale.</p>
              <Link href="/contact" className={styles.ctaButton}>Secure Shifting Quote</Link>
            </div>
            
            <div className={styles.trustWidget}>
              <div className={styles.trustItem}>
                <ShieldCheck size={24} />
                <div>
                  <h4>100% Authorized Protection</h4>
                  <p>Legal certified coverage frameworks for high-value items.</p>
                </div>
              </div>
              <div className={styles.trustItem}>
                <FileText size={24} />
                <div>
                  <h4>Transparent Declarations</h4>
                  <p>Clear, upfront valuations without hidden fine-print clauses.</p>
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