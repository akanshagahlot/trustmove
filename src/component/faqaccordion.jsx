import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from "../styles/faqaccordion.module.css";

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'How early in advance should I book my relocation with TrustMove?',
      answer: 'We recommend scheduling your move at least 7 to 10 days before your preferred shifting date. This helps our team plan your home shifting services in India efficiently and ensures the availability of packing materials, vehicles, and experienced movers.',
    },
    {
      question: 'What packing materials do you use for household shifting?',
      answer: 'Our packing and shifting services include premium bubble wrap, corrugated boxes, stretch film, foam sheets, edge protectors, and high-quality packing tape to keep your belongings safe throughout the relocation process.',
    },
    {
      question: 'Are there any hidden charges in your moving services?',
      answer: 'No. As one of the trusted packers and movers India, we believe in complete pricing transparency. The quotation provided after assessing your moving requirements includes all applicable charges with no hidden costs.',
    },
    {
      question: 'How do you handle office computers and electronic equipment during relocation?',
      answer: 'Our trained professionals use anti-static packing materials, secure cartons, and proper labeling to safely transport computers, servers, office electronics, and other sensitive equipment to their destination.',
    },
    {
      question: 'Do you provide warehouse storage if my new location is not ready?',
      answer: 'Yes. We offer secure warehouse storage solutions for both short-term and long-term requirements. Your belongings remain protected in monitored storage facilities until you are ready for delivery.',
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        
        {/* Intro Section Header Text */}
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>Clear Answers</span>
          <h2 className={styles.mainTitle}>Frequently Asked Questions</h2>
          <div className={styles.underline}></div>
          <p className={styles.description}>
            Find answers to common questions about our home shifting, office relocation, packing, transportation, and storage services to help you plan a smooth move.
          </p>
        </div>

        {/* Accordion Interface Loop */}
        <div className={styles.accordionContainer}>
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`${styles.accordionItem} ${isOpen ? styles.itemOpen : ''}`}
              >
                <button
                  className={styles.questionTrigger}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.iconToggle}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>

                <div className={`${styles.answerWrapper} ${isOpen ? styles.showAnswer : ''}`}>
                  <div className={styles.answerContent}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}