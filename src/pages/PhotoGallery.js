// // PhotoGallery.js
// import React from 'react';

// const PhotoGallery = () => {
//   return (
//     <div style={{
//       padding: '3rem',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       backgroundColor: '#fafafa', // Light background to contrast the images
//     }}>
//       <h1 style={{
//         color: '#2d2d2d',
//         textAlign: 'center',
//         marginBottom: '3rem',
//         fontSize: '3.5rem', // Larger title for emphasis
//         fontWeight: '600',
//         letterSpacing: '2px', // Slight spacing for elegance
//         textTransform: 'uppercase', // Modern look
//       }}>
//         Temple Photo Gallery
//       </h1>
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Adjust grid for a balanced look
//         gap: '2rem', // More space between items
//         padding: '1rem',
//       }}>
//         {[1, 2, 3, 4, 5, 6].map((num) => (
//           <div key={num} style={{
//             position: 'relative',
//             overflow: 'hidden',
//             borderRadius: '16px', // Round corners for a modern card look
//             boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Soft, modern shadow
//             transition: 'transform 0.4s ease, box-shadow 0.4s ease', // Smooth hover transitions
//             cursor: 'pointer',
//             ':hover': { transform: 'scale(1.05)', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)' },
//           }}>
//             <img 
//               src={`/temple-${num}.png`} // Update with actual image paths
//               alt={`Temple ${num}`}
//               style={{
//                 width: '100%',
//                 height: 'auto',
//                 maxHeight: '300px',
//                 objectFit: 'cover',
//                 borderRadius: '16px',
//                 transition: 'transform 0.3s ease',
//               }}
//             />
//             <div style={{
//               position: 'absolute',
//               top: '0',
//               left: '0',
//               right: '0',
//               bottom: '0',
//               background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1))', // Gradient overlay
//               color: 'white',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               opacity: 0,
//               transition: 'opacity 0.3s ease',
//             }} className="overlay">
//               <span style={{
//                 fontSize: '1.8rem', // Larger, bold font for readability
//                 fontWeight: 'bold',
//                 textAlign: 'center',
//                 padding: '15px',
//                 textTransform: 'uppercase', // Uppercase text for elegance
//                 letterSpacing: '1px', // Spacing for clean look
//               }}>
//                 Temple {num}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhotoGallery;

// PhotoGallery.js

import React from 'react';
import { useTranslation } from 'react-i18next';
const images = [
  { src: '/temple-1.png', title: '' },
  { src: '/temple-1.png', title: '' },
  { src: '/temple-1.png', title: '' },
  { src: '/img-1.jpg', title: '' },
  { src: '/img-1.jpg', title: '' },
  { src: '/img-1.jpg', title: '' },
   { src: '/img-2.jpg', title: '' },
  { src: '/img-2.jpg', title: '' },
  { src: '/img-2.jpg', title: '' },
  { src: '/temple-3.jpg', title: '' },
  { src: '/temple-3.jpg', title: '' },
  { src: '/temple-3.jpg', title: '' },
];

const PhotoGallery = () => {
  const { t } = useTranslation();
  return (
    <div style={{
      padding: '3rem',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#fdfdfd',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '3rem',
        color: '#7b1f1f',
        marginBottom: '2rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}>
        {t('galary')}
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
      }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
            }}
          >
            <img
              src={image.src}
              alt={image.title}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            <div style={{
              padding: '1rem',
              background: '#fff',
              textAlign: 'center',
              fontWeight: '600',
              fontSize: '1.1rem',
              color: '#333',
            }}>
              {image.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
