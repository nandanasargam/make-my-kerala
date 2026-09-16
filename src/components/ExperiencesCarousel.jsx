import { useState, useRef } from "react";

const experiences = [
  {
    badge: "Sample Traveller Story • Backwater Houseboat",
    title: "Serene Alleppey Houseboat Stay",
    description:
      "Cruise through Kerala's peaceful backwaters aboard a traditional houseboat and experience the authentic charm of God's Own Country.",
    image: "/images/allapey.webp",
    packageLink: "/packages/backwater-experience/",
    exploreLink: "/experience#backwaters"
  },
  {
    badge: "Sample Traveller Story • Mountain Trails",
    title: "Misty Munnar Tea Plantations",
    description:
      "Wake up to rolling clouds across endless tea estates, scenic mountain dams, and cool fresh hill station air.",
    image: "/images/munnar.webp",
    packageLink: "/packages/family-holiday/",
    exploreLink: "/experience#hill-stations"
  },
  {
    badge: "Sample Traveller Story • Wildlife & Spice",
    title: "Thekkady Wildlife & Spice Trails",
    description:
      "Spot elephants along the waters of Periyar Lake and walk through aromatic cardamom, cinnamon, and pepper gardens.",
    image: "/images/thekkady.webp",
    packageLink: "/packages/keralanature/",
    exploreLink: "/experience#wildlife"
  },
  {
    badge: "Sample Traveller Story • Coastal Sunsets",
    title: "Golden Shores of Kovalam",
    description:
      "Relax on palm-lined Arabian Sea beaches, watch breathtaking coastal sunsets, and enjoy soothing ocean breezes.",
    image: "/images/kovalam.webp",
    packageLink: "/packages/honeymoon-escape/",
    exploreLink: "/experience#beaches"
  }
];

export default function ExperiencesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevExperience = () => {
    setActiveIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const nextExperience = () => {
    setActiveIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextExperience();
    } else if (diff < -45) {
      prevExperience();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const current = experiences[activeIndex];

  return (
    <div
      className="experience-right"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Kerala Travel Experiences"
      style={{ position: "relative", minHeight: "620px", overflow: "hidden" }}
    >
      <div
        className="experience-image"
        style={{
          backgroundImage: `url(${current.image})`,
          transition: "background-image 0.6s ease-in-out"
        }}
      />
      <div className="experience-overlay" />

      <button
        className="experience-arrow experience-arrow-left"
        type="button"
        onClick={prevExperience}
        aria-label="Previous experience"
        style={{
          border: "none",
          cursor: "pointer",
          color: "white",
          fontSize: "28px"
        }}
      >
        &#8249;
      </button>

      <button
        className="experience-arrow experience-arrow-right"
        type="button"
        onClick={nextExperience}
        aria-label="Next experience"
        style={{
          border: "none",
          cursor: "pointer",
          color: "white",
          fontSize: "28px"
        }}
      >
        &#8250;
      </button>

      <div className="experience-slide-content">
        <span className="experience-slide-badge">{current.badge}</span>
        <h2>{current.title}</h2>
        <p>{current.description}</p>

        <div className="experience-buttons">
          <a href="/contact" className="experience-btn experience-btn-green">
            Plan This Trip
          </a>

          <a href={current.exploreLink} className="experience-btn experience-btn-orange">
            View Experience
          </a>
        </div>

        {/* Small indicator dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "22px" }}>
          {experiences.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to experience ${idx + 1}`}
              style={{
                width: activeIndex === idx ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                border: "none",
                background: activeIndex === idx ? "#f1c47b" : "rgba(255, 255, 255, 0.4)",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
