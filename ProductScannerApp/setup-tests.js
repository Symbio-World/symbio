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
