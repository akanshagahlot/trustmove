import { MapPin, PhoneCall, Mail } from 'lucide-react';
import styles from "../styles/contactcards.module.css";

export default function ContactCards() {
  const contactInfo = [
    {
      id: 1,
      icon: <MapPin size={30} strokeWidth={1.5} />,
      title: 'Our Office Address',
      details: '123, MG Road, Jodhpur, Rajasthan – 342001',
    },
    {
      id: 2,
      icon: <PhoneCall size={30} strokeWidth={1.5} />,
      title: 'Call Us Directly',
      details: '+91 98765 43210',
    },
    {
      id: 3,
      icon: <Mail size={30} strokeWidth={1.5} />,
      title: 'Email Communications',
      details: 'info@trustmove.in',
    },
  ];

  return (
    <section className={styles.cardsSection}>
      <div className={styles.container}>
        <div className={styles.cardsGrid}>
          {contactInfo.map((card) => (
            <div key={card.id} className={styles.infoCard}>
              <div className={styles.iconWrapper}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDetails}>{card.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}