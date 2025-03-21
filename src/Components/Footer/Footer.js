import React from "react";
import "./Footer.css"; // Ensure you have this CSS file
import footerlogo from "../Assets/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo placed at the top */}
      <div className="footer-logo">
      <img src={footerlogo} alt="" />
      </div>

      <div className="footer-content">
        <div className="footer-contact">
          
          <div className="contact-items">
            <p>📞 601.521.3772</p>
            <p>🌐 <a href="https://www.primetechms.com" target="_blank" rel="noopener noreferrer">www.primetechms.com</a></p>
            <p>✉️ <a href="mailto:rflowers@primetechms.com">rflowers@primetechms.com</a></p>
          </div>
        </div>  
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PrimeTech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;