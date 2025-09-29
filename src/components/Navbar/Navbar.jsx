import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${menuOpen ? "is-open" : ""}`}>
      <div className="logo">
        <img src="/assets/image/logo.png" alt="Logo" /> 
      </div>
      <div className="nav-buttons">
        <div href="#about" className="nav-item">ABOUT</div>
        <div href="#gameplay" className="nav-item">GAME FEATURES</div>
        <div href="#community" className="nav-item">COMMUNITY</div>
        <div href="#support" className="nav-item">SUPPORT</div>
      </div>
      <div className="navbar-button">
        <div className="button-frame">
          <div className="button-bg"></div>
        </div>
        <div className="button-text">AVAILABLE SOON</div>
      </div>  

      <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img src="/assets/image/logo.png" alt="Logo" />
          <button className="close" onClick={closeMenu} aria-label="Close menu">✕</button>
        </div>
        <div className="mobile-links">
          <button className="mobile-link" onClick={closeMenu}>ABOUT</button>
          <button className="mobile-link" onClick={closeMenu}>GAME FEATURES</button>
          <button className="mobile-link" onClick={closeMenu}>COMMUNITY</button>
          <button className="mobile-link" onClick={closeMenu}>SUPPORT</button>
          <button className="mobile-cta" onClick={closeMenu}>AVAILABLE SOON</button>
        </div>
      </div>
    </nav>
  );
}
