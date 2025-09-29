import "./News.css";

export default function News() {
  return (
    <section className="news-section">
      <div className="news-container">
        <h2 className="news-title">NEWS & UPDATES</h2>
        <div className="news-layout">
          <div className="news-left">
            <div className="news-hero">
              <img src="/assets/image/heyday-news.png" alt="News hero" />
            </div>
            <div className="news-meta">
              <img
                className="news-meta-img"
                src="/assets/image/Container.png"
                alt="News meta image"
              />
            </div>
          </div>

          <aside className="news-right">
            <div className="news-card">
              <img src="/assets/image/News.png" alt="Story of Heyday" />
            </div>

            <div className="news-card">
              <img
                src="/assets/image/News1.png"
                alt="Rise of Empires – The Game"
              />
            </div>

            <div className="news-card">
              <img src="/assets/image/News2.png" alt="Game Modes of Heyday" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
