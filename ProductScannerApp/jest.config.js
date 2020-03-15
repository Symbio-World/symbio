const config = require('ts-scripts/jest.config')

module.exports = {
  ...config,
  preset: 'react-native',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
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
