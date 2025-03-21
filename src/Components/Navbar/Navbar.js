import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const [line, setLine] = useState("Services");

  return (
    <>
      <nav className="Navbar">
        <ul className="Links">
          {/* Services Button */}
          <li className="Services" onClick={() => setLine("Services")}>
            <Link to="/" className="link">Services</Link>
            {line === "Services" && <hr />}
          </li>

          <Link to="/" onClick={() => setLine("NavbarLogo")}>
            <img src={logo} alt="Logo" className="NavbarLogo" />
            {line === "NavbarLogo" && <hr />}
          </Link>

          {/* Ask Button */}
          <li className="Ask" onClick={() => setLine("Ask")}>
            <Link to="/Ask" className="link">Ask</Link>
            {line === "Ask" && <hr />}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;