import "./AuctionHouse.css";

export default function AuctionHouse() {
  return (
    <div className="auction-container">
      <h2 className="auction-title">Auction House</h2>
      <p className="auction-desc">
        The Auction House is a dynamic trading system that allows players to
        buy, sell, and exchange rare items, resources, and mystical artifacts.
        It creates an immersive economy where players can test their strategy
        and trading skills to gain valuable advantages.
      </p>

      <ul className="auction-list">
        <li>Trade rare resources, legendary weapons, and artifacts.</li>
        <li>Buy and sell items with other players in real time.</li>
        <li>Participate in limited-time auctions for exclusive rewards.</li>
        <li>Build your fortune and influence through strategic trading.</li>
      </ul>
    </div>
  );
}
