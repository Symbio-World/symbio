const config = require('@symbio/ts-scripts/.eslintrc')

module.exports = {
  ...config,
  extends: ['@react-native-community', ...config.extends, ],
}
