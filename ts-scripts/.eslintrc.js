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
  plugins: [
    'filenames',
    '@typescript-eslint',
    'functional',
    'import',
    '@lwc/eslint-plugin-lwc',
  ],
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
    'import/no-default-export': 2,
    'filenames/match-regex': [2, '^[a-zA-Z.]+$', false],
    'filenames/match-exported': 2,
    '@lwc/lwc/no-async-await': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
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
