import { useState, useEffect } from "react";
import "../styles/enquiry-form.css";

const PACKAGES_LIST = [
  "Kerala Family Holiday (5D/4N)",
  "Kerala Honeymoon Escape (6D/5N)",
  "Kerala Backwater Experience (4D/3N)",
  "Kerala Nature & Backwater Tour (5D/4N)",
  "4 Nights / 5 Days Kerala Tour (Munnar - Thekkady - Alleppey)",
  "5 Nights / 6 Days Kerala Tour (Munnar - Thekkady - Alleppey - Cochin)",
  "6 Nights / 7 Days Kerala Kovalam Tour",
  "6 Nights / 7 Days Kerala Kanyakumari Tour",
  "7 Nights / 8 Days Kerala Kanyakumari Tour",
  "8 Nights / 9 Days Kerala Temple Tour",
  "11 Nights / 12 Days Grand Kerala Tamil Nadu Tour",
  "10 Nights / 11 Days Kerala Tamil Nadu Circuit",
  "4 Nights / 5 Days North Kerala Tour (Wayanad - Kannur - Calicut)",
  "3 Nights / 4 Days Trivandrum Kanyakumari Tour",
  "3 Nights / 4 Days Madurai Rameshwaram Tour",
  "5 Nights / 6 Days Madurai Rameshwaram Kerala Tour",
  "5 Nights / 6 Days Coimbatore Kodaikanal Tour",
  "Alleppey Houseboat Cruise",
  "Customized Kerala Holiday Itinerary"
];

const HOTEL_CATEGORIES = [
  "Deluxe (3-Star & Premium Stays)",
  "Economy (Value & Standard)",
  "Luxury (5-Star & Heritage Resorts)",
  "Budget / Homestay",
  "No Preference / Flexible"
];

