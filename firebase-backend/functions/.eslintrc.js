const defaults = require('@symbio/ts-scripts/.eslintrc')

module.exports = {
  ...defaults,
  overrides: [
    ...defaults.overrides,
    {
      files: ['migrations/*.ts'],
      rules: {
        'filenames/match-regex': [2, '^.+$', false],
        'functional/no-let': 'off',
        'functional/no-loop-statement': 'off',
      },
    },
  ],
}
