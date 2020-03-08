module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testFileExtensions: ["test.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native"
    + "|react-navigation-tabs"
    + "|scandit-react-native"
    + ")/)",
  ],
}