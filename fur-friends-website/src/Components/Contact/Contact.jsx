import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      contactNo: '',
      message: ''
    });
  };

  const handleSubmit = () => {
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="contact-container" id='contact'>
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>Get in touch with us for any inquiries or feedback.</p>
      </div>
      <div className="contact-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        <input
          type="tel"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          placeholder="Your Contact Number"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        ></textarea>
        <div className="button-container">
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
