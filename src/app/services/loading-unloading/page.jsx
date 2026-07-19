

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import Navbar from "../../../component/navbar";
import Footer from "../../../component/footer";
import styles from "../../../styles/loadingunloading.module.css";

export const metadata = {
  title:
    "Loading and Unloading Services | South Packer and Movers India",

  description:
    "South Packer and Movers provides professional loading and unloading services with trained experts for safe handling of household and office belongings. Choose reliable packing and shifting services across India.",

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

export default function LoadingUnloadingPage() {
  const benefits = [
    'Highly trained heavy-lifting handling experts',
    'Deployment of advanced dynamic hydraulic tailgates and ramps',
    'Strategic weight distribution inside container fleets',
    'Zero property damage scratch-free transit guarantee'
  ];

  return (
    <>
      <Navbar />
      
      {/* 1. Page Header Banner */}
      <section className={styles.heroBanner}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/services/loading.webp" 
            alt="Moving experts safely lifting and loading heavy cardboard boxes onto a cargo delivery truck" 
            fill 
            priority 
            sizes="100vw" 
            className={styles.bannerImage} 
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Loading & Unloading</h1>
          <p className={styles.tagline}>Heavy Lifting Handled Safely by Experienced Crews</p>
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
            <h2 className={styles.sectionHeading}>Precision Ground Handling Handling Operations</h2>
            <div className={styles.underline}></div>
            <p className={styles.descriptionText}>
              Avoid heavy injury risks and structural property damage with our specialized dynamic loading protocols. Our crews leverage professional safety equipment, custom stair-climbing dollies, and secure anchoring grids to load and arrange heavy household furniture or complex industrial machinery perfectly inside moving vehicles.
            </p>
            
            <h3 className={styles.subHeading}>What is Included in Our Handling Package:</h3>
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
              <h3>Book Specialized Crews</h3>
              <p>Hire dedicated handling crews for individual truck items or complex logistics relocation tasks.</p>
              <Link href="/contact" className={styles.ctaButton}>Get Handling Quote</Link>
            </div>
            
            <div className={styles.trustWidget}>
              <div className={styles.trustItem}>
                <ShieldCheck size={24} />
                <div>
                  <h4>Injury-Free Operations</h4>
                  <p>Certified workers trained in proper structural lifting safety.</p>
                </div>
              </div>
              <div className={styles.trustItem}>
                <Truck size={24} />
                <div>
                  <h4>Optimal Vehicle Stacking</h4>
                  <p>Smart load configurations to completely prevent transit shifting.</p>
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