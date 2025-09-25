import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gameplay from "./pages/Gameplay/Gameplay";
import MysticalStone from "./pages/MysticalStone/MysticalStone";
import AuctionHouse from "./pages/AuctionHouse/AuctionHouse";
import GameFi from "./pages/GameFi/GameFi";
import News from "./pages/News/News";
import Studio from "./pages/Studio/Studio";
import Footer from "./components/Footer/Footer";

import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="landing-bg">
        <main className="scroll-container">
          <section id="home" className="section home-section">
            <Home />
          </section>
          <section id="about" className="section about-section">
            <About />
          </section>
          <section id="gameplay" className="section gameplay-section">
            <Gameplay />
          </section>
          <section id="mystical" className="section mystical-section">
            <MysticalStone />
          </section>
          <section id="auction" className="section auction-section">
            <AuctionHouse />
          </section>
          <section id="gamefi" className="section gamefi-section">
            <GameFi />
          </section>
          <section id="news" className="section news-section">
            <News />
          </section>
          <section id="studio" className="section studio-section">
            <Studio />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
