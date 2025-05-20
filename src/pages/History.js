import React from 'react';
import { useTranslation } from 'react-i18next';

const History = () => {
  const { t } = useTranslation();

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: "'Roboto', sans-serif",
      lineHeight: '1.7',
      backgroundColor: '#f4f7fa',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{
        color: '#ff6f61',
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '2.5rem',
        fontWeight: '700',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
      }}>
        {t('templeHistory.title')}
      </h1>

      <p style={{
        fontSize: '1.2rem',
        marginBottom: '2rem',
        color: '#333',
        textAlign: 'justify',
        lineHeight: '1.8',
        fontWeight: '400',
      }}>
        {t('templeHistory.paragraph1')}
      </p>

      <p style={{
        fontSize: '1.2rem',
        color: '#333',
        textAlign: 'justify',
        lineHeight: '1.8',
        fontWeight: '400',
        borderTop: '2px solid #ff6f61',
        paddingTop: '1rem',
      }}>
        {t('templeHistory.paragraph2')}
      </p>

      <div style={{
        marginTop: '3rem',
        textAlign: 'center',
      }}>
        {/* <img 
          src="temple-2.png" 
          alt="Hanuman Temple" 
          style={{
            width: '100%',
            maxWidth: '600px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
            margin: '0 auto',
          }}
        /> */}
      </div>
    </div>
  );
};

export default History;
