import React from 'react';
import logo from "../images/logo.svg";
import '../Style/Header.css';

const Header = () => {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <ul className="App-nav-list">
            <li><a href="/langingpage">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
