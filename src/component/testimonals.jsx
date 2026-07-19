import styles from "../styles/testimonals.module.css";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Rohan Sharma',
      role: 'Home Owner',
      feedback:
        'South Packer and Movers made my home shifting services in India completely hassle-free. Their team arrived on time, packed every fragile item with care, and ensured a smooth relocation from start to finish. I highly recommend their professional service.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sneha Iyer',
      role: 'Tech Operations Lead',
      feedback:
        'We hired South Packer and Movers for our office relocation, and their packing and shifting services exceeded our expectations. They moved our entire IT setup over the weekend with zero downtime and excellent coordination.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Amit Verma',
      role: 'Business Director',
      feedback:
        'Among the best packers and movers India, South Packer and Movers also offers secure warehouse storage with excellent inventory management. Everything was safe, organized, and delivered exactly as promised.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className={styles.testimonialSection}>
      <div className={styles.container}>
        {/* Header Text */}
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>Client Stories</span>
          <h2 className={styles.mainTitle}>What Our Customers Say</h2>
          <div className={styles.underline}></div>
          <p className={styles.description}>
            Discover why thousands of customers trust South Packer and Movers for safe home shifting, office relocation, packing, storage, and moving services across India.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className={styles.testimonialsGrid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.starsRow}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>

              <p className={styles.feedbackText}>
                "{review.feedback}"
              </p>

              <div className={styles.clientInfo}>
                <h4 className={styles.clientName}>{review.name}</h4>
                <span className={styles.clientRole}>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}