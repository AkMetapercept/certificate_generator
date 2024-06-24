import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CertificateContext } from "./CertificateContext";
import "../Style/Dashboard.css";
// import Header from "./Header";
// import Footer from "./Footer";
import logo from "../images/logo.svg";
const Dashboard = () => {
  const { certificates } = useContext(CertificateContext);

  const totalCertificates = certificates?.user?.length || 0;
  return (
    <div className="landing-page">
      <header className="headers">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="nav">
          <a href="/home">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </nav>
      </header>
      <div class="container">
        <div class="header">
          <div className="text1">Certificate Generated List</div>
          <div className="text2">
            Certificates Generated Up To Date : {totalCertificates}
          </div>
        </div>
        <div class="link-container">
          <Link to="/landingpage" className="submit11">
            Want To Generate Certificate
          </Link>
        </div>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {certificates?.user?.map((certificate, index) => (
                <tr key={certificate.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{certificate.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
    </div>
  );
};

export default Dashboard;
