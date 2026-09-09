import { useState } from "react";

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="success-message">
        <div className="success-icon">✓</div>

        <h3>Thank You!</h3>

        <p>
          Your enquiry has been received.
          Our travel team will contact you soon.
        </p>

        <button
          type="button"
          className="another-enquiry"
          onClick={() => setSubmitted(false)}
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      className="enquiry-form"
      onSubmit={handleSubmit}
    >

      <div className="form-row">

        <div className="form-group">
          <label htmlFor="name">
            Your Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            required
          />
        </div>

      </div>


      <div className="form-row">

        <div className="form-group">
          <label htmlFor="date">
            Travel Date
          </label>

          <input
            id="date"
            name="date"
            type="date"
          />
        </div>

        <div className="form-group">
          <label htmlFor="travellers">
            Travellers
          </label>

          <select id="travellers" name="travellers">
            <option value="1-2">1–2 Travellers</option>
            <option value="3-5">3–5 Travellers</option>
            <option value="6-10">6–10 Travellers</option>
            <option value="10+">10+ Travellers</option>
          </select>
        </div>

      </div>


      <div className="form-group">

        <label htmlFor="package">
          Preferred Package
        </label>

        <select id="package" name="package">

          <option value="family">
            Kerala Family Holiday
          </option>

          <option value="honeymoon">
            Kerala Honeymoon Package
          </option>

          <option value="backwaters">
            Kerala Backwater Tour
          </option>

          <option value="hill-stations">
            Kerala Hill Station Tour
          </option>

          <option value="custom">
            Custom Kerala Tour
          </option>

        </select>

      </div>


      <div className="form-group">

        <label htmlFor="message">
          Tell us about your trip
        </label>

        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Tell us about your Kerala holiday..."
        ></textarea>

      </div>


      <button
        type="submit"
        className="submit-button"
      >
        Send Enquiry
      </button>

    </form>
  );
}