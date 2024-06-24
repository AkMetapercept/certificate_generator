import React from "react";
import "../Style/Footer.css";
import logo from "../images/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="contact">
          <p>123-456-7890</p>
          <a
            href="info@metapercept.com"
            style={{ textDecoration: "none", color: "#333333" }}
          >
            info@metapercept.com
          </a>
          <p>
            {" "}
            Copyright © 2024 Metapercept Technology Services LLP All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
