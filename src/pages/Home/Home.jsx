import "./Home.css";

export default function Home() {
  // Sử dụng React.Fragment (<>...</>) làm thẻ bao ngoài cùng
  // vì thẻ <section> đã được định nghĩa ở file App.jsx
  return (
    <>
      {/* Hero Center: Nội dung chính giữa */}
      <div className="hero-center">
        <h1 className="hero-title">Rise & Conquer</h1>
        <button className="btn-hero" aria-label="Game coming soon">
          Available Soon
        </button>
      </div>

      {/* Social Icons: Các icon mạng xã hội bên trái */}
      <nav className="social-icons" aria-label="Social media links">
        <a
          href="https://x.com/EBIZWORLDLTD"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on X (Twitter)"
        >
          <img src="/assets/icons/X-icon.png" alt="X (Twitter)" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join our Telegram"
        >
          <img src="/assets/icons/Tele-icon.png" alt="Telegram" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join our Discord"
        >
          <img src="/assets/icons/dis-icon.png" alt="Discord" />
        </a>
        <a
          href="https://www.facebook.com/EBIZWORLD"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Facebook"
        >
          <img src="/assets/icons/face-icon.png" alt="Facebook" />
        </a>
      </nav>

      {/* Platforms: Các nền tảng hỗ trợ ở dưới */}
      <div className="platforms" aria-label="Available platforms">
        <div className="platform-item">
          <img src="/assets/image/android.png" alt="Android" />
        </div>
        <div className="platform-item">
          <img src="/assets/image/apple.png" alt="iOS" />
        </div>
        <div className="platform-item">
          <img src="/assets/image/mac.png" alt="Mac" />
        </div>
        <div className="platform-item">
          <img src="/assets/image/pc.png" alt="PC" />
        </div>
        <div className="platform-item">
          <img src="/assets/image/board.png" alt="Board Game" />
        </div>
      </div>
    </>
  );
}