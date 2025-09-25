import "./Home.css";

export default function Home() {
  return (
    <section className="home-section">
      {/* Hero Center */}
      <div className="hero-center">
        <p className="hero-sub">Rise & Conquer</p>
        <button className="btn-hero">Available Soon</button>
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://x.com/EBIZWORLDLTD">
          <img src="/assets/icons/X-icon.png" alt="X" />
        </a>
        <a href="#">
          <img src="/assets/icons/Tele-icon.png" alt="Telegram" />
        </a>
        <a href="#">
          <img src="/assets/icons/dis-icon.png" alt="Discord" />
        </a>
        <a href="https://www.facebook.com/EBIZWORLD">
          <img src="/assets/icons/face-icon.png" alt="Facebook" />
        </a>
      </div>

      {/* Platforms */}
      <div className="platforms">
        <span>
          <img src="/assets/image/android.png" alt="Android" />
        </span>
        <span>
          <img src="/assets/image/apple.png" alt="iOS" />
        </span>
        <span>
          <img src="/assets/image/mac.png" alt="Mac" />
        </span>
        <span>
          <img src="/assets/image/pc.png" alt="PC" />
        </span>
        <span>
          <img src="/assets/image/board.png" alt="Board Game" />
        </span>
      </div>
    </section>
  );
}
