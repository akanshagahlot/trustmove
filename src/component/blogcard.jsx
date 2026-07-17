import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/blogcard.module.css";

export default function BlogCard() {
  const blogPost = {
    title: '5 Crucial Packing Tips for Safe Home Shifting Services in India',
    description:
      'Discover expert packing techniques used by professional packers and movers India to protect delicate glassware, flat-screen TVs, and heavy wooden furniture. Learn how quality packing and shifting services help ensure a safe, damage-free relocation.',
    image: '/images/blog.png',
    altText:
      'Professional packers and movers India carefully packing household items for home shifting services in India',
    date: 'July 15, 2026',
    category: 'Relocation Tips',
    link: '/blog/shifting-tips' // Direct clear route pointing to the detailed file structure
  };

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.cardGrid}>
          
          <div className={styles.blogCard}>
            <div className={styles.imageWrapper}>
              <span className={styles.categoryBadge}>{blogPost.category}</span>
              <Image
                src={blogPost.image}
                alt={blogPost.altText}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.cardImage}
              />
            </div>
            
            <div className={styles.cardContent}>
              <span className={styles.postDate}>{blogPost.date}</span>
              <h3 className={styles.cardTitle}>{blogPost.title}</h3>
              <p className={styles.cardText}>{blogPost.description}</p>
              <Link href={blogPost.link} className={styles.readMoreLink}>
                Read Full Article <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}