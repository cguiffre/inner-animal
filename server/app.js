'use strict';
const path = require('path');
const express = require('express');
const config = require('./config');

// Static-first app server. Phase 7 will mount /auth and /api routes here for
// accounts + saved results; for now it just serves the quiz as a static site.
function createApp() {
  const app = express();
  app.disable('x-powered-by');

  // Basic browser protections: no sniffing, no framing, HTTPS-only in prod.
  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Content-Security-Policy', "frame-ancestors 'none'");
    if (process.env.NODE_ENV === 'production') {
      res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains');
    }
    next();
  });

  // Health check for Railway.
  app.get('/healthz', (_req, res) => res.type('text').send('ok'));

  // Long-cache the immutable-ish assets; keep HTML fresh.
  app.use(express.static(config.staticDir, {
    setHeaders(res, filePath) {
      if (/\.(webp|png|svg|jpg|jpeg|woff2?)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=604800, immutable');
      } else if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'no-cache');
      }
    },
  }));

  // SPA-style fallback to the quiz for any unknown GET (it's a single page).
  app.get('*', (_req, res) => res.sendFile(path.join(config.staticDir, 'index.html')));

  return app;
}

module.exports = createApp;
