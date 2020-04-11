const config = require('@symbio/ts-scripts/.eslintrc')

module.exports = {
  ...config,
  extends: ['@react-native-community', ...config.extends],
  ignorePatterns: [
    ...config.ignorePatterns,
    'babel.config.js',
    'metro.config.js',
    'setupTests.js',
    'tailwind.config.js',
  ],
}
