const commonConfig = require('./jest.config.common');

module.exports = {
  ...commonConfig,
  moduleNameMapper: {
    '^@al-mabsut/muslimah$': '<rootDir>/dist/cjs/bundle.js'
  }
};
