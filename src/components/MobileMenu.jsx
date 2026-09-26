import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [keralaOpen, setKeralaOpen] = useState(true);
  const [tnOpen, setTnOpen] = useState(false);

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
          {/* KERALA HOTELS ACCORDION */}
          <div className="mobile-subnav-group">
            <div
              className="mobile-state-accordion-header"
              onClick={() => setKeralaOpen(!keralaOpen)}
              role="button"
              tabIndex={0}
            >
              <div className="mobile-state-title-wrap">
                <span className="mobile-state-name">Kerala Hotels</span>
                <span className="mobile-state-count">17 Destinations</span>
              </div>
              <span className="mobile-accordion-toggle">{keralaOpen ? '−' : '+'}</span>
            </div>

            {keralaOpen && (
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
                <a href="/hotels/kumarakom" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Kumarakom Hotels</span>
                  <span className="mobile-subnav-badge">6 Stays</span>
                </a>
                <a href="/hotels/kovalam" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Kovalam Hotels</span>
                  <span className="mobile-subnav-badge">10 Stays</span>
                </a>
                <a href="/hotels/poovar" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Poovar Hotels</span>
                  <span className="mobile-subnav-badge">5 Stays</span>
                </a>
                <a href="/hotels/vagamon" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Vagamon Hotels</span>
                  <span className="mobile-subnav-badge">10 Stays</span>
                </a>
                <a href="/hotels/guruvayur" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Guruvayur Hotels</span>
                  <span className="mobile-subnav-badge">5 Stays</span>
                </a>
                <a href="/hotels/cochin-airport" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Cochin Airport Hotels</span>
                  <span className="mobile-subnav-badge">5 Stays</span>
                </a>
                <a href="/hotels/varkala" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Varkala Hotels</span>
                  <span className="mobile-subnav-badge">10 Stays</span>
                </a>
                <a href="/hotels/kannur" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Kannur Hotels</span>
                  <span className="mobile-subnav-badge">7 Stays</span>
                </a>
                <a href="/hotels/kozhikode" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Kozhikode Hotels</span>
                  <span className="mobile-subnav-badge">10 Stays</span>
                </a>
                <a href="/hotels/wayanad" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Wayanad Hotels</span>
                  <span className="mobile-subnav-badge">13 Stays</span>
                </a>
                <a href="/hotels/cherai" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Cherai Hotels</span>
                  <span className="mobile-subnav-badge">5 Stays</span>
                </a>
                <a href="/hotels/athirapally" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Athirapally Hotels</span>
                  <span className="mobile-subnav-badge">6 Stays</span>
                </a>
              </div>
            )}
          </div>

          {/* TAMIL NADU HOTELS ACCORDION */}
          <div className="mobile-subnav-group">
            <div
              className="mobile-state-accordion-header"
              onClick={() => setTnOpen(!tnOpen)}
              role="button"
              tabIndex={0}
            >
              <div className="mobile-state-title-wrap">
                <span className="mobile-state-name">Tamil Nadu Hotels</span>
                <span className="mobile-state-count">3 Destinations</span>
              </div>
              <span className="mobile-accordion-toggle">{tnOpen ? '−' : '+'}</span>
            </div>

            {tnOpen && (
              <div className="mobile-subnav-links">
                <a href="/hotels/tamil-nadu/madurai" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Madurai Hotels</span>
                  <span className="mobile-subnav-badge">10 Stays</span>
                </a>
                <a href="/hotels/tamil-nadu/kanyakumari" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Kanyakumari Hotels</span>
                  <span className="mobile-subnav-badge">10 Stays</span>
                </a>
                <a href="/hotels/tamil-nadu/rameshwaram" onClick={handleNavClick} className="mobile-subnav-item">
                  <span>Rameshwaram Hotels</span>
                  <span className="mobile-subnav-badge">10 Stays</span>
                </a>
              </div>
            )}
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