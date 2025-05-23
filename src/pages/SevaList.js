import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SevaList = () => {
  const { t } = useTranslation();

  const [userName, setUserName] = useState('');
  const [selectedSeva, setSelectedSeva] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [gotra, setGotra] = useState('');
  const [pujaMode, setPujaMode] = useState('offline');
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [upiQR, setUpiQR] = useState('');

  const sevas = [
    { name: 'Abhisheka Seva', amount: '1000' },
    { name: 'Sahasranama Archana', amount: '2000' },
    { name: 'Vastra Seva', amount: '5000' },
    { name: 'Chaturveda Prabandha', amount: '1500' },
    { name: 'Rudrabhishekam', amount: '3000' },
    { name: 'Sri Vishnu Sahasranama', amount: '2500' },
  ];

  const handleNameChange = (e) => setUserName(e.target.value);

  const handleSevaChange = (e) => {
    const sevaName = e.target.value;
    setSelectedSeva(sevaName);
    const selected = sevas.find(seva => seva.name === sevaName);
    if (selected) setAmount(selected.amount);

    if (selectedDate) {
      const msg = t('scheduledMessage', { seva: sevaName, date: selectedDate });
      setConfirmationMessage(msg);
    } else {
      setConfirmationMessage('');
    }
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);

    if (selectedSeva) {
      const msg = t('scheduledMessage', { seva: selectedSeva, date });
      setConfirmationMessage(msg);
    } else {
      setConfirmationMessage('');
    }
  };

  const handleGotraChange = (e) => setGotra(e.target.value);

  const handlePujaModeChange = (e) => {
    setPujaMode(e.target.value);

    if (selectedSeva) {
      const modeText = e.target.value === 'online' ? t('online') : t('offline');
      const msg = t('conductedModeMessage', { seva: selectedSeva, mode: modeText });
      setConfirmationMessage(msg);
    } else {
      setConfirmationMessage('');
    }
  };

  const handlePaymentConfirmationChange = (e) => setPaymentConfirmed(e.target.checked);

  const handleWhatsAppRegister = () => {
    if (paymentConfirmed) {
      const message = `Hello, I am ${userName} with Gotra ${gotra}. I would like to register for ${selectedSeva} (₹${amount}) at Sri Anjaneya Swami Temple.\n\nPuja Mode: ${pujaMode === 'online' ? t('online') : t('offline')}.\nScheduled Date: ${selectedDate}.`;
      const whatsappUrl = `https://wa.me/+918074498661?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      alert(t('errorMessage'));
    }
  };

  const isFormValid = userName && selectedSeva && selectedDate && gotra && paymentConfirmed;

  const handleUPIClick = () => {
    const upiLink = `upi://pay?pa=7989288815@postbank&pn=Chennareddy%20Yaswanth%20Kumar&am=${amount}&cu=INR`;
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;
    setUpiQR(qrURL);
  };

  const handlePhonePayClick = () => {
    const upiLink = `upi://pay?pa=7989288815@postbank&pn=Chennareddy%20Yaswanth%20Kumar&am=${amount}&cu=INR#Intent;scheme=upi;package=com.phonepe.app;end`;
    window.open(upiLink, '_blank');
  };

  const handleGPayClick = () => {
    const upiLink = `upi://pay?pa=7989288815@postbank&pn=Chennareddy%20Yaswanth%20Kumar&am=${amount}&cu=INR#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;
    window.open(upiLink, '_blank');
  };

  useEffect(() => {
    if (!isFormValid) {
      setErrorMessage(t('errorMessage'));
    } else {
      setErrorMessage('');
    }
  }, [userName, selectedSeva, selectedDate, gotra, paymentConfirmed, t, isFormValid]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{t('sevaListTitle')}</h1>

      {/* User Name */}
      <div style={styles.formContainer}>
        <label style={styles.label}>{t('yourName')}</label>
        <input
          type="text"
          value={userName}
          onChange={handleNameChange}
          style={styles.input}
          placeholder={t('yourName')}
        />
      </div>

      {/* Select Seva */}
      <div style={styles.formContainer}>
        <label style={styles.label}>{t('selectSeva')}</label>
        <select value={selectedSeva} onChange={handleSevaChange} style={styles.select}>
          <option value="">{`--${t('selectSeva')}--`}</option>
          {sevas.map((seva, idx) => (
            <option key={idx} value={seva.name}>{seva.name}</option>
          ))}
        </select>
      </div>

      {/* Gotra */}
      <div style={styles.formContainer}>
        <label style={styles.label}>{t('enterGotra')}</label>
        <input
          type="text"
          value={gotra}
          onChange={handleGotraChange}
          style={styles.input}
          placeholder={t('enterGotra')}
        />
      </div>

      {/* Date */}
      <div style={styles.formContainer}>
        <label style={styles.label}>{t('selectDate')}</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          style={styles.input}
        />
      </div>

      {/* Puja Mode */}
      <div style={styles.formContainer}>
        <label style={styles.label}>{t('pujaMode')}</label>
        <select value={pujaMode} onChange={handlePujaModeChange} style={styles.select}>
          <option value="offline">{t('offline')}</option>
          <option value="online">{t('online')}</option>
        </select>
      </div>

      {/* Confirmation message and Payment Confirm checkbox in one line */}
      {confirmationMessage && (
        <div style={styles.confirmationAndCheckboxContainer}>
          <p style={styles.confirmationMessage}>{confirmationMessage}</p>

          <div style={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={paymentConfirmed}
              onChange={handlePaymentConfirmationChange}
              id="paymentConfirmed"
              style={styles.checkbox}
            />
            <label htmlFor="paymentConfirmed" style={styles.label}>{t('confirmPayment')}</label>
          </div>
        </div>
      )}

      {/* Payment Amount and Options */}
      {selectedSeva && (
        <div style={styles.paymentDetails}>
          <p style={styles.paymentText}>
            {t('paymentAmount', { seva: selectedSeva, amount })}
          </p>
          <p style={styles.paymentText}>{t('choosePaymentMethod')}</p>
          <div style={styles.paymentOptions}>
            <button style={styles.paymentButton} onClick={handlePhonePayClick}>{t('phonePe')}</button>
            <button style={styles.paymentButton} onClick={handleGPayClick}>{t('gpay')}</button>
            <button style={styles.paymentButton} onClick={handleUPIClick}>{t('upi')}</button>
          </div>
        </div>
      )}

      {/* UPI QR Code */}
      {upiQR && (
        <div style={styles.qrCodeContainer}>
          <h2>{t('scanToPay')}</h2>
          <img alt="UPI QR Code" width="250" height="250" src={upiQR} />
        </div>
      )}

      {/* Payment Confirmation Checkbox */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input
          type="checkbox"
          checked={paymentConfirmed}
          onChange={handlePaymentConfirmationChange}
          id="paymentConfirmed"
          style={{ margin: 0 }}
        />
        <label htmlFor="paymentConfirmed" style={{ margin: 0 }}>
          Confirm Payment
        </label>
      </div>

      {/* Error Message */}
      {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}

      {/* Register Button */}
      <button
        onClick={handleWhatsAppRegister}
        style={{ ...styles.button, opacity: isFormValid ? 1 : 0.6 }}
        disabled={!isFormValid}
      >
        {t('registerWhatsApp')}
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  formContainer: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: '600',
    color: '#34495e',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  select: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  confirmationAndCheckboxContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15px',
    gap: '15px',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  confirmationMessage: {
    backgroundColor: '#dff0d8',
    color: '#3c763d',
    padding: '10px',
    borderRadius: '4px',
    margin: 0,
    flex: 1,
    fontSize: '16px',
  },
  checkbox: {
    marginRight: '8px',
    transform: 'scale(1.2)',
  },
  paymentDetails: {
    marginTop: '20px',
    backgroundColor: '#ecf0f1',
    padding: '15px',
    borderRadius: '6px',
  },
  paymentText: {
    margin: '5px 0',
  },
  paymentOptions: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  paymentButton: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#2980b9',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  qrCodeContainer: {
    textAlign: 'center',
    marginTop: '20px',
  },
  errorMessage: {
    color: 'red',
    marginTop: '10px',
  },
  button: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#27ae60',
    border: 'none',
    borderRadius: '6px',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default SevaList;
