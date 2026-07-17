import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/services.module.css";

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: 'Home Shifting',
      description:
        'Professional home shifting services in India with safe packing, secure transportation, and careful handling of furniture, electronics, and delicate household items.',
      image: '/images/services/home.png',
      altText:
        'TrustMove home shifting services in India with professional packers moving household furniture safely',
      link: '/services/home-shifting'
    },
    {
      id: 2,
      title: 'Office Shifting',
      description:
        'Reliable office relocation services with secure transportation of IT equipment, office furniture, documents, and business assets while minimizing downtime.',
      image: '/images/services/office.png',
      altText:
        'Professional office relocation by TrustMove packers and movers India',
      link: '/services/office-shifting'
    },
    {
      id: 3,
      title: 'Insurance Service',
      description:
        'Protect your belongings with comprehensive transit insurance for a safe and worry-free moving experience across India.',
      image: '/images/services/insurance.png',
      altText:
        'Transit insurance service for home and office relocation',
      link: '/services/insurance-service'
    },
    {
      id: 4,
      title: 'Warehouse Services',
      description:
        'Secure, clean, and monitored warehouse storage solutions for household goods, office equipment, and commercial inventory.',
      image: '/images/services/warehouse.png',
      altText:
        'Secure warehouse storage facility by TrustMove',
      link: '/services/warehouse-service'
    },
    {
      id: 5,
      title: 'Loading & Unloading',
      description:
        'Experienced professionals provide safe loading and unloading services to protect your belongings during every stage of the relocation process.',
      image: '/images/services/loading.png',
      altText:
        'Professional loading and unloading services by TrustMove',
      link: '/services/loading-unloading'
    },
    {
      id: 6,
      title: 'Packing & Unpacking',
      description:
        'High-quality packing and shifting services using premium packing materials to keep your valuables safe during transportation.',
      image: '/images/services/packing.png',
      altText:
        'Packing and shifting services using premium packing materials',
      link: '/services/packing-unpacking'
    }
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subTitle}>What We Do</span>
          <h2 className={styles.mainTitle}>Professional Packers and Movers India</h2>
          <div className={styles.underline}></div>
          <p className={styles.description}>
            TrustMove offers complete relocation solutions, including home shifting, office relocation, warehouse storage, insurance, loading and unloading, and packing services. Our expert team delivers safe, reliable, and professional moving services across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {servicesList.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.serviceImg}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.description}</p>
                <Link href={service.link} className={styles.cardLink}>
                  Learn More <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}