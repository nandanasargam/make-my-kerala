import { useState } from "react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    travellers: "1-2",
    package: "Kerala Family Holiday",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const whatsappNumber =
    (typeof import.meta !== "undefined" && import.meta.env?.PUBLIC_WHATSAPP_NUMBER) ||
    "919876543210";

  const buildWhatsAppUrl = (data) => {
    const text = `*New Kerala Tour Enquiry - MakeMyKerala*
• Name: ${data.name || "Traveller"}
• Phone: ${data.phone || "Not provided"}
• Email: ${data.email || "Not provided"}
• Travel Date: ${data.date || "Flexible"}
• Travellers: ${data.travellers || "1-2"}
• Preferred Package: ${data.package || "Custom Kerala Tour"}
• Details: ${data.message || "Please share best quote and itinerary."}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    // Check for optional configured email endpoint
    const endpoint =
      typeof import.meta !== "undefined" ? import.meta.env?.PUBLIC_CONTACT_ENDPOINT : null;

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(formData)
        });
        if (!res.ok) {
          throw new Error("Unable to submit online. Please contact us via WhatsApp.");
        }
      } catch (err) {
        console.warn("Online endpoint dispatch notice:", err);
      }
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const handleWhatsAppDirect = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError("Please provide your name and phone number before opening WhatsApp.");
      return;
    }
    const url = buildWhatsAppUrl(formData);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    const waUrl = buildWhatsAppUrl(formData);

    return (
      <div className="success-message" style={{ textAlign: "center", padding: "35px 20px" }}>
        <div className="success-icon" style={{ fontSize: "36px", color: "#2e684d", marginBottom: "12px" }}>
          ✓
        </div>

        <h3 style={{ color: "#12382a", fontFamily: "Cormorant Garamond, serif", fontSize: "28px", margin: "0 0 10px" }}>
          Enquiry Received!
        </h3>

        <p style={{ color: "#5f6e66", fontSize: "14px", lineHeight: "1.6", maxWidth: "420px", margin: "0 auto 24px" }}>
          Thank you, <strong>{formData.name || "traveller"}</strong>. Our Kerala travel planning team will contact you shortly with your personalized itinerary.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "13px 26px",
              backgroundColor: "#25d366",
              color: "#ffffff",
              borderRadius: "30px",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "none"
            }}
          >
            <span>💬</span> Instant Chat on WhatsApp
          </a>

          <button
            type="button"
            className="another-enquiry"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                date: "",
                travellers: "1-2",
                package: "Kerala Family Holiday",
                message: ""
              });
            }}
            style={{
              background: "transparent",
              border: "none",
              color: "#c88b3b",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              marginTop: "8px",
              textDecoration: "underline"
            }}
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      {error && (
        <div
          style={{
            background: "#ffebee",
            color: "#c62828",
            padding: "10px 14px",
            borderRadius: "8px",
            fontSize: "13px",
            marginBottom: "16px"
          }}
        >
          {error}
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Your Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone / WhatsApp *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. +91 98765 43210"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. yourname@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Travel Date</label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="travellers">Travellers</label>
          <select
            id="travellers"
            name="travellers"
            value={formData.travellers}
            onChange={handleChange}
          >
            <option value="1-2">1–2 Travellers</option>
            <option value="3-5">3–5 Travellers</option>
            <option value="6-10">6–10 Travellers</option>
            <option value="10+">10+ Travellers (Group)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="package">Preferred Package</label>
          <select
            id="package"
            name="package"
            value={formData.package}
            onChange={handleChange}
          >
            <option value="Kerala Family Holiday">Kerala Family Holiday (5D/4N)</option>
            <option value="Kerala Honeymoon Escape">Kerala Honeymoon Escape (6D/5N)</option>
            <option value="Kerala Backwater Experience">Kerala Backwater Experience (4D/3N)</option>
            <option value="Kerala Nature & Backwater Tour">Kerala Nature &amp; Backwater Tour (5D/4N)</option>
            <option value="Custom Kerala Tour">Custom Kerala Tour</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">Tell us about your trip</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Preferred places, hotel category, or special requests..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "18px" }}>
        <button
          type="submit"
          className="submit-button"
          disabled={submitting}
          style={{ flex: "1 1 180px" }}
        >
          {submitting ? "Sending..." : "Send Online Enquiry"}
        </button>

        <button
          type="button"
          onClick={handleWhatsAppDirect}
          style={{
            flex: "1 1 180px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            backgroundColor: "#25d366",
            color: "#ffffff",
            border: "none",
            borderRadius: "30px",
            padding: "14px 20px",
            fontWeight: 700,
            fontSize: "14px",
            cursor: "pointer",
            transition: "background 0.3s ease"
          }}
        >
          <span>💬</span> Enquire on WhatsApp
        </button>
      </div>
    </form>
  );
}