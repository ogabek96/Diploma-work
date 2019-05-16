'use strict';

module.exports = {
  extends: [`./es6.js`],
  rules: {
    // Node.js
    // Specific overridden rules
    // ------------------------------------------
    'no-console': `off`,
    'no-process-exit': `off`
  }
};
