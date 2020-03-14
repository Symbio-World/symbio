const config = require('ts-dev-common/jest.config')

module.exports = {
  ...config,
  preset: 'react-native',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
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
