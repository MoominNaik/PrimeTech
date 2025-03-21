import React from 'react'
import './Cards.css'
import serviceCardImage from '../Assets/serviceCard.jpg'

const Cards = () => {
  return (
      <div className="services-section">
        <h1>Our Security Services</h1>
        <div className="services-container">

          <div className="service-card">
            <h3>Core Components</h3>
            <p>Control Panel, Sensors, Siren, Keypad, and Monitoring Service for seamless protection.</p>
          </div>

          <div className="service-card">
            <h3>Automatic Door Openers</h3>
            <p>Effortless entry with ADA-compliant door openers, improving security and accessibility.</p>
          </div>

          <div className="service-card">
            <h3>Network Cabling</h3>
            <p>Fast and reliable connectivity with high-quality CAT5e and CAT6 cables for peak performance.</p>
          </div>

          <div className="service-card">
            <h3>Fiber Optic Cabling</h3>
            <p>Blazing-fast speeds, rock-solid security, and unmatched reliability for modern networking.</p>
          </div>

        </div>
      </div>
  );
}

export default Cards
