import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';  // Import the translation hook

const Home = () => {
  const { t } = useTranslation();  // Get the translation function
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* 🛕 Welcome Section */}
      <section style={styles.welcomeSection}>
        <div style={styles.contentWrapper}>
          <div style={styles.textColumn}>
            <h1 style={styles.heading}>
              <span style={styles.highlight}>{t('welcomeTo')}</span>
             {t('Sri Anjaneya Swami Temple')}
            </h1>
            <p style={styles.paragraph}>
              {t('discoverSacredSpace')}
            </p>
            
          </div>
          <div style={styles.imageColumn}>
            <img src="temple-1.png" alt="Temple" style={styles.image} />
          </div>
        </div>
      </section>

      {/* ✨ Scrollable Attractive Sections One After Another */}

{/* <Section
  icon="📿"
  title="Seva List & Booking"
  desc="Experience spiritual bliss by booking your preferred sevas at the Hanuman Temple. From daily Archana to special Utsavams, participate in sacred rituals, offer prayers, and receive divine blessings. Limited slots available — book your seva now!"
  button="Book Seva"
  bg="#fff3cd"
  onClick={() => navigate('/seva-list')}
/> */}
<Section
  icon="📿"
  title={t('title')}
  desc={t('desc')}
  button={t('button')}
  bg="#fff3cd"
  onClick={() => navigate('/seva-list')}
/>
      <Section
        icon="📰"
        title={t('newsAndEvents')}
        desc={t('stayUpdated')}
        button={t('readMore')}
        bg="#fff4e6"
        onClick={() => navigate('/news-events')}
      />

      <Section
        icon="🖼️"
        title={t('photoGallery')}
        desc={t('exploreCollection')}
        button={t('viewGallery')}
        bg="#fefefe"
        onClick={() => navigate('/photo-gallery')}
      />

      <Section
        icon="🙋"
        title={t('volunteer')}
        desc={t('joinSeva')}
        button={t('joinUs')}
        bg="#fff4e6"
        onClick={() => navigate('/volunteer')}
      />

      <Section
        icon="💰"
        title={t('donate')}
        desc={t('supportTemple')}
        button={t('donateNow')}
        bg="#fefefe"
        onClick={() => navigate('/donate')}
      />
    </div>
  );
};

// 🧩 Reusable Section Component
const Section = ({ icon, title, desc, button, onClick, bg }) => {
  return (
    <section style={{ ...styles.section, backgroundColor: bg }}>
      <h2 style={styles.sectionTitle}>{icon} {title}</h2>
      <p style={styles.sectionDesc}>{desc}</p>
      <button style={styles.actionButton} onClick={onClick}>{button}</button>
    </section>
  );
};

const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    scrollBehavior: 'smooth',
  },

  // Welcome Section
  welcomeSection: {
    background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
    padding: '1rem 1rem',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
  },
  textColumn: {
    flex: '1',
    maxWidth: '1500px',
    animation: 'fadeInUp 1s ease-in-out',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#2a2a2a',
  },
  highlight: {
    display: 'block',
    fontSize: '1.5rem',
    fontWeight: '400',
    color: '#c54b24',
    marginBottom: '0.5rem',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#4a4a4a',
    lineHeight: '1.8',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
  },
  primaryButton: {
    background: '#c54b24',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '30px',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  secondaryButton: {
    background: 'transparent',  // No background
    color: '#2a2a2a',  // Text color
    border: 'none',  // Remove border
    padding: '1rem 2rem',
    borderRadius: '30px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  imageColumn: {
    flex: '1',
  },
  image: {
    width: '100%',
    maxWidth: '750px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    animation: 'fadeIn 1.5s ease-in-out',
  },

  // Section Styles
  section: {
    padding: '4rem 2rem',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#c54b24',
  },
  sectionDesc: {
    fontSize: '1.1rem',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto 2rem',
  },
  actionButton: {
    background: '#c54b24',
    color: '#fff',
    padding: '0.75rem 2rem',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};

export default Home;
