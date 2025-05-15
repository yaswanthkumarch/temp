// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';  // Import the hook
// import styles from './NavBar.module.scss';

// const NavBar = () => {
//   const { t, i18n } = useTranslation();  // Correctly use i18n object from useTranslation hook
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const handleLanguageChange = (e) => {
//     const selectedLanguage = e.target.value;
//     i18n.changeLanguage(selectedLanguage);  // This should work if i18next is properly set up
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <span>{t('Sri Anjaneya Swami Temple')}</span>  {/* Translate text based on selected language */}
//       </div>
      
//       <div
//         className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
//         onClick={toggleMenu}
//         role="button"
//         tabIndex={0}
//         aria-label="Toggle navigation"
//         onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
//       >
//         <span className={styles.bar}></span>
//         <span className={styles.bar}></span>
//         <span className={styles.bar}></span>
//       </div>

//       <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
//         {[
//           ['/', t('home')],
//           ['/seva-list', t('sevaList')],
//           ['/history', t('history')],
//           ['/news-events', t('newsEvents')],
//           ['/photo-gallery', t('photoGallery')],
//           ['/volunteer', t('volunteer')],
//           ['/donate', t('donate')],
//           ['/calendar', t('calendar')],
//           ['/contact', t('contact')]
//         ].map(([path, label]) => (
//           <NavLink
//             key={path}
//             to={path}
//             className={({ isActive }) => isActive ? styles.activeLink : ''}
//             onClick={toggleMenu}
//           >
//             {label}
//           </NavLink>
//         ))}

//         <div className={styles.languageSelector}>
//           <select value={i18n.language} onChange={handleLanguageChange}>  {/* Ensure value is set to current language */}
//             <option value="en">English</option>
//             <option value="kn">ಕನ್ನಡ</option>
//             <option value="te">తెలుగు</option>
//             <option value="ta">தமிழ்</option>
//           </select>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;












import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/seva-list', label: t('sevaList') },
    { path: '/history', label: t('history') },
    { path: '/news-events', label: t('newsEvents') },
    { path: '/photo-gallery', label: t('photoGallery') },
    { path: '/volunteer', label: t('volunteer') },
    { path: '/donate', label: t('donate') },
    { path: '/calendar', label: t('calendar') },
    { path: '/contact', label: t('contact') },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>{t('Sri Anjaneya Swami Temple')}</span>
      </div>

      <div
        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        aria-label="Toggle navigation"
        onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => (isActive ? styles.activeLink : '')}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </NavLink>
        ))}

        <div className={styles.languageSelector}>
          <select value={i18n.language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="te">తెలుగు</option>
            <option value="ta">தமிழ்</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
