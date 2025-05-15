import React from 'react';

const NewsEvents = () => {
  return (
    <div style={{
      padding: '4rem 2rem',
      textAlign: 'center',
      backgroundColor: '#fff5e1',
      minHeight: '50vh',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <h1 style={{
        color: '#d32f2f',
        fontSize: '2.8rem',
        marginBottom: '1.5rem',
        position: 'relative',
        display: 'inline-block',
      }}>
        🕉️ Hanuman Jayanti 2025
        <div style={{
          width: '80px',
          height: '3px',
          backgroundColor: '#FFD700',
          margin: '0.5rem auto',
        }}></div>
      </h1>
      <p style={{ fontSize: '1.3rem', color: '#333', lineHeight: '1.8' }}>
        🗓️ Date: Saturday, April 12, 2025
        <br />
        ⏰ Auspicious Time: Morning 7:35 AM – 9:11 AM
        <br />
        📍 Location: Sri Anjaneya Swami Temple
      </p>
      <p style={{ fontSize: '1.3rem', color: '#333', lineHeight: '1.8' }}>
        🙏 Join us in celebrating the birth of Lord Hanuman, a day of devotion and spiritual rejuvenation.
        <br />
        🕉️ Participate in the recitation of the Hanuman Chalisa, Ramayana, and offer prayers for strength and protection.
        <br />
        🍽️ Enjoy prasad and community feasts as we come together in faith and unity.
      </p>
      <p style={{
        fontSize: '1.1rem',
        color: '#8e1e1a',
        fontStyle: 'italic',
        marginTop: '2rem',
      }}>
        Stay tuned for more exciting updates and events!
      </p>
    </div>
  );
};

export default NewsEvents;
