// import React from 'react';

// const Home = () => {
//   return (
//     <div className="home">
//       <h1>Welcome to Ragiguddada Temple</h1>
//       <p>The Bhaktha of Bhakthas</p>
//       <section>
//         <h2>Hanuman - The embodiment of Bhakthi</h2>
//         <p>Hanuman is worshipped for health, wealth, happiness, and success.</p>
//       </section>
      
//       <section>
//         <h2>Pooja Timings</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Days</th>
//               <th>Timings</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Monday - Friday</td>
//               <td>8:00 am - 11:30 am</td>
//             </tr>
//             <tr>
//               <td>Saturday</td>
//               <td>8:00 am - 12:30 pm</td>
//             </tr>
//             <tr>
//               <td>Sunday</td>
//               <td>8:00 am - 12:30 pm</td>
//             </tr>
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Carousel Section */}
      {/* <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={5000}>
        <div>
          <img src="temple-1.png" alt="Temple Image 1" />
          <p className="legend">Temple Event 1</p>
        </div>
        <div>
          <img src="temple-2.png" alt="Temple Image 2" />
          <p className="legend">Temple Event 2</p>
        </div>
        <div>
          <img src="temple-1.png" alt="Temple Image 3" />
          <p className="legend">Temple Event 3</p>
        </div>
        <div>
          <img src="temple-2.png" alt="Temple Image 3" />
          <p className="legend">Temple Event 3</p>
        </div>
      </Carousel> */}

      {/* Main Content Section */}
      <div style={styles.contentWrapper}>
        {/* Text Content */}
        <div style={styles.textColumn}>
          <h1 style={styles.heading}>
            <span style={styles.highlight}>Welcome to</span>
            Sri Anjaneya Swami Temple
          </h1>
          <p style={styles.paragraph}>
            Discover a sacred space of devotion and tradition. Join our vibrant community in spiritual celebrations,
            charitable events, and the preservation of ancient Vedic rituals.
          </p>
          <div style={styles.buttonGroup}>
            <NavLink to="/seva-list">
              <button style={styles.primaryButton}>Explore Services</button>
            </NavLink>
            <NavLink to="/tour-of-temple">
              <button style={styles.secondaryButton}>Virtual Tour</button>
            </NavLink>
          </div>
        </div>

        {/* Image Section */}
        <div style={styles.imageColumn}>
          <img src="temple-1.png" alt="Temple" style={styles.image} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  textColumn: {
    flex: 1,
    padding: '2rem',
    maxWidth: '500px',
  },
  imageColumn: {
    flex: 1,
    padding: '2rem',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#2a2a2a',
  },
  highlight: {
    color: '#c54b24',
    fontSize: '1.5rem',
    fontWeight: '400',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#4a4a4a',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
  },
  primaryButton: {
    background: '#c54b24',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '30px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  secondaryButton: {
    background: 'transparent',
    color: '#2a2a2a',
    border: '2px solid #2a2a2a',
    padding: '1rem 2rem',
    borderRadius: '30px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
};

export default Home;
