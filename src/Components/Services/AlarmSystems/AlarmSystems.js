import React from "react";
import "./AlarmSystems.css";
import bannerImg from "../../Assets/Prime Tech - Blank Flyers_page-0005.jpg"; // Use your existing background image
import Cards from "../../Cards/Cards.js";
import WhyChoseAlarm from "./WhyChoseAlarm.js";
const AlarmSystems = () => {
  return (
    <div className="alarm-page">

      {/* Banner Section */}
      <div className="banner">
      <img src={bannerImg} alt="Alarm System Banner" className="banner-img" />

        <div className="banner-overlay">
          <h1>Protect Your Business & Home with Advanced Alarm Systems</h1>
          <p>Our reliable alarm systems provide advanced security for both commercial and residential spaces, detecting unauthorized entry, fire hazards, and other emergencies. With features like motion sensors, real-time monitoring, and remote access via mobile apps, you can keep an eye on your property from anywhere. Designed to protect valuable assets and ensure personal safety, our systems offer swift emergency response, peace of mind, and even potential insurance benefits. Whether for a home or business, our customizable solutions deliver the protection you would need.</p>
          <button className="consult-btn">Request Consultation</button>
        </div>
      </div>
      <div className="opener-h1">
        <h1>Why Choose Our Automatic Door Openers?</h1>
        </div>
        <WhyChoseAlarm/>

        <Cards/>


    
      

    </div>
  );
};

export default AlarmSystems;