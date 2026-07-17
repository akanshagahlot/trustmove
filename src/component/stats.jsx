import styles from "../styles/stats.module.css";

export default function Stats() {
  const statItems = [
    {
      number: '12K+',
      label: 'Home Shifting Services Completed',
    },
    {
      number: '50+',
      label: 'Cities Served Across India',
    },
    {
      number: '99.9%',
      label: 'Safe Packing and Shifting Success Rate',
    },
    {
      number: '150+',
      label: 'Expert Packers and Movers Team',
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {statItems.map((item, index) => (
            <div key={index} className={styles.statCard}>
              <h3 className={styles.statNumber}>{item.number}</h3>
              <p className={styles.statLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}