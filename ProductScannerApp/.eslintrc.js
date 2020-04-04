const config = require('@symbio/ts-scripts/.eslintrc')

module.exports = {
  ...config,
  extends: [...config.extends, '@react-native-community'],
}
