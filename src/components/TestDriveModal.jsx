// src/components/TestDriveModal.jsx
import React, { useState } from 'react';
import './TestDriveModal.css';

const TestDriveModal = ({ isOpen, onClose, car }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  if (!isOpen || !car) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend
    console.log('Test Drive Request:', { car: `${car.make} ${car.model}`, ...formData });
    alert(`Request sent for ${car.make} ${car.model}! We will contact you shortly.`);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Book a Test Drive</h2>
        <h3>{car.make} {car.model}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="td-name">Full Name</label>
            <input 
              type="text" 
              id="td-name" 
              name="name" 
              required 
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="td-email">Email Address</label>
            <input 
              type="email" 
              id="td-email" 
              name="email" 
              required 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="td-phone">Phone Number</label>
            <input 
              type="tel" 
              id="td-phone" 
              name="phone" 
              required 
              value={formData.phone} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="td-date">Preferred Date</label>
            <input 
              type="date" 
              id="td-date" 
              name="date" 
              required 
              value={formData.date} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="td-message">Message (Optional)</label>
            <textarea 
              id="td-message" 
              name="message" 
              rows="3" 
              value={formData.message} 
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Request Booking</button>
        </form>
      </div>
    </div>
  );
};

export default TestDriveModal;
