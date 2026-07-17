import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, User, Calendar, Tag } from 'lucide-react';
import styles from "../styles/blogdetailcontent.module.css";

export default function BlogDetailContent() {
  return (
    <section className={styles.articleSection}>
      <div className={styles.container}>
        
        <Link href="/blog" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to Blog Articles
        </Link>

        <div className={styles.metaRow}>
          <span className={styles.metaItem}><User size={14} /> By Operations Team</span>
          <span className={styles.metaItem}><Calendar size={14} /> July 15, 2026</span>
          <span className={styles.metaItem}><Tag size={14} /> Relocation Tips</span>
        </div>

        <h1 className={styles.articleTitle}>
          5 Crucial Packing Tips for Safe Home Shifting Services in India
        </h1>
        
        <div className={styles.mainImageWrapper}>
          <Image
            src="/images/blog.png"
            alt="Professional packers and movers India carefully packing household items for home shifting services in India"
            fill
            priority
            sizes="100vw"
            className={styles.articleImg}
          />
        </div>

        <div className={styles.textContent}>
          <p>
            Moving to a new home is an exciting experience, but it also requires careful planning and organization. Whether you are relocating locally or across the country, choosing professional <strong>home shifting services in India</strong> can make the entire process safer and stress-free. Experienced <strong>packers and movers India</strong> use high-quality materials and proven techniques to protect your valuable belongings throughout the journey.
          </p>
          
          <h2>1. Implement Multi-Layer Protective Cushioning</h2>
          <p>
            Never let fragile items touch each other directly inside a box. Wrap glassware, ceramics, and delicate electronics with premium bubble wrap and secure them properly with packing tape. Professional <strong>packing and shifting services</strong> also recommend lining the bottom of each box with packing paper or cushioning material to absorb shocks during transportation.
          </p>
          
          <h2>2. Heavy Items on the Bottom, Light Items on Top</h2>
          <p>
            Always follow proper weight distribution while packing. Heavy items such as books, kitchen appliances, and cookware should be placed at the bottom, while lightweight items like clothes, cushions, and linens should go on top. This simple packing technique prevents damage and keeps your boxes stable during loading, transportation, and unloading.
          </p>
        </div>

      </div>
    </section>
  );
}