import Image from 'next/image';
import styles from "../styles/whychooseus.module.css";

export default function WhyChooseUs() {
  const advantages = [
    {
      title: '100% Safe & Secure Delivery',
      description:
        'Our home shifting services in India use premium packing materials and secure transportation methods to keep your valuable belongings safe throughout the journey.'
    },
    {
      title: 'On-Time Moving Guarantee',
      description:
        'We value your time. Our experienced team follows optimized routes and real-time planning to ensure every relocation is completed on schedule.'
    },
    {
      title: 'Transparent Pricing',
      description:
        'As trusted packers and movers India, we provide honest quotations with no hidden charges, giving you complete confidence before your move begins.'
    },
    {
      title: '24/7 Dedicated Support',
      description:
        'Our customer support team is always available to assist you before, during, and after your move, ensuring a smooth packing and shifting services experience.'
    }
  ];

  return (
    <section id="why-choose-us" className={styles.whySection}>
      <div className={styles.container}>
        
        {/* Visual Media Column */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/why.png"
              alt="Professional packers and movers India providing safe home shifting services in India"
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              className={styles.sideImage}
            />
          </div>

          <div className={styles.experienceCard}>
            <span className={styles.expNumber}>10+</span>
            <span className={styles.expText}>Years of Logistics Excellence</span>
          </div>
        </div>

        {/* Value Propositions Text Column */}
        <div className={styles.textColumn}>
          <span className={styles.subTitle}>Why Choose TrustMove</span>
          <h2 className={styles.mainTitle}>Professional Packers and Movers India</h2>
          <div className={styles.underline}></div>

          <p className={styles.introText}>
            TrustMove delivers reliable home and office relocation solutions with expert packing, secure transportation, warehouse storage, and customer-focused service. We are committed to making every move safe, efficient, and stress-free.
          </p>

          <div className={styles.advantagesList}>
            {advantages.map((item, index) => (
              <div key={index} className={styles.advantageItem}>
                <div className={styles.checkIcon}>✔</div>
                <div className={styles.advantageContent}>
                  <h3 className={styles.advantageTitle}>{item.title}</h3>
                  <p className={styles.advantageText}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}