export default function EnquiryForm({ initialContext = {} }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    adults: "2",
    children: "0",
    package: "Kerala Family Holiday (5D/4N)",
    duration: "",
    destination: "",
    hotel: "",
    hotelCategory: "Deluxe (3-Star & Premium Stays)",
    budget: "",
    message: "",
    source: "",
    bot_check: "" // Honeypot spam protector
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [contextSource, setContextSource] = useState(null);

  // Today's date in YYYY-MM-DD for travel date minimum attribute
  const todayStr = new Date().toISOString().split("T")[0];

  // Parse URL query parameters on browser mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const params = new URLSearchParams(window.location.search);
      const pkgParam = params.get("package") || initialContext.package;
      const hotelParam = params.get("hotel") || initialContext.hotel;
      const destParam = params.get("destination") || initialContext.destination;
      const expParam = params.get("experience");
      const durationParam = params.get("duration");
      const sourceParam = params.get("source") || document.referrer;

      const updates = {};
      let detectedContext = null;

      if (pkgParam) {
        // Find best match in package list or use raw string
        const match = PACKAGES_LIST.find((p) =>
          p.toLowerCase().includes(pkgParam.toLowerCase().replace(/-/g, " "))
        );
        updates.package = match || pkgParam;
        detectedContext = { type: "package", name: updates.package };
      } else if (hotelParam) {
        updates.hotel = hotelParam;
        updates.package = `Hotel Booking & Tour: ${hotelParam}`;
        detectedContext = { type: "hotel", name: hotelParam, dest: destParam };
      } else if (destParam) {
        updates.destination = destParam;
        updates.package = `Kerala Tour covering ${destParam}`;
        detectedContext = { type: "destination", name: destParam };
      } else if (expParam) {
        updates.package = `Special Experience: ${expParam}`;
        detectedContext = { type: "experience", name: expParam };
      }

      if (destParam) updates.destination = destParam;
      if (durationParam) updates.duration = durationParam;
      if (sourceParam) updates.source = sourceParam;

      if (Object.keys(updates).length > 0) {
        setFormData((prev) => ({ ...prev, ...updates }));
      }
      if (detectedContext) {
        setContextSource(detectedContext);
      }
    } catch (e) {
      console.warn("Failed to parse enquiry URL context:", e);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const validateRequired = () => {
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage("Please enter your full name (minimum 2 characters).");
      return false;
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      setErrorMessage("Please enter a valid Phone / WhatsApp number.");
      return false;
    }
    if (!formData.date.trim()) {
      setErrorMessage("Please select your proposed travel date.");
      return false;
    }
    if (!formData.adults) {
      setErrorMessage("Please enter the number of adult travellers.");
      return false;
    }
    if (!formData.package.trim()) {
      setErrorMessage("Please choose or specify your preferred package.");
      return false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      setErrorMessage(
        "Please provide brief requirements or questions (minimum 5 characters)."
      );
      return false;
    }
    return true;
  };

  // WhatsApp Message Formatter
  const buildWhatsAppUrl = (data) => {
    const lines = [
      "Hello MakeMyKerala,",
      "I would like to make an enquiry.",
      "",
      "Customer Details:",
      `• Name: ${data.name || "Traveller"}`,
      `• Email: ${data.email || "Not specified"}`,
      `• Phone: ${data.phone || "Not specified"}`,
      "",
      "Travel Details:",
      `• Travel Date: ${data.date || "Flexible"}`,
      `• Adults: ${data.adults || "2"} | Children: ${data.children || "0"}`,
      `• Preferred Package: ${data.package || "Custom Kerala Tour"}`
    ];

    if (data.destination) lines.push(`• Destination: ${data.destination}`);
    if (data.hotel) lines.push(`• Hotel: ${data.hotel}`);
    if (data.duration) lines.push(`• Duration: ${data.duration}`);
    if (data.hotelCategory) lines.push(`• Hotel Category: ${data.hotelCategory}`);
    if (data.budget) lines.push(`• Estimated Budget: ${data.budget}`);

    lines.push("");
    lines.push("Additional Requirements / Message:");
    lines.push(data.message || "Please share best quote and day-by-day itinerary.");
    lines.push("");
    lines.push("Thank you.");

    const text = lines.join("\n");
    return `https://wa.me/919745269272?text=${encodeURIComponent(text)}`;
  };

  // 1. SUBMISSION OPTION 1: SEND ONLINE ENQUIRY (POST TO BACKEND /api/enquiry)
  const handleOnlineSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    if (!validateRequired()) {
      return;
    }

    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok && result.success) {
        setSubmitSuccess(true);
        setSubmitted(true);
      } else {
        setErrorMessage(
          result.error ||
            "We couldn't send your enquiry right now. Please try again or use WhatsApp to contact us directly."
        );
      }
    } catch (err) {
      console.error("Online enquiry dispatch error:", err);
      setErrorMessage(
        "We couldn't send your enquiry right now. Please try again or use WhatsApp to contact us directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // 2. SUBMISSION OPTION 2: ENQUIRY ON WHATSAPP
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validateRequired()) {
      return;
    }

    const waUrl = buildWhatsAppUrl(formData);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  // SUCCESS STATE
  if (submitted && submitSuccess) {
    const waUrl = buildWhatsAppUrl(formData);
    return (
      <div className="mmk-enquiry-success" role="alert" aria-live="polite">
        <div className="success-icon-badge" aria-hidden="true">
          ✓
        </div>

        <h3 className="success-title">Enquiry Received Successfully!</h3>

        <p className="success-lead">
          Thank you, <strong>{formData.name}</strong>! Your enquiry has been forwarded directly to our Kerala travel specialists at{" "}
          <strong style={{ color: "#12382a" }}>makemykerala123@gmail.com</strong>.
        </p>

        <div className="success-summary-box">
          <div className="summary-item">
            <span className="summary-lbl">Selected Tour:</span>
            <strong className="summary-val">{formData.package}</strong>
          </div>
          <div className="summary-item">
            <span className="summary-lbl">Proposed Date:</span>
            <strong className="summary-val">{formData.date}</strong>
          </div>
          <div className="summary-item">
            <span className="summary-lbl">Travellers:</span>
            <strong className="summary-val">
              {formData.adults} Adults
              {formData.children !== "0" ? `, ${formData.children} Children` : ""}
            </strong>
          </div>
        </div>

        <p className="success-note">
          Our team usually responds within <strong>2 to 4 business hours</strong> with a customized quote and day-by-day itinerary.
        </p>

        <div className="success-actions">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="success-wa-btn"
          >
            <span aria-hidden="true">💬</span> Also Ping on WhatsApp
          </a>

          <button
            type="button"
            className="success-reset-btn"
            onClick={() => {
              setSubmitted(false);
              setSubmitSuccess(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                date: "",
                adults: "2",
                children: "0",
                package: "Kerala Family Holiday (5D/4N)",
                duration: "",
                destination: "",
                hotel: "",
                hotelCategory: "Deluxe (3-Star & Premium Stays)",
                budget: "",
                message: "",
                source: "",
                bot_check: ""
              });
              setContextSource(null);
            }}
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  // ACTIVE ENQUIRY FORM
  return (
    <form className="mmk-enquiry-form" onSubmit={handleOnlineSubmit} noValidate>
      {/* Honeypot anti-spam field */}
      <input
        type="text"
        name="bot_check"
        value={formData.bot_check}
        onChange={handleChange}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* CONTEXT BANNER IF USER ARRIVED FROM A SPECIFIC PACKAGE/HOTEL */}
      {contextSource && (
        <div className="context-source-badge">
          <div className="context-source-icon" aria-hidden="true">
            {contextSource.type === "hotel" ? "🏨" : "🌴"}
          </div>
          <div className="context-source-info">
            <span className="context-source-label">
              Enquiring from {contextSource.type === "hotel" ? "Hotel Page" : "Selected Tour"}:
            </span>
            <strong className="context-source-name">{contextSource.name}</strong>
          </div>
          <button
            type="button"
            className="context-source-clear"
            onClick={() => setContextSource(null)}
            title="Change selection"
          >
            Change
          </button>
        </div>
      )}

      {/* ERROR MESSAGE ALERT */}
      {errorMessage && (
        <div className="form-error-alert" role="alert">
          <span className="alert-icon" aria-hidden="true">⚠️</span>
          <div className="alert-text">{errorMessage}</div>
        </div>
      )}

      {/* SECTION 1: TRAVELLER DETAILS */}
      <div className="form-section-header">
        <span className="section-step">1</span>
        <h4>Your Contact Details</h4>
      </div>

      <div className="form-grid-2 form-row">
        <div className="field-group">
          <label htmlFor="mmk-name">
            Full Name <span className="req">*</span>
          </label>
          <input
            id="mmk-name"
            name="name"
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>

        <div className="field-group">
          <label htmlFor="mmk-phone">
            Phone / WhatsApp <span className="req">*</span>
          </label>
          <input
            id="mmk-phone"
            name="phone"
            type="tel"
            required
            placeholder="e.g. +91 97452 69272"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="mmk-email">
          Email Address <span className="req">*</span>
        </label>
        <input
          id="mmk-email"
          name="email"
          type="email"
          required
          placeholder="e.g. rahul@example.com"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
        />
      </div>

      {/* SECTION 2: TRIP & TRAVEL PREFERENCES */}
      <div className="form-section-header" style={{ marginTop: "24px" }}>
        <span className="section-step">2</span>
        <h4>Trip &amp; Travel Details</h4>
      </div>

      <div className="form-grid-2 form-row">
        <div className="field-group">
          <label htmlFor="mmk-date">
            Travel Date <span className="req">*</span>
          </label>
          <input
            id="mmk-date"
            name="date"
            type="date"
            min={todayStr}
            required
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label htmlFor="mmk-package">
            Preferred Package / Tour <span className="req">*</span>
          </label>
          <select
            id="mmk-package"
            name="package"
            value={formData.package}
            onChange={handleChange}
          >
            {PACKAGES_LIST.map((pkg) => (
              <option key={pkg} value={pkg}>
                {pkg}
              </option>
            ))}
            {!PACKAGES_LIST.includes(formData.package) && (
              <option value={formData.package}>{formData.package}</option>
            )}
          </select>
        </div>
      </div>

      <div className="form-grid-3 form-row three-columns">
        <div className="field-group">
          <label htmlFor="mmk-adults">
            Adults (12+ yrs) <span className="req">*</span>
          </label>
          <select
            id="mmk-adults"
            name="adults"
            value={formData.adults}
            onChange={handleChange}
          >
            <option value="1">1 Adult (Solo)</option>
            <option value="2">2 Adults (Couple/Twin)</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
            <option value="5">5 Adults</option>
            <option value="6">6 Adults</option>
            <option value="7">7 Adults</option>
            <option value="8+">8+ Adults (Group)</option>
          </select>
        </div>

        <div className="field-group">
          <label htmlFor="mmk-children">Children (Below 12)</label>
          <select
            id="mmk-children"
            name="children"
            value={formData.children}
            onChange={handleChange}
          >
            <option value="0">0 Children</option>
            <option value="1">1 Child</option>
            <option value="2">2 Children</option>
            <option value="3+">3+ Children</option>
          </select>
        </div>

        <div className="field-group">
          <label htmlFor="mmk-hotelCategory">Hotel Preference</label>
          <select
            id="mmk-hotelCategory"
            name="hotelCategory"
            value={formData.hotelCategory}
            onChange={handleChange}
          >
            {HOTEL_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-grid-2 form-row">
        <div className="field-group">
          <label htmlFor="mmk-duration">Number of Nights / Days (Optional)</label>
          <input
            id="mmk-duration"
            name="duration"
            type="text"
            placeholder="e.g. 5 Nights / 6 Days"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label htmlFor="mmk-destination">Key Destinations (Optional)</label>
          <input
            id="mmk-destination"
            name="destination"
            type="text"
            placeholder="e.g. Munnar, Thekkady, Alleppey"
            value={formData.destination}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="mmk-message">
          Special Requests / Message <span className="req">*</span>
        </label>
        <textarea
          id="mmk-message"
          name="message"
          rows={3}
          required
          placeholder="Please tell us about your travel expectations, preferred cab type, specific hotel requests, or itinerary preferences..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* TWO DISTINCT SUBMISSION OPTIONS */}
      <div className="submission-choices-wrapper enquiry-options">
        <div className="choice-option option-card email-choice">
          <div className="choice-meta">
            <span className="choice-badge">OPTION 1</span>
            <strong className="choice-heading">Send Online Enquiry</strong>
            <p className="choice-desc">
              Send your enquiry directly to our team by email.
            </p>
          </div>
          <button
            type="submit"
            className="btn-submit-online"
            disabled={submitting}
          >
            {submitting ? (
              <>
                <span className="btn-spinner" aria-hidden="true"></span>
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <>
                <span className="btn-icon" aria-hidden="true">✉️</span>
                <span>Send Online Enquiry</span>
              </>
            )}
          </button>
        </div>

        <div className="choice-divider or-divider">
          <span>OR</span>
        </div>

        <div className="choice-option option-card whatsapp-choice">
          <div className="choice-meta">
            <span className="choice-badge wa-badge">OPTION 2</span>
            <strong className="choice-heading">Enquiry on WhatsApp</strong>
            <p className="choice-desc">
              Continue your enquiry directly through WhatsApp with pre-filled details.
            </p>
          </div>
          <button
            type="button"
            className="btn-submit-wa"
            onClick={handleWhatsAppSubmit}
          >
            <span className="wa-icon-svg" aria-hidden="true">💬</span>
            <span>Enquiry on WhatsApp</span>
          </button>
        </div>
      </div>

      <div className="form-security-note">
        <span>🔒 Zero Spam Guarantee • Direct local consultation • 100% customized</span>
      </div>
    </form>
  );
}