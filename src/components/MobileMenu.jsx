import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-menu-wrapper">

      <button
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        <div className="mobile-menu">

          <div className="mobile-menu-top">
            <strong>Make My Kerala</strong>

            <button
              className="close-button"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <nav>
            <a href="/" onClick={closeMenu}>Home</a>
            <a href="#packages" onClick={closeMenu}>Packages</a>
            <a href="#destinations" onClick={closeMenu}>
              Destinations
            </a>
            <a href="#experiences" onClick={closeMenu}>
              Experiences
            </a>
            <a href="#about" onClick={closeMenu}>About Us</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a
            href="#contact"
            className="mobile-cta"
            onClick={closeMenu}
          >
            Plan Your Kerala Trip
          </a>

        </div>
      )}

    </div>
  );
}