import React from "react";
import "./ContactInfo.css"; // Make sure to create this CSS file

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-item">
        <span className="contact-icon">📞</span> 
        <span className="contact-text">601.521.3772</span>
      </div>
      
      <div className="contact-item">
        <span className="contact-icon">✉️</span>
        <span className="contact-text">rflowers@primetechms.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;