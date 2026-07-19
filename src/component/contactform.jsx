"use client";
import { useState } from 'react';
import styles from "../styles/contactform.module.css";

export default function ContactForm() {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmission = (e) => {
    e.preventDefault();
    alert(`Thank you ${formFields.name}! Your message has been sent successfully. Our team will get back to you shortly.`);
    setFormFields({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        
        {/* Interactive Message Field Layout Column */}
        <div className={styles.formColumn}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Send Us A Message</h2>
            <p className={styles.formSubtitle}>Have questions about your upcoming shift? Drop your details below and a logistics counselor will reach out to you.</p>
            
            <form onSubmit={handleSubmission} className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                  value={formFields.name}
                  onChange={(e) => setFormFields({ ...formFields, name: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  required
                  value={formFields.email}
                  onChange={(e) => setFormFields({ ...formFields, email: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your 10-digit mobile number"
                  required
                  value={formFields.phone}
                  onChange={(e) => setFormFields({ ...formFields, phone: e.target.value })}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Describe your shifting requirements (Items, Pickup, Target Date)..."
                  required
                  value={formFields.message}
                  onChange={(e) => setFormFields({ ...formFields, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message →
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Dynamic Route Map Frame Column */}
        <div className={styles.mapColumn}>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.834771764619!2d78.5028424!3d17.5153723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b87bba09743%3A0xadbe0fcbbcb5d4ef!2sAlwal%2C%20Secunderabad%2C%20Telangana%20500010!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="South Packer and Movers Secunderabad Headquarters Location Map"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}