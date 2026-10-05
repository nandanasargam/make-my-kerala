import { handleEnquirySubmission } from '../src/lib/enquiryHandler.js';

export default async function handler(req, res) {
  // CORS preflight support
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Please send a POST request.'
    });
  }

  // Parse body if needed
  let data = req.body;
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch {
      return res.status(400).json({ success: false, error: 'Invalid JSON payload.' });
    }
  }

  const result = await handleEnquirySubmission(data);
  return res.status(result.status || 200).json(result.body);
}
