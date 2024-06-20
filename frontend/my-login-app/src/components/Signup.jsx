import React, { useState } from "react";
import "../Style/Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "../images/Login-img.svg";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://certificate-generator-xbiy.onrender.com/register', { name, email, password });
      console.log('Response:', response);

      if (response.data && response.data.status === "success") {
        navigate("/");
      } else {
        const message = response.data.message || "Registration failed";
        setErrorMessage(message);
        console.log('Error message:', message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <div className="login-form">
          <h2>
            Sign Up to <span className="colorlib">CertiGen</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                id="username"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
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

export default Signup;
