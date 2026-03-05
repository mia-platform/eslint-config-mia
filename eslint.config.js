'use strict'

const { FlatCompat } = require('@eslint/eslintrc')
const path = require('path')

const compat = new FlatCompat({
  baseDirectory: path.resolve(__dirname),
})

module.exports = [
  {
    ignores: ['node_modules/**', 'coverage/**', '.nyc_output/**'],
  },
  ...compat.extends('./eslintrc.json'),
  {
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
]
