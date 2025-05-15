// import React, { useState, useEffect } from 'react';

// const DonationForm = () => {
//   const [form, setForm] = useState({
//     name: '',
//     amount: '',
//     gotra: '',
//     purpose: '',
//     email: '',
//   });

//   const [qrUrl, setQrUrl] = useState('');
//   const [upiLink, setUpiLink] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   useEffect(() => {
//     if (form.amount) {
//       const upi = `upi://pay?pa=7989288815@postbank&pn=Chennareddy%20Yaswanth%20Kumar&am=${form.amount}&cu=INR`;
//       const qr = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upi)}`;
//       setQrUrl(qr);
//       setUpiLink(upi);
//     } else {
//       setQrUrl('');
//       setUpiLink('');
//     }
//   }, [form.amount]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = ` *Donation Details* 
// Name: ${form.name}
// Gotra: ${form.gotra}
// Purpose: ${form.purpose}
// Amount: ₹${form.amount}
// Email: ${form.email}`;

//     const whatsappUrl = `https://wa.me/918074498661?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.header}>🕉️ Hanuman Jayanti Donation Form</h2>
//       <p style={styles.subtext}>Support sacred services & rituals. Every contribution matters! </p>
//       <form onSubmit={handleSubmit}>
//         {fields.map((field, idx) => (
//           <div key={idx} style={styles.field}>
//             <label style={styles.label}>{field.label}</label>
//             <input
//               type={field.type || 'text'}
//               name={field.name}
//               value={form[field.name]}
//               onChange={handleChange}
//               required
//               style={styles.input}
//               placeholder={field.placeholder || ''}
//             />
//           </div>
//         ))}

//         {qrUrl && (
//           <div style={styles.qrSection}>
//             <h4 style={styles.qrHeader}>📱 Scan & Pay via UPI</h4>
//             <img src={qrUrl} alt="UPI QR Code" style={styles.qrImage} />
//             <p style={styles.instructions}>After payment, click the button below to notify us.</p>
//             <button type="submit" style={styles.paidButton}>
//                I Have Paid – Notify via WhatsApp
//             </button>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// const fields = [
//   { label: ' Full Name', name: 'name', placeholder: 'Ram Prasad' },
//   { label: ' Gotram', name: 'gotra', placeholder: 'Bharadwaja' },
//   { label: ' Purpose of Donation', name: 'purpose', placeholder: 'Annadanam' },
//   { label: ' Amount (₹)', name: 'amount', type: 'number', placeholder: '500' },
//   { label: ' Email Address', name: 'email', type: 'email', placeholder: 'ram@example.com' },
// ];

// const styles = {
//   container: {
//     maxWidth: '550px',
//     margin: '2rem auto',
//     padding: '2rem',
//     background: '#fffbea',
//     borderRadius: '16px',
//     boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
//     fontFamily: "'Segoe UI', sans-serif",
//     color: '#4e342e',
//   },
//   header: {
//     textAlign: 'center',
//     color: '#d84315',
//     fontSize: '1.8rem',
//     marginBottom: '0.5rem',
//   },
//   subtext: {
//     textAlign: 'center',
//     color: '#6d4c41',
//     fontSize: '1rem',
//     marginBottom: '2rem',
//   },
//   field: {
//     marginBottom: '1.3rem',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '0.5rem',
//     fontWeight: '600',
//   },
//   input: {
//     width: '100%',
//     padding: '0.8rem',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     fontSize: '1rem',
//     background: '#fffdf5',
//   },
//   qrSection: {
//     textAlign: 'center',
//     marginTop: '2rem',
//   },
//   qrHeader: {
//     fontSize: '1.2rem',
//     color: '#2e7d32',
//     marginBottom: '1rem',
//   },
//   qrImage: {
//     width: '250px',
//     height: '250px',
//     borderRadius: '12px',
//     border: '2px solid #e0e0e0',
//   },
//   instructions: {
//     marginTop: '1rem',
//     fontSize: '0.95rem',
//     color: '#555',
//   },
//   paidButton: {
//     marginTop: '1.5rem',
//     padding: '1rem',
//     backgroundColor: '#2e7d32',
//     color: 'white',
//     border: 'none',
//     borderRadius: '8px',
//     fontSize: '1.1rem',
//     cursor: 'pointer',
//     transition: 'background 0.3s ease',
//   },
// };

