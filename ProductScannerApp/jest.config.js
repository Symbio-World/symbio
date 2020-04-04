const defaultConfig = require('@symbio/ts-scripts/jest.config')

module.exports = {
  ...defaultConfig,
  preset: 'react-native',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },

  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|scandit-react-native' +
      '|react-native-status-bar-height' +
      '|react-native-ratings' +
      '|react-native-tailwindcss' +
      '|react-native-bootsplash' +
      '|react-native-vector-icons' +
      '|react-native-simple-toast' +
      '|@react-native-firebase' +
      ')/)',
  ],
}
