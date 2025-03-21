import React from "react";
import "./WhyChoseAlarm.css";

const WhyChoseAlarm = () => {
  return (
    <div className="opener-container">
        
      <div className="opener-left">
        <h2>UPGRADE YOUR DOORS WITH <br /> EFFICIENCY, SECURITY, AND <br /> ACCESSIBILITY TODAY!</h2>
      </div>
      <div className="opener-right">
        
        <div className="opener-list">
          <div className="opener-item">
            <span className="opener-icon">🚪</span>
            <p><strong>Effortless Entry</strong> – Enjoy smooth, hands-free access while improving hygiene and convenience.</p>
          </div>
          <div className="opener-item">
            <span className="opener-icon">♿</span>
            <p><strong>Accessibility for All</strong> – Designed to meet ADA standards, making entryways inclusive.</p>
          </div>
          <div className="opener-item">
            <span className="opener-icon">💡</span>
            <p><strong>Energy Efficiency</strong> – Reduce drafts and energy loss while maintaining climate control.</p>
          </div>
          <div className="opener-item">
            <span className="opener-icon">🔒</span>
            <p><strong>Reliable & Secure</strong> – Advanced technology ensures safe and consistent operation.</p>
          </div>
          <div className="opener-item">
            <span className="opener-icon">🛠️</span>
            <p><strong>Versatile & Adaptable</strong> – Compatible with various door types, including sliding and swinging doors.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseAlarm;