import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${menuOpen ? "is-open" : ""}`}>
      {/* === ADDED: Container để giới hạn chiều rộng và căn giữa nội dung === */}
      <div className="navbar-container">
        <div className="logo">
          {/* Bạn có thể bọc logo trong Link để về trang chủ */}
          <Link to="/" onClick={closeMenu}>
            <img src="/assets/image/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* === CHANGED: Sử dụng thẻ <a> thay cho <div> cho đúng ngữ nghĩa === */}
        <div className="nav-buttons">
          <a href="#home" className="nav-item" onClick={closeMenu}>ABOUT</a>
          <a href="#gameplay" className="nav-item" onClick={closeMenu}>GAME FEATURES</a>
          <a href="#community" className="nav-item" onClick={closeMenu}>COMMUNITY</a>
          <a href="#support" className="nav-item" onClick={closeMenu}>SUPPORT</a>
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
      </div>

      {/* Mobile Drawer không thay đổi */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img src="/assets/image/logo.png" alt="Logo" />
          <button className="close" onClick={closeMenu} aria-label="Close menu">✕</button>
        </div>
        <div className="mobile-links">
          {/* === CHANGED: Sử dụng <a> cho mobile links === */}
          <a href="#about" className="mobile-link" onClick={closeMenu}>ABOUT</a>
          <a href="#gameplay" className="mobile-link" onClick={closeMenu}>GAME FEATURES</a>
          <a href="#community" className="mobile-link" onClick={closeMenu}>COMMUNITY</a>
          <a href="#support" className="mobile-link" onClick={closeMenu}>SUPPORT</a>
          <button className="mobile-cta" onClick={closeMenu}>AVAILABLE SOON</button>
        </div>
      </div>
    </nav>
  );
}