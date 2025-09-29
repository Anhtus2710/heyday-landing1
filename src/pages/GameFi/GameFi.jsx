import { useState, useEffect } from "react";
import "./GameFi.css";

export default function GameFi() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const gamefiCards = [
    {
      id: 1,
      image: "/assets/image/lands.png",
      title: "Lands",
      description: "Generate resources and allow for passive income from other players using the land."
    },
    {
      id: 2,
      image: "/assets/image/heroes.png",
      title: "Heroes and Champions",
      description: "Each hero can be upgraded, gaining access to special skills and abilities."
    },
    {
      id: 3,
      image: "/assets/image/daemon.png",
      title: "Daemon",
      description: "Companions that provide buffs to units and help collect GEMs and Spirit Stones"
    }
  ];

  // Calculate total slides based on cards and cards per view
  const totalSlides = Math.ceil(gamefiCards.length / cardsPerView);

  // Handle responsive cards per view - More granular breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 479) {
        setCardsPerView(1); // Mobile portrait
      } else if (width <= 599) {
        setCardsPerView(1); // Mobile landscape
      } else if (width <= 767) {
        setCardsPerView(2); // Tablet portrait
      } else if (width <= 999) {
        setCardsPerView(2); // Tablet landscape
      } else if (width <= 1399) {
        setCardsPerView(3); // Desktop
      } else {
        setCardsPerView(3); // Large desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset current slide when cards per view changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [cardsPerView]);

  // Handle dot click
  const handleDotClick = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Auto-slide functionality (optional)
  useEffect(() => {
    if (totalSlides <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="gamefi-container">
      <h2 className="gamefi-title">GameFi Mechanism</h2>

      <div className="gamefi-slider-container">
        <div 
          className="gamefi-slider"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${totalSlides * 100}%`
          }}
        >
          {Array.from({ length: totalSlides }, (_, slideIndex) => (
            <div key={slideIndex} className="gamefi-slide">
              <div className="gamefi-grid">
                {gamefiCards
                  .slice(slideIndex * cardsPerView, (slideIndex + 1) * cardsPerView)
                  .map((card) => (
                    <div key={card.id} className="gamefi-card">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="card-image"
                      />
                      <h3 className="card-title">{card.title}</h3>
                      <p className="card-desc">{card.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      {totalSlides > 1 && (
        <div className="pagination-dots">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`pagination-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}