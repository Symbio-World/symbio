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
  plugins: ['filenames', '@typescript-eslint', 'functional', 'import'],
  env: {
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `./tsconfig.json`,
  },
  ignorePatterns: ['node_modules/', 'build/', 'jest.config.js'],
  overrides: [
    {
      files: ['*.test.ts'],
      rules: {
        'functional/no-expression-statement': 'off',
        'functional/functional-parameters': 'off',
        'functional/no-let': 'off',
        'functional/no-throw-statement': 'off',
        '@lwc/lwc/no-async-await': 'off',
      },
    },
  ],
  rules: {
    'functional/prefer-readonly-type': 0,
    'functional/functional-parameters': 0,
    'functional/no-expression-statement': 0,
    'functional/no-mixed-type': 0,
    'functional/no-return-void': 0,
    'functional/no-conditional-statement': 0,
    'functional/no-throw-statement': 0,
    'import/no-default-export': 2,
    'filenames/match-regex': [2, '^[a-zA-Z.]+$', false],
    'filenames/match-exported': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/unbound-method': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
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
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
    ],
  },
}
