import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = () => {
    // Allow the browser default navigation to fire before unmounting from DOM
    setTimeout(() => {
      setIsOpen(false);
    }, 120);
  };

  const menuContent = isOpen ? (
    <>
      <div
        className="mobile-menu-backdrop"
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div
        className="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-menu-top">
          <div className="mobile-brand-wrap">
            <strong>Make My Kerala</strong>
            <span className="mobile-brand-sub">Curated South India Travel</span>
          </div>
          <button
            className="close-button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            type="button"
          >
            ×
          </button>
        </div>

        {/* 25 YEARS MOBILE TRUST BADGE */}
        <div className="mobile-drawer-anniversary">
          <img
            src="/images/25yearslogo-sm.webp"
            alt="Make My Kerala 25 Years"
            width="54"
            height="50"
            className="mobile-drawer-badge-img"
          />
          <div className="mobile-drawer-badge-text">
            <strong>25 Years Heritage</strong>
            <span>Personalized Kerala Journeys</span>
          </div>
        </div>

        <nav aria-label="Mobile main navigation">
          <a href="/" onClick={handleNavClick}>Home</a>
          <a href="/packages" onClick={handleNavClick}>Packages</a>
          <a href="/destinations" onClick={handleNavClick}>Destinations</a>
          <div className="mobile-subnav-group">
            <span className="mobile-subnav-label">Curated Stays</span>
            <div className="mobile-subnav-links">
              <a href="/hotels/kochi" onClick={handleNavClick} className="mobile-subnav-item">
                <span>Kochi Hotels</span>
                <span className="mobile-subnav-badge">10 Stays</span>
              </a>
              <a href="/hotels/munnar" onClick={handleNavClick} className="mobile-subnav-item">
                <span>Munnar Hotels</span>
                <span className="mobile-subnav-badge">15 Stays</span>
              </a>
              <a href="/hotels/thekkady" onClick={handleNavClick} className="mobile-subnav-item">
                <span>Thekkady Hotels</span>
                <span className="mobile-subnav-badge">15 Stays</span>
              </a>
              <a href="/hotels/alleppey" onClick={handleNavClick} className="mobile-subnav-item">
                <span>Alleppey Hotels</span>
                <span className="mobile-subnav-badge">15 Stays</span>
              </a>
              <a href="/hotels/trivandrum" onClick={handleNavClick} className="mobile-subnav-item">
                <span>Trivandrum Hotels</span>
                <span className="mobile-subnav-badge">20 Stays</span>
              </a>
            </div>
          </div>
          <a href="/experience" onClick={handleNavClick}>Experiences</a>
          <a href="/about-us" onClick={handleNavClick}>About Us</a>
          <a href="/contact" onClick={handleNavClick}>Contact</a>
        </nav>

        <div className="mobile-drawer-contact">
          <a href="tel:+919876543210" className="mobile-phone-link">
            <span>📞</span> +91 98765 43210
          </a>
          <a
            href="https://wa.me/919876543210?text=Hi%20MakeMyKerala!%20I%20am%20planning%20a%20trip%20to%20Kerala%20and%20would%20like%20to%20know%20more%20about%20your%20tour%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-wa-link"
          >
            <span>💬</span> Chat on WhatsApp
          </a>
        </div>

        <a
          href="/contact"
          className="mobile-cta"
          onClick={handleNavClick}
        >
          Plan Your Kerala Trip →
        </a>
      </div>
    </>
  ) : null;


  return (
    <div className="mobile-menu-wrapper">
      <button
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {mounted && menuContent ? createPortal(menuContent, document.body) : null}
    </div>
  );
}