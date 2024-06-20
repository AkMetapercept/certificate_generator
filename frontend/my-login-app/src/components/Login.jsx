import React, { useState } from "react";
import "../Style/Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import img from "../images/Login-img.svg";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://certificate-generator-xbiy.onrender.com/login', { email, password });
      console.log('Response:', response);

      if (response.data && response.data.status === "success") {
        navigate("/landingpage");
      } else {
        const message = response.data.message || "Login failed !!!";
        setErrorMessage(message);
        console.log('Error message:', message);
      }
    } catch (error) {
      console.error("Error during Login:", error);
      if (error.response) {
        // Server responded with a status other than 200 range
        setErrorMessage(`Login failed: ${error.response.data.message || error.message}`);
      } else if (error.request) {
        // Request was made but no response received
        setErrorMessage("No response from the server. Please try again later.");
      } else {
        // Something else caused the error
        setErrorMessage("An error occurred during Login. Please try again.");
      }
    }
  };

  return (
    <div className="App">
      <div className="login-container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="login-form">
          <h2>
            Log In to <span className="colorlib">CertiGen</span>
          </h2>
          <p>
          Your Certificates, Your Way – Log In to CertiGen
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Email</label>
              <input
                type="email"
                id="username"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Log In</button>
                <p className="orr">Or</p>
            <button type="submit">
              <Link to="/signup" style={{textDecoration:"none", color:"white"}}>
                Sign Up
              </Link>
            </button>
          </form>
         
          {/* <div className="social-login">
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
          </div> */}
        </div>
        <div className="login-image">
          <img src={img} alt="Login Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Login;
