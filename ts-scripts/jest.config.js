module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [ "**/__tests__/**/*.[t]s?(x)", "**/?(*.)+(spec|test).[t]s?(x)" ]
}
