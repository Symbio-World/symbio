module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  globals: {
    NODE_ENV: 'test',
  },
  testMatch: ['**/*.test.ts'],
}
