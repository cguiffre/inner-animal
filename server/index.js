'use strict';
const config = require('./config');
const createApp = require('./app');

createApp().listen(config.port, () => {
  console.log(`Inner Animal listening on :${config.port}`);
});
