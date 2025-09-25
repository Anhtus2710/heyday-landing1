import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/image/logo.png" alt="Logo" /> 
      </div>
      <div className="nav-buttons">
        <div className="nav-item">ABOUT</div>
        <div className="nav-item">GAME FEATURES</div>
        <div className="nav-item">COMMUNITY</div>
        <div className="nav-item">SUPPORT</div>
      </div>
      <div className="navbar-button">
        <div className="button-frame">
          <div className="button-bg"></div>
        </div>
        <div className="button-text">AVAILABLE SOON</div>
      </div>
    </nav>
  );
}
