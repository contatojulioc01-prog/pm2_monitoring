const { getLocalDateTime } = require('./date');

const logger = {
  info: (msg, ...args) => {
    console.log(`[${getLocalDateTime()}] [INFO] [MONITORING]`, msg, ...args);
  },
  warn: (msg, ...args) => {
    console.warn(`[${getLocalDateTime()}] [WARN] [MONITORING]`, msg, ...args);
  },
  error: (msg, ...args) => {
    console.error(`[${getLocalDateTime()}] [ERROR] [MONITORING]`, msg, ...args);
  },
  debug: (msg, ...args) => {
    if (process.env.DEBUG_MONITORING) {
      console.log(`[${getLocalDateTime()}] [DEBUG] [MONITORING]`, msg, ...args);
    }
  }
};

module.exports = { logger };
