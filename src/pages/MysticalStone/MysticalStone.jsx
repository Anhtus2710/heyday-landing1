import "./MysticalStone.css";

export default function MysticalStone() {
  return (
    <div className="mystical-container">
      <div className="mystical-text">
        <h2 className="mystical-title">Mystical Stone</h2>
        <p className="mystical-desc">
          The Mystical Stone is a rare and powerful item, granting players
          special abilities and exclusive advantages in battles, resource
          gathering, and strategic planning. These stones hold mystical powers
          that allow players to access unique abilities unavailable elsewhere,
          making them essential for those looking to dominate the land of
          Covenant.
        </p>

        <ul className="mystical-list">
          <li>Grants exclusive abilities and buffs to factions.</li>
          <li>Enhances resource gathering and combat effectiveness.</li>
          <li>Available only through limited-time events and quests.</li>
          <li>Essential for unlocking advanced gameplay features.</li>
        </ul>
      </div>
    </div>
  );
}
