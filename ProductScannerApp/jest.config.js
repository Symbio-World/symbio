module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native"
    + "|scandit-react-native"
    + "|react-native-status-bar-height"
    + "|react-native-ratings"
    + "|react-native-power-translator"
    + "|react-native-tailwindcss"
    + "|react-native-bootsplash"
    + ")/)",
  ],
}