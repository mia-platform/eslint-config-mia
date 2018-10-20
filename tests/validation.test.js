'use strict'

const { CLIEngine } = require('eslint')
const { test } = require('tap')

test('Validate configurations with eslint to assure all rule syntax is correct', assert => {
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json',
  })

  assert.strictSame(cli.executeOnFiles(['.']).errorCount, 0)
  assert.end()
})
