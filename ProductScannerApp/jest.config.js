const config = require('ts-dev-common/jest.config')

module.exports = {
  ...config,
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|scandit-react-native' +
      '|react-native-status-bar-height' +
      '|react-native-ratings' +
      '|react-native-tailwindcss' +
      '|react-native-bootsplash' +
      ')/)',
  ],
}
