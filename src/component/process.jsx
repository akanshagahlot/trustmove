import styles from "../styles/process.module.css";

export default function Process() {
  const steps = [
    {
      stepNumber: '01',
      title: 'Book Online',
      description:
        'Fill out our quick quote form with your pickup and destination details to book trusted home shifting services in India with South Packer and Movers.',
    },
    {
      stepNumber: '02',
      title: 'Safe Packing',
      description:
        'Our experienced team arrives on time with premium packing materials to provide professional packing and shifting services for all your belongings.',
    },
    {
      stepNumber: '03',
      title: 'Secure Transit',
      description:
        'As trusted packers and movers India, we safely load your belongings into modern moving trucks and transport them through optimized routes.',
    },
    {
      stepNumber: '04',
      title: 'Happy Delivery',
      description:
        'We unload, unpack, and carefully arrange your belongings at your new location, ensuring a smooth and stress-free moving experience.',
    },
  ];

  return (
    <section id="process" className={styles.processSection}>
      <div className={styles.container}>
        {/* Header Text */}
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>Seamless Relocation Journey</span>
          <h2 className={styles.mainTitle}>How South Packer and Movers Works</h2>
          <div className={styles.underline}></div>
          <p className={styles.description}>
            Our simple and transparent relocation process ensures safe home and office moving with professional support from booking to final delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className={styles.processGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.numberBadge}>{step.stepNumber}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.description}</p>
              {index < steps.length - 1 && (
                <div className={styles.connectorLine}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}