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
  const fields = [ // <<< Defined here
    { label: t('name'), name: 'name', placeholder: 'Ram Prasad' },
    { label: t('gotra'), name: 'gotra', placeholder: 'Bharadwaja' },
    { label: t('purpose'), name: 'purpose', placeholder: t('annadanam') },
    { label: t('amount'), name: 'amount', type: 'number', placeholder: '500' },
    { label: t('email'), name: 'email', type: 'email', placeholder: 'ram@example.com' },
  ];

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
    if (form.amount && parseFloat(form.amount) > 0) { // Ensure amount is valid and positive
      const upi = `upi://pay?pa=7989288815@postbank&pn=Chennareddy%20Yaswanth%20Kumar&am=${form.amount}&cu=INR`;
      const qr = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upi)}`;
      setQrUrl(qr);
      setUpiLink(upi);
    } else {
      setQrUrl('');
      setUpiLink('');
    }
  }, [form.amount]);

  // Handle form submission (for WhatsApp message)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // This function is now triggered by handleWhatsAppRegister, not directly by form submit
    // The form submit button is now the "Confirm Registration" button
  };

  // Handle payment confirmation checkbox change
  const handlePaymentConfirmationChange = (e) => {
    setPaymentConfirmed(e.target.checked);
    if (e.target.checked) {
      setErrorMessage(''); // Clear error if confirmed
    }
  };

  // Handle WhatsApp registration (after payment)
  const handleWhatsAppRegister = () => {
    if (!form.name || !form.amount || !form.email || !form.gotra || !form.purpose) {
      setErrorMessage(t('fillAllFieldsError')); // New translation key needed for this
      return;
    }

    if (paymentConfirmed) {
      const message = `${t('donationDetails')}\n\n` +
                      `${t('name')}: ${form.name}\n` +
                      `${t('gotra')}: ${form.gotra}\n` +
                      `${t('purpose')}: ${form.purpose}\n` +
                      `${t('amount')}: ₹${form.amount}\n` +
                      `${t('email')}: ${form.email}\n\n` +
                      `${t('paymentConfirmedMessage')}`; // New translation key for this message

      const whatsappUrl = `https://wa.me/918074498661?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setConfirmationMessage(t('registrationSuccess')); // New translation key for this
      setErrorMessage(''); // Clear any previous errors
    } else {
      setErrorMessage(t('paymentNotConfirmedError'));
      setConfirmationMessage('');
    }
  };

  // Payment method specific handlers
  const handlePhonePeClick = () => {
    const upiId = "7989288815@axl"; // Your PhonePe UPI ID
    const name = "Chennareddy Yaswanth Kumar";
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${form.amount}&cu=INR`;
    window.open(upiLink, '_blank');
  };

  const handleGPayClick = () => {
    const upiId = "yaswanthkumarch2001-1@okicici"; // Your GPay UPI ID
    const name = "Chennareddy Yaswanth Kumar";
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${form.amount}&cu=INR&mode=02&purpose=00#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;
    window.open(upiLink, '_blank');
  };

  const handleUPIClick = () => {
    const upiLink = `upi://pay?pa=7989288815@postbank&pn=Chennareddy%20Yaswanth%20Kumar&am=${form.amount}&cu=INR`;
    const qr = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;
    setQrUrl(qr); // Show QR code when UPI button is clicked
  };


  // Form validity check
  const isFormValid = form.name && form.amount && parseFloat(form.amount) > 0 && form.email && form.gotra && form.purpose;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>🕉️ {t('donationTitle')}</h2>
      <p style={styles.subtext}>{t('donationSubtext')}</p>
      <form onSubmit={handleSubmit}> {/* Form onSubmit is now just to prevent default */}
        {fields.map((field, idx) => (
          <div key={idx} style={styles.formGroup}>
            <label htmlFor={field.name} style={styles.label}>{field.label}</label>
            <input
              type={field.type || 'text'}
              id={field.name}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder={field.placeholder || ''}
            />
          </div>
        ))}

        {/* Payment Section - only show if amount is entered */}
        {form.amount && parseFloat(form.amount) > 0 && (
          <div style={styles.paymentSection}>
            <h4 style={styles.paymentHeader}>💰 {t('makePayment')}</h4>
            <p style={styles.paymentAmountText}>{t('yourDonationAmount', { amount: form.amount })}</p>

            <div style={styles.paymentOptions}>
              <button type="button" style={styles.paymentButton} onClick={handlePhonePeClick}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/PhonePe_Logo.svg/2560px-PhonePe_Logo.svg.png" alt="PhonePe" style={styles.paymentIcon} />
                {t('phonePe')}
              </button>
              <button type="button" style={styles.paymentButton} onClick={handleGPayClick}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png" alt="GPay" style={styles.paymentIcon} />
                {t('gpay')}
              </button>
              <button type="button" style={styles.paymentButton} onClick={handleUPIClick}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-Vector.svg" alt="UPI" style={styles.paymentIcon} />
                {t('upi')}
              </button>
            </div>

            {qrUrl && (
              <div style={styles.qrCodeContainer}>
                <h4 style={styles.qrHeader}>📱 {t('scanToPay')}</h4>
                <img src={qrUrl} alt="UPI QR Code" style={styles.qrImage} />
              </div>
            )}

            <p style={styles.instructions}>{t('afterPaymentNote')}</p>

            <div style={styles.checkboxContainer}>
              <input
                type="checkbox"
                id="paymentConfirmed"
                checked={paymentConfirmed}
                onChange={handlePaymentConfirmationChange}
                style={styles.checkbox}
              />
              <label htmlFor="paymentConfirmed" style={styles.checkboxLabel}>{t('paymentConfirmationLabel')}</label>
            </div>

            {/* Error and Confirmation Messages */}
            {errorMessage && <p style={styles.errorText}>{errorMessage}</p>}
            {confirmationMessage && <p style={styles.confirmationText}>{confirmationMessage}</p>}


            <button
              type="button" // Important: Set to type="button" to prevent default form submission
              onClick={handleWhatsAppRegister}
              style={{ ...styles.registerButton, opacity: isFormValid && paymentConfirmed ? 1 : 0.6 }}
              disabled={!isFormValid || !paymentConfirmed}
            >
              {t('confirmRegistrationBtn')}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '650px', // Adjusted max width
    margin: '30px auto', // More top/bottom margin for breathing room
    padding: '35px', // Increased padding
    background: 'linear-gradient(135deg, #FFFDE7 0%, #FFECD2 100%)', // Soft, warm gradient
    borderRadius: '18px', // More rounded corners
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.25), 0 5px 10px rgba(0, 0, 0, 0.1)', // Deeper, more refined shadow
    fontFamily: "'Playfair Display', serif", // Elegant font (import via Google Fonts if needed)
    color: '#4A4A4A', // Darker text for readability
    border: '1px solid #FFCC80', // Subtle border with a warm temple color
    position: 'relative', // For potential absolute positioning of elements
    overflow: 'hidden', // Ensures shadows/borders are contained
  },
  header: {
    textAlign: 'center',
    color: '#8B4513', // Deep brown for heading
    marginBottom: '15px',
    fontSize: '2.8rem', // Larger heading
    fontWeight: '700',
    textShadow: '2px 2px 4px rgba(0,0,0,0.15)', // More pronounced text shadow
    fontFamily: "'Merienda', cursive", // Decorative font for the title
    position: 'relative',
    zIndex: 1,
  },
  subtext: {
    textAlign: 'center',
    color: '#6d4c41',
    fontSize: '1.1rem',
    marginBottom: '2.5rem', // More space below subtext
    lineHeight: '1.5',
  },
  formGroup: {
    marginBottom: '22px', // More space between form elements
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#6A1B9A', // Rich purple for labels
    fontSize: '1.15rem', // Slightly larger font for labels
  },
  input: {
    width: '100%',
    padding: '14px 18px', // More padding for input fields
    borderRadius: '10px', // More rounded
    border: '1px solid #D7CCC8', // Soft grey border
    fontSize: '1rem',
    background: '#FFFFFF',
    boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.08)', // Subtle inner shadow
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    '&:focus': { // This won't work directly in inline styles, needs CSS module/styled-components
      borderColor: '#FF8C42',
      boxShadow: '0 0 0 3px rgba(255, 140, 66, 0.2)',
      outline: 'none',
    }
  },
  paymentSection: {
    marginTop: '30px',
    backgroundColor: '#F3E5F5', // Light purple background for payment
    padding: '25px',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    border: '1px solid #CE93D8',
    textAlign: 'center',
  },
  paymentHeader: {
    fontSize: '1.6rem',
    color: '#6A1B9A',
    marginBottom: '15px',
    fontWeight: '700',
  },
  paymentAmountText: {
    fontSize: '1.2rem',
    color: '#8B4513',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paymentOptions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    justifyContent: 'center',
    marginBottom: '25px',
  },
  paymentButton: {
    flex: '1 1 150px', // Flexible but with a base width
    maxWidth: '180px', // Max width for larger screens
    padding: '12px 10px',
    background: 'linear-gradient(45deg, #FFD700 0%, #FFCC00 100%)', // Gold gradient
    color: '#8B4513',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    '&:hover': { // This won't work directly in inline styles
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.25)',
    }
  },
  paymentIcon: {
    width: '28px', // Slightly larger icons
    height: '28px',
    marginRight: '5px',
  },
  paymentLink: { // New style for UPI/PhonePe/GPay links
    display: 'inline-block', // Make them behave like buttons
    padding: '10px 15px',
    backgroundColor: '#00796b', // Teal for UPI
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    marginTop: '10px',
    margin: '0 5px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#004d40',
    }
  },
  qrCodeContainer: {
    textAlign: 'center',
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '15px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    border: '1px dashed #FF8C42',
  },
  qrHeader: {
    color: '#8B4513',
    fontSize: '1.8rem',
    marginBottom: '15px',
    fontWeight: '700',
  },
  qrImage: {
    maxWidth: '100%',
    height: 'auto',
    border: '5px solid #FF8C42', // Saffron border around QR
    borderRadius: '10px',
  },
  instructions: {
    marginTop: '25px',
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.5',
    backgroundColor: '#FFF8E1', // Light yellow background for instructions
    padding: '15px',
    borderRadius: '10px',
    border: '1px solid #FFECB3',
  },
  checkboxContainer: {
    marginTop: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center checkbox
  },
  checkbox: {
    marginRight: '10px',
    transform: 'scale(1.4)', // Larger checkbox
    cursor: 'pointer',
    accentColor: '#FF8C42', // Accent color for checkbox
  },
  checkboxLabel: {
    fontSize: '1.1rem',
    color: '#4A4A4A',
    fontWeight: '600',
  },
  errorText: {
    color: '#D32F2F', // Dark red for errors
    backgroundColor: '#FFEBEE', // Light red background for error message
    padding: '12px',
    borderRadius: '8px',
    marginTop: '20px',
    textAlign: 'center',
    fontWeight: '600',
    border: '1px solid #EF9A9A',
    fontSize: '1rem',
  },
  confirmationText: {
    color: '#2E7D32', // Dark green for success
    backgroundColor: '#E8F5E9', // Light green background for confirmation
    padding: '12px',
    borderRadius: '8px',
    marginTop: '20px',
    textAlign: 'center',
    fontWeight: '600',
    border: '1px solid #A5D6A7',
    fontSize: '1rem',
  },
  registerButton: {
    width: '100%',
    padding: '18px 20px',
    background: 'linear-gradient(45deg, #FF8C42 0%, #FA8806 100%)', // Vibrant orange gradient
    border: 'none',
    borderRadius: '12px', // More rounded
    color: 'white',
    fontSize: '1.6rem', // Larger font
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '30px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.25)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease',
    letterSpacing: '1.5px', // More spaced letters
    '&:disabled': { // This won't work directly in inline styles
      opacity: 0.6,
      cursor: 'not-allowed',
      boxShadow: 'none',
      transform: 'translateY(0)',
    },
    '&:hover:not(:disabled)': { // This won't work directly in inline styles
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.35)',
    }
  },
};

export default DonationForm;