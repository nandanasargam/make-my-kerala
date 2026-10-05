// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

function localEnquiryApiPlugin() {
  return {
    name: 'local-enquiry-api',
    configureServer(server) {
      server.middlewares.use('/api/enquiry', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
          return;
        }
        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const { handleEnquirySubmission } = await import('./src/lib/enquiryHandler.js');
            const result = await handleEnquirySubmission(data);
            res.statusCode = result.status || 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result.body));
          } catch (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Internal Server Error' }));
          }
        });
      });
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://make-my-kerala.vercel.app',
  integrations: [react()],
  vite: {
    plugins: [localEnquiryApiPlugin()]
  }
});