import "./Gameplay.css";

export default function Gameplay() {
  const leftFeatures = [
    "Faction Alliances",
    "Exploration and Conquers",
    "Hero Progression System",
    "Territorial Control",
    "Raids and Boss Battles",
    "Board Game",
  ];

  const rightFeatures = [
    "Bloodline Powers",
    "Relic Hunting",
    "Crafting and Blacksmithing",
    "PvP Battles",
    "Battle Royale",
    "Others",
  ];

  return (
    <div className="gameplay-container">
      <h2 className="gameplay-title">Gameplay</h2>
      <div className="gameplay-frames">
        {/* Left Column */}
        <div className="gameplay-column">
          {leftFeatures.map((item, index) => (
            <div key={index} className="gameplay-box">
              <span className="box-title">{item}</span>
              <span className="box-icon">✦</span>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="gameplay-column">
          {rightFeatures.map((item, index) => (
            <div key={index} className="gameplay-box">
              <span className="box-title">{item}</span>
              <span className="box-icon">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
