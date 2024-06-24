import React from "react";

import logo from "../images/logo.svg";
import "../Style/certificate.css";
import template from "../images/certificate111.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing-page">
      <header className="headers">
      <img src={logo} className="App-logo" alt="logo" />
        <nav className="nav">
          <a href="/home">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/home">About</a>
          <a href="/home">Contact</a>
        </nav>
      </header>
      <section className="service">
        <h1>Reliable Service</h1>
        <p>
          Experience top-notch certificate generation services at Certificate
          Generator. Serving India since 2016, we prioritize
          transparency, professionalism, and precision.
        </p>
        <img src={template} alt="Service" className="service-image" />
        <Link style={{textDecoration:"none", borderRadius:"5px", marginTop:"85px"}} to={"/landingpage"} className="service-button">Generate Certificate</Link>
      </section>
      <section className="mission">
        <h1>Our Mission</h1>
        <p>
          At Certificate Generator, our mission is clear - to provide
          exceptional certificate generation services to the residents of India. Whether it's a simple or complex certificate, our team of
          experts will ensure accurate results and prompt delivery. We believe
          in transparency and offer premium quality work at competitive prices.
        </p>
        {/* <img src="/LandingPage2.PNG" alt="Mission" className="mission-image" /> */}
      </section>
      <footer className="footer">
        <div className="footer-content">
        <img src={logo} className="App-logo" alt="logo" />
          <div className="contact">
            <p>123-456-7890</p>
            <a href="info@metapercept.com" style={{textDecoration:"none", color:"#333333"}}>info@metapercept.com</a>
            <p> Copyright © 2024 Metapercept Technology Services LLP All Rights
            Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
