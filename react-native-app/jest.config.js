const defaultConfig = require('@symbio/ts-scripts/jest.config')

module.exports = {
  ...defaultConfig,
  preset: 'react-native',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/setupTests.js',
    './node_modules/react-native-gesture-handler/jestSetup',
  ],
  testEnvironment: 'jsdom',
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
      '|react-native-keyboard-aware-scroll-view' +
      '|react-native-iphone-x-helper' +
      '|react-native-reanimated' +
      '|react-native-redash' +
      '|react-native-gesture-handler' +
      '|react-native-iphone-x-helper' +
      '|react-native-screens' +
      '|@react-native-community' +
      '|@react-navigation' +
      '|react-native-responsive-fontsize' +
      ')/)',
  ],
}
