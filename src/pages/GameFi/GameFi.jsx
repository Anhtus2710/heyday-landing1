import "./GameFi.css";

export default function GameFi() {
  return (
    <div className="gamefi-container">
      <h2 className="gamefi-title">GameFi Mechanism</h2>

      <div className="gamefi-grid">
        <div className="gamefi-card">
          <img
            src="/assets/image/lands.png"
            alt="Lands"
            className="card-image"
          />
          <h3 className="card-title">Lands</h3>
          <p className="card-desc">
            Generate resources and allow for passive income from other players
            using the land.
          </p>
        </div>

        <div className="gamefi-card">
          <img
            src="/assets/image/heroes.png"
            alt="Heroes and Champions"
            className="card-image"
          />
          <h3 className="card-title">Heroes and Champions</h3>
          <p className="card-desc">
            Each hero can be upgraded, gaining access to special skills and
            abilities.
          </p>
        </div>

        <div className="gamefi-card">
          <img
            src="/assets/image/daemon.png"
            alt="Daemon"
            className="card-image"
          />
          <h3 className="card-title">Daemon</h3>
          <p className="card-desc">
            Companions that provide buffs to units and help collect GEMs and
            Spirit Stones
          </p>
        </div>
      </div>
    </div>
  );
}
