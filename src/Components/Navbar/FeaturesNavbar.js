import React from "react";
import { Link } from "react-router-dom";
import "./FeaturesNavbar.css";

const FeaturesNavbar = () => {
  return (
    <nav className="FeaturesNavbar">
      <ul className="DropdownMenu separate-navbar">
        <li>
          <Link to="/AlarmSystems" className="dropdown-link">Alarm Systems</Link>
        </li>
        <li>
          <Link to="/network-cabling" className="dropdown-link">Network Cabling</Link>
        </li>
        <li>
          <Link to="/access-control" className="dropdown-link">Access Control</Link>
        </li>
        <li>
          <Link to="/cameras" className="dropdown-link">Cameras</Link>
        </li>
        <li>
          <Link to="/digital-signage" className="dropdown-link">Digital Signage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FeaturesNavbar;