module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native"
    + "|scandit-react-native"
    + "|react-native-elements"
    + "|react-native-status-bar-height"
    + "|react-native-vector-icons"
    + "|react-native-ratings"
    + ")/)",
  ],
}