// export default DonationForm;
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const DonationForm = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: '',
    amount: '',
    gotra: '',
    purpose: '',
    email: '',
  });

  const [qrUrl, setQrUrl] = useState('');
  const [upiLink, setUpiLink] = useState('');
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Generate UPI link and QR code when amount is provided
  useEffect(() => {
    if (form.amount) {
      const upi = `upi://pay?pa=7989288815@postbank&pn=Chennareddy%20Yaswanth%20Kumar&am=${form.amount}&cu=INR`;
      const qr = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upi)}`;
      setQrUrl(qr);
      setUpiLink(upi);
    } else {
      setQrUrl('');
      setUpiLink('');
    }
  }, [form.amount]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `${t('donationDetails')} 
${t('name')}: ${form.name}
${t('gotra')}: ${form.gotra}
${t('purpose')}: ${form.purpose}
${t('amount')}: ₹${form.amount}
${t('email')}: ${form.email}`;

    const whatsappUrl = `https://wa.me/918074498661?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Handle payment confirmation checkbox change
  const handlePaymentConfirmationChange = (e) => {
    setPaymentConfirmed(e.target.checked);
  };

  // Handle WhatsApp registration (after payment)
  const handleWhatsAppRegister = () => {
    if (paymentConfirmed) {
      setConfirmationMessage(t('confirmationMessage'));
    } else {
      setErrorMessage(t('paymentNotConfirmedError'));
    }
  };

  // Fields for the form
  const fields = [
    { label: t('name'), name: 'name', placeholder: 'Ram Prasad' },
    { label: t('gotra'), name: 'gotra', placeholder: 'Bharadwaja' },
    { label: t('purpose'), name: 'purpose', placeholder: t('annadanam') },
    { label: t('amount'), name: 'amount', type: 'number', placeholder: '500' },
    { label: t('email'), name: 'email', type: 'email', placeholder: 'ram@example.com' },
  ];

  const isFormValid = form.name && form.amount && form.email && paymentConfirmed;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🕉️ {t('donationTitle')}</h2>
      <p style={styles.subtext}>{t('donationSubtext')}</p>
      <form onSubmit={handleSubmit}>
        {fields.map((field, idx) => (
          <div key={idx} style={styles.field}>
            <label style={styles.label}>{field.label}</label>
            <input
              type={field.type || 'text'}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder={field.placeholder || ''}
            />
          </div>
        ))}

        {qrUrl && (
          <div style={styles.qrSection}>
            <h4 style={styles.qrHeader}>📱 {t('scanPay')}</h4>
            <img src={qrUrl} alt="UPI QR Code" style={styles.qrImage} />
           
            
            <div style={styles.paymentButtons}>
              <a href={upiLink} style={styles.paymentLink}>Pay via UPI</a>
              <a href={`phonepe://pay?url=${encodeURIComponent(upiLink)}`} style={styles.paymentLink}>Pay via PhonePe</a>
              <a href={`tez://upi/pay?url=${encodeURIComponent(upiLink)}`} style={styles.paymentLink}>Pay via GPay</a>
            </div>
             <p style={styles.instructions}>{t('afterPaymentNote')}</p>

            <p style={styles.confirmationText}>{confirmationMessage}</p>

            <div style={styles.checkboxContainer}>
              <input
                type="checkbox"
                checked={paymentConfirmed}
                onChange={handlePaymentConfirmationChange}
                style={styles.checkbox}
              />
              <label style={styles.checkboxLabel}>{t('paymentConfirmationLabel')}</label>
            </div>

            {errorMessage && <p style={styles.errorText}>{errorMessage}</p>}

            <button
              onClick={handleWhatsAppRegister}
              style={styles.registerButton}
              disabled={!isFormValid}
            >
              {t('confirmRegistrationBtn')}
            </button>
          </div>
        )}

        {/* <button type="submit" style={styles.paidButton}>
          {t('notifyBtn')}
        </button> */}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '550px',
    margin: '2rem auto',
    padding: '2rem',
    background: '#fffbea',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
    fontFamily: "'Segoe UI', sans-serif",
    color: '#4e342e',
  },
  header: {
    textAlign: 'center',
    color: '#d84315',
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
  },
  subtext: {
    textAlign: 'center',
    color: '#6d4c41',
    fontSize: '1rem',
    marginBottom: '2rem',
  },
  field: {
    marginBottom: '1.3rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    background: '#fffdf5',
  },
  qrSection: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  qrHeader: {
    fontSize: '1.2rem',
    color: '#2e7d32',
    marginBottom: '1rem',
  },
  qrImage: {
    width: '250px',
    height: '250px',
    borderRadius: '12px',
    border: '2px solid #e0e0e0',
  },
  instructions: {
    marginTop: '1rem',
    fontSize: '0.95rem',
    color: '#555',
  },
  paymentButtons: {
    marginTop: '1rem',
  },
  paymentLink: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#00796b',
    textDecoration: 'none',
  },
  confirmationText: {
    marginTop: '1rem',
    color: '#388e3c',
  },
  checkboxContainer: {
    marginTop: '1rem',
  },
  checkbox: {
    marginRight: '0.5rem',
  },
  checkboxLabel: {
    fontSize: '1rem',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: '1rem',
    marginTop: '1rem',
  },
  registerButton: {
    marginTop: '1.5rem',
    padding: '1rem',
    backgroundColor: '#2e7d32',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  paidButton: {
    marginTop: '1.5rem',
    padding: '1rem',
    backgroundColor: '#2e7d32',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};

export default DonationForm;
