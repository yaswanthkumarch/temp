// import React, { useState } from 'react';

// const Volunteer = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Format the message with the form data
//     const message = `Hello, I would like to volunteer.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}`;

//     // Encode the message for the URL
//     const encodedMessage = encodeURIComponent(message);

//     // WhatsApp phone number (international format, without spaces or plus sign)
//     const phoneNumber = '7989288815'; // Replace with your WhatsApp number

//     // Construct the WhatsApp URL
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//     // Open WhatsApp with the pre-filled message
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: "'Arial', sans-serif" }}>
//       <h1 style={{ color: '#8e1e1a', textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>
//         Become a Volunteer
//       </h1>

//       <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff5f5', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
//         {[
//           { label: 'Volunteer Name *', name: 'name', type: 'text' },
//           { label: 'Email *', name: 'email', type: 'email' },
//           { label: 'Phone *', name: 'phone', type: 'tel' },
//           { label: 'Address *', name: 'address', type: 'textarea' }
//         ].map((field, index) => (
//           <div key={index} style={{ marginBottom: '1.5rem' }}>
//             <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#444' }}>
//               {field.label}
//             </label>
//             {field.type === 'textarea' ? (
//               <textarea
//                 name={field.name}
//                 value={formData[field.name]}
//                 onChange={handleInputChange}
//                 required
//                 style={{
//                   width: '100%',
//                   padding: '0.8rem',
//                   border: '1px solid #ddd',
//                   borderRadius: '4px',
//                   fontSize: '1rem',
//                 }}
//               />
//             ) : (
//               <input
//                 type={field.type}
//                 name={field.name}
//                 value={formData[field.name]}
//                 onChange={handleInputChange}
//                 required
//                 style={{
//                   width: '100%',
//                   padding: '0.8rem',
//                   border: '1px solid #ddd',
//                   borderRadius: '4px',
//                   fontSize: '1rem',
//                 }}
//               />
//             )}
//           </div>
//         ))}

//         <button
//           type="submit"
//           style={{
//             backgroundColor: '#8e1e1a',
//             color: 'white',
//             padding: '1rem 2rem',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             width: '100%',
//             fontSize: '1.1rem',
//             transition: 'background-color 0.3s ease',
//           }}
//         >
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Volunteer;


import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import i18n

const Volunteer = () => {
  const { t } = useTranslation(); // Initialize translation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `${t('volunteerWhatsappMessage')}\n\n${t('name')}: ${formData.name}\n${t('email')}: ${formData.email}\n${t('phone')}: ${formData.phone}\n${t('address')}: ${formData.address}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '7989288815';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: "'Arial', sans-serif" }}>
      <h1 style={{ color: '#8e1e1a', textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>
        {t('volunteerTitle')}
      </h1>

      <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff5f5', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        {[
          { label: t('volunteerName'), name: 'name', type: 'text' },
          { label: t('email'), name: 'email', type: 'email' },
          { label: t('phone'), name: 'phone', type: 'tel' },
          { label: t('address'), name: 'address', type: 'textarea' }
        ].map((field, index) => (
          <div key={index} style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#444' }}>
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem',
                }}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem',
                }}
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          style={{
            backgroundColor: '#8e1e1a',
            color: 'white',
            padding: '1rem 2rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            fontSize: '1.1rem',
            transition: 'background-color 0.3s ease',
          }}
        >
          {t('submitApplication')}
        </button>
      </form>
    </div>
  );
};

export default Volunteer;
