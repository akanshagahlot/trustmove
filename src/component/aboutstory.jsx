import Image from 'next/image';
import { Target, Eye } from 'lucide-react';
import styles from "../styles/aboutstory.module.css";

export default function AboutStory() {
  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        
        {/* Content Column */}
        <div className={styles.textColumn}>
          <span className={styles.subTitle}>Our Story</span>
          <h2 className={styles.mainTitle}>Shifting Lives With Care and Trust</h2>
          <div className={styles.underline}></div>
          
          <p className={styles.accentText}>
            <strong>South Packer and Movers</strong> was founded on a simple principle: moving to a new space should be an exciting milestone, not a stressful burden. We are committed to providing reliable <strong>home shifting services in India</strong> with professionalism, safety, and complete customer satisfaction.
          </p>
          
          <p className={styles.bodyText}>
            Over the years, we have grown from a local transport service into a trusted relocation partner, offering comprehensive <strong>packing and shifting services</strong> for homes and offices. As one of the leading <strong>packers and movers India</strong> companies, we invest in premium packing materials and train our expert team to handle every belonging with the highest level of care and security.
          </p>

          <div className={styles.missionVisionBox}>
            <div className={styles.boxItem}>
              <div className={styles.boxHeader}>
                <Target size={22} className={styles.boxIcon} strokeWidth={2} />
                <h4>Our Mission</h4>
              </div>
              <p>
                To provide seamless, secure, and fully customized packing and moving solutions that make every relocation safe, efficient, and stress-free for our customers across India.
              </p>
            </div>
            
            <div className={styles.boxItem}>
              <div className={styles.boxHeader}>
                <Eye size={22} className={styles.boxIcon} strokeWidth={2} />
                <h4>Our Vision</h4>
              </div>
              <p>
                To become India's most trusted relocation company by delivering transparent pricing, exceptional service quality, and innovative moving solutions for every customer.
              </p>
            </div>
          </div>
        </div>

        {/* High-Visual Image Column */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/our story.webp"
              alt="South Packer and Movers team providing home shifting services in India with professional packing and moving solutions"
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              className={styles.storyImage}
            />
          </div>
        </div>

      </div>
    </section>
  );
}