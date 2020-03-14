module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts(x)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/*.test.ts(x)'],
}
