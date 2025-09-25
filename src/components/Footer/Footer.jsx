import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo nhỏ riêng cho footer */}
        <div className="footer-left">
          <img
            src="/assets/image/logo.png"
            alt="HeyDay Footer Logo"
            className="footer-logo"
          />
          <p className="footer-text">© 2025 HeyDay. All Rights Reserved.</p>
        </div>

        {/* Menu */}
        <div className="footer-right">
          <div className="footer-column">
            <h4>GAME</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Game Features</a></li>
              <li><a href="#">News & Updates</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>DOWNLOAD</h4>
            <ul>
              <li><a href="#">Android</a></li>
              <li><a href="#">iOS</a></li>
              <li><a href="#">Mac</a></li>
              <li><a href="#">PC</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>RESOURCE</h4>
            <ul>
              <li><a href="#">Whitepaper</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
