import Image from 'next/image';
import styles from "../styles/team.module.css";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Vikram Malhotra',
      role: 'Operations Director',
      image: '/images/team/team-1.png',
      alt: 'Portrait of a TrustMove professional shifting supervisor in uniform coordinating logistics',
    },
    {
      id: 2,
      name: 'Rajesh Sharma',
      role: 'Packing Supervisor',
      image: '/images/team/team-2.png',
      alt: 'Portrait of a senior TrustMove packing specialist ensuring secure inventory standards',
    },
    {
      id: 3,
      name: 'Arjun Kapoor',
      role: 'Transit & Fleet Manager',
      image: '/images/team/team-3.png',
      alt: 'Portrait of a TrustMove logistics fleet coordinator managing safe transport routes',
    },
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        {/* Header Text */}
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>Our Experts</span>
          <h2 className={styles.mainTitle}>Meet Our Shifting Experts</h2>
          <div className={styles.underline}></div>
          <p className={styles.description}>
            Behind every flawless, secure relocation is a dedicated team of highly trained packing supervisors and logistics managers.
          </p>
        </div>

        {/* Team Grid Layout */}
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.profileImage}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <span className={styles.memberRole}>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}