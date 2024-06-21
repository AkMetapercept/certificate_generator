import React from "react";
import "../Style/Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="social">
        <div className="social-icons">
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fab fa-google"></i>
          </a>
        </div>
        <div className="copyright">
          Copyright © 2024 Metapercept Technology Services LLP All Rights
          Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
