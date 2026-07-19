import Image from 'next/image';
import styles from "../styles/galleryphotos.module.css";

export default function GalleryPhotos() {
  const photos = [
    {
      id: 1,
      src: '/images/gallery/1.webp',
      alt: 'South Packer and Movers professional movers neatly loading domestic goods into a clean transport truck with soft lighting',
      caption: 'Safe Loading Process'
    },
    {
      id: 2,
      src: '/images/gallery/2.webp',
      alt: 'Relocation experts meticulously applying premium multilayer bubble wrap to fragile electronic items',
      caption: 'Secure Multi-layer Packing'
    },
    {
      id: 3,
      src: '/images/gallery/3.webp',
      alt: 'South Packer and Movers customized transit container truck carrying customer shipments safely on an open highway',
      caption: 'On-Time Fleet Transit'
    },
    {
      id: 4,
      src: '/images/gallery/4.webp',
      alt: 'Clean organized corporate storage warehouse with packed shifting goods stacked systematically on shelving racks',
      caption: 'Modern Warehouse Management'
    }
  ];

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        
        {/* Gallery Intro Text */}
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>Our Operations</span>
          <h2 className={styles.mainTitle}>South Packer and Movers Work In Action</h2>
          <div className={styles.underline}></div>
          <p className={styles.description}>
            Take a look through our real-time shifting logs. We capture honest moments of our packing, loading, and transit services across the country.
          </p>
        </div>

        {/* 4-Photo Visual Grid Layout */}
        <div className={styles.photoGrid}>
          {photos.map((photo) => (
            <div key={photo.id} className={styles.photoCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={styles.actualImage}
                />
                {/* Visual Text Overlay on Hover */}
                <div className={styles.imageOverlay}>
                  <span className={styles.photoCaption}>{photo.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}