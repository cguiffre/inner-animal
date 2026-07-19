'use strict';
const path = require('path');

module.exports = {
  port: Number(process.env.PORT || 8080),
  // Static app files live in the repo root (one level up from server/).
  staticDir: path.join(__dirname, '..'),
  databasePath: process.env.DATABASE_PATH || path.join(__dirname, 'data', 'inner-animal.sqlite'),
  appUrl: (process.env.APP_URL || `http://localhost:${process.env.PORT || 8080}`).replace(/\/$/, ''),
  resend: {
    apiKey: process.env.RESEND_API_KEY || '',
    from: process.env.RESEND_FROM || 'Inner Animal <onboarding@resend.dev>',
  },
  isProd: process.env.NODE_ENV === 'production',
};
