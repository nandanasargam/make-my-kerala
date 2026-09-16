import { useState, useRef, useEffect } from "react";

const defaultTestimonials = [
  {
    name: "Rahul & Ananya",
    location: "Mumbai",
    text: "Our Kerala honeymoon was beautifully organised. Munnar and Alleppey were unforgettable.",
    rating: 5,
    image: "/images/travellers/rahul-ananya.jpg"
  },
  {
    name: "Priya & Family",
    location: "Bengaluru",
    text: "Everything was well planned from the hotel to transportation. The children enjoyed every part of the trip.",
    rating: 5,
    image: "/images/travellers/priya-family.jpg"
  },
  {
    name: "Arjun",
    location: "Delhi",
    text: "A wonderful Kerala experience with a perfect balance of sightseeing, relaxation and local experiences.",
    rating: 5,
    image: "/images/travellers/arjun.jpg"
  },
  {
    name: "Vikram & Sneha",
    location: "Hyderabad",
    text: "The private houseboat in Alleppey was magical. The crew treated us like royalty with delicious Kerala meals.",
    rating: 5,
    image: "/images/travellers/vikram-sneha.jpg"
  }
];

export default function TestimonialsCarousel({ items = defaultTestimonials }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sliderRef = useRef(null);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  return (
    <div
      className="testimonial-slider-wrap"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Traveller Testimonials"
      style={{ position: "relative", outline: "none" }}
    >
      <button
        className="testimonial-arrow testimonial-arrow-left"
        type="button"
        onClick={prevSlide}
        aria-label="Previous testimonial"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer"
        }}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div
        className="testimonial-carousel-viewport"
        ref={sliderRef}
        style={{
          overflow: "hidden",
          width: "100%",
          padding: "10px 0"
        }}
      >
        <div
          className="testimonial-carousel-track"
          style={{
            display: "flex",
            transition: "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)",
            transform: `translateX(-${activeIndex * 100}%)`,
            width: "100%"
          }}
        >
          {items.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-slide"
              style={{
                flex: "0 0 100%",
                maxWidth: "100%",
                padding: "0 10px",
                boxSizing: "border-box"
              }}
              aria-hidden={activeIndex !== index}
            >
              <article className={`testimonial-card testimonial-card-${(index % 3) + 1}`} style={{ maxWidth: "680px", margin: "0 auto" }}>
                <div className="testimonial-card-top">
                  <div className="quote-mark" aria-hidden="true">“</div>

                  <div className="testimonial-rating">
                    <span className="rating-star">★</span>
                    <span>5.0</span>
                    <span className="rating-text">Verified Traveller</span>
                  </div>

                  <p className="testimonial-text" style={{ fontSize: "16px", lineHeight: "1.7", margin: "18px 0" }}>
                    "{testimonial.text}"
                  </p>

                  <div className="testimonial-route">
                    <span className="route-start"></span>
                    <span className="route-dashed"></span>
                    <span className="route-pin">◆</span>
                  </div>
                </div>

                <div className="testimonial-person">
                  <div className="avatar">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} - MakeMyKerala Traveller`}
                        loading="lazy"
                        width="54"
                        height="54"
                      />
                    ) : (
                      <span>{testimonial.name.charAt(0)}</span>
                    )}
                  </div>

                  <div className="person-details">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <button
        className="testimonial-arrow testimonial-arrow-right"
        type="button"
        onClick={nextSlide}
        aria-label="Next testimonial"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer"
        }}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* SLIDER DOTS */}
      <div className="testimonial-dots" role="tablist" aria-label="Testimonial pagination" style={{ marginTop: "30px" }}>
        {items.map((_, dotIdx) => (
          <button
            key={dotIdx}
            type="button"
            className={`testimonial-dot ${activeIndex === dotIdx ? "active" : ""}`}
            onClick={() => setActiveIndex(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
            aria-selected={activeIndex === dotIdx}
            role="tab"
            style={{
              border: "none",
              cursor: "pointer",
              padding: "0"
            }}
          />
        ))}
      </div>
    </div>
  );
}
