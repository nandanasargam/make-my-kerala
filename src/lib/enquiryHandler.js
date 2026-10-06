/**
 * MakeMyKerala - Enquiry Handler
 * Validates enquiry submissions, builds professional HTML & text emails,
 * and delivers them to makemykerala123@gmail.com via Resend API (or safe fallback).
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-()]{7,20}$/;

export function validateEnquiryData(data) {
  const errors = [];

  // Honeypot check for bots
  if (data.bot_check || data.hp_website) {
    return { isSpam: true, errors: [] };
  }

  const name = (data.name || "").trim();
  if (!name || name.length < 2) {
    errors.push("Full Name is required (minimum 2 characters).");
  }

  const email = (data.email || "").trim();
  if (!email || !EMAIL_RE.test(email)) {
    errors.push("A valid Email Address is required.");
  }

  const phone = (data.phone || "").trim();
  if (!phone || !PHONE_RE.test(phone)) {
    errors.push("A valid Phone / WhatsApp number is required.");
  }

  const date = (data.date || "").trim();
  if (!date) {
    errors.push("Travel Date is required.");
  }

  const adults = String(data.adults || "").trim();
  if (!adults) {
    errors.push("Number of Adults is required.");
  }

  const packageTitle = (data.package || "").trim();
  if (!packageTitle) {
    errors.push("Preferred Package / Tour is required.");
  }

  const message = (data.message || "").trim();
  if (!message || message.length < 5) {
    errors.push("Please provide your requirements or message (minimum 5 characters).");
  }

  return {
    isSpam: false,
    errors,
    sanitized: {
      name,
      email,
      phone,
      date,
      adults,
      children: (data.children || "0").trim(),
      package: packageTitle,
      message,
      duration: (data.duration || "").trim(),
      hotelCategory: (data.hotelCategory || "").trim(),
      destination: (data.destination || "").trim(),
      hotel: (data.hotel || "").trim(),
      budget: (data.budget || "").trim(),
      source: (data.source || "").trim()
    }
  };
}

export function buildEmailContent(data) {
  const submissionTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium"
  });

  const subject = `New MakeMyKerala Enquiry: ${data.name} — ${data.package || data.destination || "Custom Tour"}`;

  const text = `
==================================================
NEW MAKEMYKERALA TOUR ENQUIRY
==================================================
Submission Type: Online Enquiry
Received At: ${submissionTime} (IST)
${data.source ? `Source Page: ${data.source}\n` : ""}
--------------------------------------------------
CUSTOMER DETAILS
--------------------------------------------------
Name:     ${data.name}
Email:    ${data.email}
Phone:    ${data.phone}
WhatsApp: https://wa.me/${data.phone.replace(/[^0-9]/g, "")}

--------------------------------------------------
TRAVEL DETAILS
--------------------------------------------------
Travel Date:       ${data.date}
Adults:            ${data.adults}
Children:          ${data.children || "0"}
Preferred Package: ${data.package || "Custom Tour"}
${data.duration ? `Duration:          ${data.duration}\n` : ""}${data.destination ? `Destination:       ${data.destination}\n` : ""}${data.hotel ? `Selected Hotel:    ${data.hotel}\n` : ""}${data.hotelCategory ? `Hotel Preference:  ${data.hotelCategory}\n` : ""}${data.budget ? `Estimated Budget:  ${data.budget}\n` : ""}
--------------------------------------------------
SPECIAL REQUIREMENTS / MESSAGE
--------------------------------------------------
${data.message}

==================================================
MakeMyKerala Travel Desk • Kochi, Kerala
Email: makemykerala123@gmail.com • WhatsApp: +91 97452 69272
==================================================
`.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f4f2ea; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2923; }
    .container { max-width: 620px; margin: 24px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e5e0d4; }
    .header { background: #082017; padding: 28px 32px; color: #ffffff; }
    .header h1 { margin: 0 0 6px; font-size: 22px; font-weight: 700; color: #f1c47b; }
    .header p { margin: 0; font-size: 13px; color: #d2f0e6; opacity: 0.9; }
    .content { padding: 32px; }
    .section-title { font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #c88b3b; margin: 24px 0 12px; border-bottom: 2px solid #f4f2ea; padding-bottom: 6px; }
    .section-title:first-child { margin-top: 0; }
    .data-table { width: 100%; border-collapse: collapse; margin-bottom: 8px; }
    .data-table td { padding: 9px 6px; font-size: 14px; vertical-align: top; border-bottom: 1px solid #f2ede4; }
    .data-table td.label { width: 38%; color: #697870; font-weight: 600; }
    .data-table td.value { width: 62%; color: #12382a; font-weight: 500; }
    .data-table td.value strong { color: #082017; font-weight: 700; }
    .message-box { background: #fbf9f4; border-left: 4px solid #c88b3b; border-radius: 4px; padding: 14px 18px; margin: 12px 0; font-size: 14px; line-height: 1.6; color: #2a3830; white-space: pre-wrap; }
    .badge { display: inline-block; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 700; background: #eaf5ef; color: #1b633e; }
    .btn-row { margin-top: 24px; padding-top: 20px; border-top: 1px solid #e7e5dc; text-align: center; }
    .btn-wa { display: inline-block; background: #25d366; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 24px; font-weight: 700; font-size: 13px; margin: 0 4px; }
    .btn-reply { display: inline-block; background: #12382a; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 24px; font-weight: 700; font-size: 13px; margin: 0 4px; }
    .footer { background: #f7f5ed; padding: 18px 32px; font-size: 12px; color: #76837b; text-align: center; border-top: 1px solid #e7e5dc; }
    .footer a { color: #12382a; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🌴 MakeMyKerala — New Tour Enquiry</h1>
      <p>Received on ${submissionTime} IST • Submission: <span style="color:#ffffff; font-weight:600;">Online Enquiry Form</span></p>
    </div>

    <div class="content">
      <div class="section-title">Customer Details</div>
      <table class="data-table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>${data.name}</strong></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:${data.email}" style="color:#1b633e; text-decoration:none;">${data.email}</a></td>
        </tr>
        <tr>
          <td class="label">Phone / WhatsApp</td>
          <td class="value"><a href="tel:${data.phone.replace(/[^0-9+]/g, '')}" style="color:#1b633e; text-decoration:none;">${data.phone}</a></td>
        </tr>
      </table>

      <div class="section-title">Travel Details</div>
      <table class="data-table">
        <tr>
          <td class="label">Preferred Package</td>
          <td class="value"><span class="badge">${data.package || "Custom Tour"}</span></td>
        </tr>
        <tr>
          <td class="label">Travel Date</td>
          <td class="value"><strong>${data.date}</strong></td>
        </tr>
        <tr>
          <td class="label">Traveller Count</td>
          <td class="value">${data.adults} Adults${data.children && data.children !== "0" ? `, ${data.children} Children` : ""}</td>
        </tr>
        ${data.duration ? `<tr><td class="label">Duration</td><td class="value">${data.duration}</td></tr>` : ""}
        ${data.destination ? `<tr><td class="label">Destination</td><td class="value">${data.destination}</td></tr>` : ""}
        ${data.hotel ? `<tr><td class="label">Specific Hotel</td><td class="value"><strong>${data.hotel}</strong></td></tr>` : ""}
        ${data.hotelCategory ? `<tr><td class="label">Hotel Preference</td><td class="value">${data.hotelCategory}</td></tr>` : ""}
        ${data.budget ? `<tr><td class="label">Budget Estimate</td><td class="value">${data.budget}</td></tr>` : ""}
        ${data.source ? `<tr><td class="label">Source Page</td><td class="value" style="font-size:12px; color:#78867e;">${data.source}</td></tr>` : ""}
      </table>

      <div class="section-title">Customer Requirements / Message</div>
      <div class="message-box">${data.message}</div>

      <div class="btn-row">
        <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" class="btn-wa" target="_blank">Chat on WhatsApp</a>
        <a href="mailto:${data.email}?subject=Re:%20MakeMyKerala%20Holiday%20Enquiry%20-%20${encodeURIComponent(data.package || 'Kerala Tour')}" class="btn-reply">Reply via Email</a>
      </div>
    </div>

    <div class="footer">
      <strong>MakeMyKerala Travel Desk</strong> • Kochi, Kerala<br>
      Official Email: <a href="mailto:makemykerala123@gmail.com">makemykerala123@gmail.com</a> • WhatsApp: <a href="https://wa.me/919745269272">+91 97452 69272</a>
    </div>
  </div>
</body>
</html>
  `.trim();

  return { subject, text, html };
}

export async function sendEnquiryEmail(sanitizedData) {
  const apiKey = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY;
  const toEmail = process.env.EMAIL_TO || "makemykerala123@gmail.com";
  const fromEmail = process.env.EMAIL_FROM || "MakeMyKerala Enquiries <onboarding@resend.dev>";

  const { subject, text, html } = buildEmailContent(sanitizedData);

  // If no API key configured (e.g. local test or dev server)
  if (!apiKey || apiKey === "re_your_api_key_here") {
    const isDev = process.env.NODE_ENV !== "production" && process.env.VERCEL_ENV !== "production";
    if (isDev) {
      console.log("\n=======================================================");
      console.log("ℹ️  [DEV MODE] RESEND_API_KEY is not configured.");
      console.log("Simulating successful delivery to:", toEmail);
      console.log("Subject:", subject);
      console.log("Customer:", sanitizedData.name, `(${sanitizedData.email})`);
      console.log("Package:", sanitizedData.package);
      console.log("=======================================================\n");

      return {
        success: true,
        simulated: true,
        message: "Thank you! Your enquiry has been sent successfully. Our team will get back to you soon."
      };
    }

    console.error("❌ [PRODUCTION ERROR] RESEND_API_KEY is not configured in environment variables.");
    return {
      success: false,
      error: "Email service is temporarily unavailable. Please contact us directly via WhatsApp at +91 97452 69272."
    };
  }

  // Send via Resend REST API using native fetch
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: sanitizedData.email,
        subject,
        html,
        text
      })
    });

    const resJson = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error("Resend API error:", res.status, resJson);
      throw new Error(resJson?.message || "Failed to deliver email through provider.");
    }

    return {
      success: true,
      id: resJson?.id,
      message: "Thank you! Your enquiry has been sent successfully. Our team will get back to you soon."
    };
  } catch (err) {
    console.error("sendEnquiryEmail delivery exception:", err);
    return {
      success: false,
      error: "We couldn't send your enquiry right now. Please try again or use WhatsApp to contact us directly."
    };
  }
}

export async function handleEnquirySubmission(rawData) {
  try {
    const { isSpam, errors, sanitized } = validateEnquiryData(rawData || {});

    // Silent accept for bot spam
    if (isSpam) {
      return {
        status: 200,
        body: {
          success: true,
          message: "Thank you! Your enquiry has been received."
        }
      };
    }

    if (errors.length > 0) {
      return {
        status: 400,
        body: {
          success: false,
          error: errors[0],
          errors
        }
      };
    }

    const emailResult = await sendEnquiryEmail(sanitized);

    if (!emailResult.success) {
      return {
        status: 502,
        body: {
          success: false,
          error: emailResult.error || "Unable to send enquiry. Please try WhatsApp."
        }
      };
    }

    return {
      status: 200,
      body: {
        success: true,
        message: emailResult.message
      }
    };
  } catch (fatalErr) {
    console.error("Fatal enquiry processing error:", fatalErr);
    return {
      status: 500,
      body: {
        success: false,
        error: "We couldn't send your enquiry right now. Please try again or use WhatsApp to contact us directly."
      }
    };
  }
}
