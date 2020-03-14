const config = require('ts-scripts/.eslintrc')

module.exports = {
  ...config,
  extends: ['@react-native-community', ...config.extends, ],
}
