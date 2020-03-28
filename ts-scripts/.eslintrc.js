module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
  ],
  plugins: ['filenames', '@typescript-eslint', 'functional', 'import', '@lwc/eslint-plugin-lwc'],
  env: {
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `./tsconfig.json`,
  },
  ignorePatterns: ['node_modules/', 'build/', 'jest.config.js'],
  rules: {
    'functional/prefer-readonly-type': 0,
    'import/no-default-export': 2,
    'filenames/match-regex': [2, '^[a-zA-Z.]+$', false],
    'filenames/match-exported': 2,
    '@lwc/lwc/no-async-await': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
    ],
  },
}
