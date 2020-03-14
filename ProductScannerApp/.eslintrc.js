const config = require('ts-dev-common/.eslintrc')

module.exports = {
  ...config,
  extends: ['@react-native-community', ...config.extends, ],
}
