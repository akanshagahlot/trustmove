import { Shield, Clock, ShieldCheck, Heart } from 'lucide-react';
import styles from "../styles/corevalues.module.css";

export default function CoreValues() {
  const values = [
    {
      icon: <Shield size={32} strokeWidth={1.75} />,
      title: 'Safety First',
      description:
        'We use advanced multilayer packing materials and secure transport methods to deliver safe home shifting services in India while protecting every valuable belonging.',
    },
    {
      icon: <Clock size={32} strokeWidth={1.75} />,
      title: 'Punctuality',
      description:
        'Time matters. Our experienced team follows efficient planning and real-time tracking to ensure every relocation is completed on schedule.',
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.75} />,
      title: 'Absolute Trust',
      description:
        'As trusted packers and movers India, we believe in transparent pricing, honest communication, and reliable relocation solutions with no hidden charges.',
    },
    {
      icon: <Heart size={32} strokeWidth={1.75} />,
      title: 'Customer First',
      description:
        'Our packing and shifting services are tailored to every customer, providing personalized moving solutions that ensure a smooth and stress-free relocation experience.',
    },
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        {/* Header Text */}
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>What Drives Us</span>
          <h2 className={styles.mainTitle}>Our Core Values</h2>
          <div className={styles.underline}></div>
          <p className={styles.description}>
            Every move we manage is guided by professionalism, safety, and customer satisfaction, making South Packer and Movers a reliable choice for home and office relocation across India.
          </p>
        </div>

        {/* Values Cards Grid */}
        <div className={styles.valuesGrid}>
          {values.map((item, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}