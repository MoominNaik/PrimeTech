import React, { useState } from "react";
import "./GetQuoteForm.css"; // Import the CSS file

const GetQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Quote request submitted! We will get back to you soon.");
    // Here, you can handle form submission (e.g., send data to a backend)
  };

  return (
    <div className="quote-container">
      
      <form onSubmit={handleSubmit} className="quote-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            //placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="contact"
            //placeholder="Enter email"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Describe your requirements..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
      </form>
      <button type="submit" className="submit-btn">Request Estimate</button>
    </div>
  );
};

export default GetQuoteForm;