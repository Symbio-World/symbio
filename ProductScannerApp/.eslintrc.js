const config = require('ts-lib-common/.eslintrc')

module.exports = {
  ...config,
  extends: [...config.extends, '@react-native-community'],
}
