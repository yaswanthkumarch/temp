import React from 'react';
import styles from './Footer.module.scss';
import { FaWhatsapp, FaGlobeAsia, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic to handle form submission here
    alert('Thank you for subscribing to temple updates!');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h2>🕉️ Sri Anjaneya Swami Temple</h2>
          <p>Bringing Devotion, Community, and Culture Together</p>
        </div>

        <div className={styles.newsletter}>
          <h4>📩 Stay Connected with the Temple</h4>
          <p>Receive updates on festivals, poojas, and special events in your inbox.</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email for blessings ✨" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Sri Anjaneya Swami Temple. All rights reserved.</p>
        <p>
          Designed & developed by{' '}
          <a
            href="https://wa.me/917989288815?text=Hi%20Yaswanth%20Kumar%20CH%2C%20I%20am%20looking%20for%20a%20website%20for%20my%20company."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.devLink}
          >
            Yaswanth Kumar CH
          </a>
        </p>

        <div className={styles.social}>
          <a href="https://wa.me/yourwhatsapplink" data-label="WhatsApp" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          <a href="https://yourwebsite.com" data-label="Website" target="_blank" rel="noreferrer"><FaGlobeAsia /></a>
          <a href="mailto:your@email.com" data-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
