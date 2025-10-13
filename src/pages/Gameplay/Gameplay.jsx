import { useState } from "react";
import "./Gameplay.css";

export default function Gameplay() {
  const [expandedItems, setExpandedItems] = useState({});

  const leftFeatures = [
    {
      title: "Faction Alliances",
      description: "Join powerful factions and work together to dominate the realm. Build alliances, share resources, and coordinate massive battles against rival factions."
    },
    {
      title: "Exploration and Conquers",
      description: "Discover new territories, uncover ancient secrets, and conquer lands to expand your empire. Each region offers unique challenges and rewards."
    },
    {
      title: "Hero Progression System",
      description: "Develop your heroes through skill trees, equipment upgrades, and experience gains. Create unique builds and strategies for different combat scenarios."
    },
    {
      title: "Territorial Control",
      description: "Control strategic locations, manage resources, and defend your territories from enemy incursions. Territory control affects your faction's power and influence."
    },
    {
      title: "Raids and Boss Battles",
      description: "Face epic boss encounters and challenging raids that require teamwork and strategy. Earn rare rewards and legendary equipment."
    },
    {
      title: "Board Game",
      description: "Experience tactical board game mechanics with strategic positioning, resource management, and turn-based combat systems."
    },
  ];

  const rightFeatures = [
    {
      title: "Bloodline Powers",
      description: "Unlock ancient bloodline abilities that grant unique powers and passive bonuses. Each bloodline offers different playstyles and advantages."
    },
    {
      title: "Relic Hunting",
      description: "Search for legendary artifacts and relics scattered across the world. Each relic provides powerful bonuses and unlocks new abilities."
    },
    {
      title: "Crafting and Blacksmithing",
      description: "Create powerful weapons, armor, and items through advanced crafting systems. Upgrade your equipment and forge legendary gear."
    },
    {
      title: "PvP Battles",
      description: "Engage in player versus player combat with ranking systems, tournaments, and competitive leagues. Prove your skills against other players."
    },
    {
      title: "Battle Royale",
      description: "Participate in large-scale battle royale events where only the strongest survive. Last-player-standing gameplay with unique mechanics."
    },
    {
      title: "Others",
      description: "Discover additional gameplay features including mini-games, social features, guild systems, and seasonal events."
    },
  ];

  const toggleExpanded = (index, side) => {
    const key = `${side}-${index}`;
    setExpandedItems(prev => {
      // Nếu click vào item đang mở, đóng nó lại
      if (prev[key]) {
        return { ...prev, [key]: false };
      }
      
      // Đóng tất cả items khác và mở item được click
      const newState = {};
      Object.keys(prev).forEach(k => {
        newState[k] = false;
      });
      newState[key] = true;
      
      return newState;
    });
  };

  return (
    <div className="gameplay-container">
      <h2 className="gameplay-title">Gameplay</h2>
      <div className="gameplay-frames">
        {/* Left Column */}
        <div className="gameplay-column">
          {leftFeatures.map((item, index) => {
            const key = `left-${index}`;
            const isExpanded = expandedItems[key];
            
            return (
              <div key={index} className="gameplay-box">
                <span className="box-title">{item.title}</span>
                <div 
                  className={`box-icon ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => toggleExpanded(index, 'left')}
                ></div>
                <div className={`expanded-content ${isExpanded ? 'show' : ''}`}>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="gameplay-column">
          {rightFeatures.map((item, index) => {
            const key = `right-${index}`;
            const isExpanded = expandedItems[key];
            
            return (
              <div key={index} className="gameplay-box">
                <span className="box-title">{item.title}</span>
                <div 
                  className={`box-icon ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => toggleExpanded(index, 'right')}
                ></div>
                <div className={`expanded-content ${isExpanded ? 'show' : ''}`}>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
