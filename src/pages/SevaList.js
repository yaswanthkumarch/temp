import React, { useState, useEffect } from 'react';

const SevaList = () => {
  const [userName, setUserName] = useState('');
  const [selectedSeva, setSelectedSeva] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [gotra, setGotra] = useState('');
  const [pujaMode, setPujaMode] = useState('offline'); // Default: "offline"
  const [paymentConfirmed, setPaymentConfirmed] = useState(false); // For payment confirmation
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sevas = [
    { name: 'Abhisheka Seva', amount: '1000' },
    { name: 'Sahasranama Archana', amount: '2000' },
    { name: 'Vastra Seva', amount: '5000' },
    { name: 'Chaturveda Prabandha', amount: '1500' },
    { name: 'Rudrabhishekam', amount: '3000' },
    { name: 'Sri Vishnu Sahasranama', amount: '2500' },
  ];

  // Handle name input
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  // Handle seva selection
  const handleSevaChange = (e) => {
    const sevaName = e.target.value;
    setSelectedSeva(sevaName);
    const selected = sevas.find(seva => seva.name === sevaName);
    setAmount(selected.amount);

    // Set default confirmation message with selected date
    if (selectedDate) {
      setConfirmationMessage(`Your ${sevaName} is scheduled for ${selectedDate}`);
    }
  };

  // Handle date change
  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    setConfirmationMessage(`Your ${selectedSeva} is scheduled for ${date}`);
  };

  // Handle Gotra input
  const handleGotraChange = (e) => {
    setGotra(e.target.value);
  };

  // Handle puja mode change (Online or Offline)
  const handlePujaModeChange = (e) => {
    setPujaMode(e.target.value);
    setConfirmationMessage(`The ${selectedSeva} will be conducted ${e.target.value}.`);
  };

  // Handle payment confirmation checkbox
  const handlePaymentConfirmationChange = (e) => {
    setPaymentConfirmed(e.target.checked);
  };

  // Handle WhatsApp message for registration
  const handleWhatsAppRegister = () => {
    if (paymentConfirmed) {
      const message = `Hello, I am ${userName} with Gotra ${gotra}. I would like to register for ${selectedSeva} (₹${amount}) at Sri Anjaneya Swami Temple.\n\nPuja Mode: ${pujaMode === 'online' ? 'Online' : 'Offline'}.\nScheduled Date: ${selectedDate}.`;
      const whatsappUrl = `https://wa.me/+918074498661?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      alert("Please confirm that you have made the payment before proceeding.");
    }
  };

  // Form validation before enabling the button
  const isFormValid = userName && selectedSeva && selectedDate && gotra && paymentConfirmed;

  // Display error message if form is incomplete
  const validateForm = () => {
    if (!userName || !selectedSeva || !selectedDate || !gotra || !paymentConfirmed) {
      setErrorMessage('Please fill all fields and confirm the payment before proceeding.');
    } else {
      setErrorMessage('');
    }
  };

  useEffect(() => {
    validateForm();
  }, [userName, selectedSeva, selectedDate, gotra, paymentConfirmed]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Seva List - 2025</h1>
      
      {/* User Name Input */}
      <div style={styles.formContainer}>
        <label style={styles.label}>Your Name</label>
        <input
          type="text"
          value={userName}
          onChange={handleNameChange}
          style={styles.input}
          placeholder="Enter your name"
        />
      </div>

      {/* Seva Dropdown */}
      <div style={styles.formContainer}>
        <label style={styles.label}>Select Seva</label>
        <select value={selectedSeva} onChange={handleSevaChange} style={styles.select}>
          <option value="">--Select Seva--</option>
          {sevas.map((seva, index) => (
            <option key={index} value={seva.name}>
              {seva.name}
               {/* (₹{seva.amount}) */}
            </option>
          ))}
        </select>
      </div>

      {/* Gotra Input */}
      <div style={styles.formContainer}>
        <label style={styles.label}>Gotra</label>
        <input
          type="text"
          value={gotra}
          onChange={handleGotraChange}
          style={styles.input}
          placeholder="Enter your Gotra"
        />
      </div>

      {/* Date Picker for Seva */}
      <div style={styles.formContainer}>
        <label style={styles.label}>Select Seva Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          style={styles.input}
        />
      </div>

      {/* Puja Mode Selection */}
      <div style={styles.formContainer}>
        <label style={styles.label}>Puja Mode</label>
        <select value={pujaMode} onChange={handlePujaModeChange} style={styles.select}>
          <option value="offline">Offline</option>
          <option value="online">Online</option>
        </select>
      </div>

      {/* Payment Confirmation Checkbox */}
      <div style={styles.formContainer}>
        <input
          type="checkbox"
          checked={paymentConfirmed}
          onChange={handlePaymentConfirmationChange}
          id="paymentConfirmed"
          style={styles.checkbox}
        />
        <label htmlFor="paymentConfirmed" style={styles.label}>Confirm Payment</label>
      </div>

      {/* Confirmation Message */}
      {confirmationMessage && <p style={styles.confirmationMessage}>{confirmationMessage}</p>}

      {/* Payment Rate and Payment Options */}
      {selectedSeva && (
        <div style={styles.paymentDetails}>
          <p style={styles.paymentText}>Payment Amount for {selectedSeva}: ₹{amount}</p>
          <p style={styles.paymentText}>Choose a Payment Method:</p>
          <div style={styles.paymentOptions}>
            <button style={styles.paymentButton}>PhonePay</button>
            <button style={styles.paymentButton}>Google Pay (GPay)</button>
            <button style={styles.paymentButton}>UPI</button>
          </div>
        </div>
      )}

      {/* Error Message */}
      {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}

      {/* Register Button */}
      <button
        onClick={handleWhatsAppRegister}
        style={styles.button}
        disabled={!isFormValid}
      >
        Register Seva via WhatsApp
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
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  formContainer: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontSize: '16px',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  select: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  checkbox: {
    marginRight: '10px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    opacity: 0.7,
  },
  confirmationMessage: {
    textAlign: 'center',
    fontSize: '16px',
    color: 'green',
    marginTop: '15px',
  },
  errorMessage: {
    textAlign: 'center',
    fontSize: '16px',
    color: 'red',
    marginTop: '15px',
  },
  paymentDetails: {
    marginTop: '20px',
    textAlign: 'center',
  },
  paymentText: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  paymentOptions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  paymentButton: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default SevaList;
