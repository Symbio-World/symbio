module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [ "**/__tests__/**/*.[t]s?(x)", "**/?(*.)+(spec|test).[t]s?(x)" ]
}

console.log(/^[A-Z][a-z]+(?:[A-Z][a-z]+)*(?:\.test)?\.tsx?$/.test('HelloWorld.test.ts'))
