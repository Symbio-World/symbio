const originalConsoleError = console.error;

// workaround for  https://github.com/facebook/react/issues/14769#issuecomment-462528230
console.error = (...args) => {
  if (
    !args[0].startsWith(
      'Warning: An update to %s inside a test was not wrapped in act(...).',
    )
  ) {
    originalConsoleError(...args);
  }
};

// https://github.com/xgfe/react-native-simple-toast/issues/1
jest.mock('react-native-simple-toast', () => ({
  SHORT: jest.fn(),
  show: jest.fn()
}));

// https://github.com/testing-library/native-testing-library/issues/85
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter.js', () => {
  const { EventEmitter } = require('events');
  return EventEmitter;
});
