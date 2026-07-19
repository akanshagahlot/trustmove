import Image from 'next/image';
import { useState } from 'react';
import styles from "../styles/hero.module.css";

export default function Hero() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    serviceType: 'home',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Quote requested from ${formData.from} to ${formData.to} for ${formData.serviceType} shifting!`);
  };

  return (
    <section className={styles.heroSection}>
      {/* Visual Background Image Setup */}
      <div className={styles.heroImageContainer}>
        <Image
          src="/images/hero.webp"
          alt="South Packer and Movers professional packers and movers India loading household belongings for home shifting services in India"
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Content Container */}
      <div className={styles.heroContentContainer}>
        <div className={styles.textColumn}>
          <span className={styles.badge}>Reliable & Safe Relocation</span>

          <h1 className={styles.heading}>
            Trusted Home Shifting Services in India
          </h1>

          <p className={styles.subheading}>
            <strong>South Packer and Movers</strong> offers professional <strong>packing and shifting services</strong> for homes and offices across India. As one of the trusted <strong>packers and movers India</strong>, we ensure secure packing, safe transportation, warehouse storage, and on-time delivery for a completely stress-free moving experience.
          </p>

          <div className={styles.featuresRow}>
            <div className={styles.featureItem}>✔ 100% Safe Delivery</div>
            <div className={styles.featureItem}>✔ On-Time Guarantee</div>
          </div>
        </div>

        {/* Lead Capture Quote Form */}
        <div className={styles.formColumn}>
          <div className={styles.quoteCard}>
            <h3>Get a Free Quote Instantly</h3>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="from">Moving From</label>
                <input
                  type="text"
                  id="from"
                  placeholder="City or Pickup Area"
                  required
                  value={formData.from}
                  onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="to">Moving To</label>
                <input
                  type="text"
                  id="to"
                  placeholder="Destination City / Area"
                  required
                  value={formData.to}
                  onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="serviceType">Service Required</label>
                <select
                  id="serviceType"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                >
                  <option value="home">Home Shifting</option>
                  <option value="office">Office Shifting</option>
                  <option value="warehouse">Warehouse Storage</option>
                  <option value="loading">Loading / Unloading</option>
                  <option value="packing">Packing / Unpacking</option>
                </select>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Check Moving Price
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}