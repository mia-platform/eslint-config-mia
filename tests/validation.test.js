'use strict'

const { CLIEngine } = require('eslint')
const t = require('tap')

t.test('Validate configurations with eslint to assure all rule syntax is correct', t => {
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json',
  })

  t.strictSame(cli.executeOnFiles(['.']).errorCount, 0)
  t.end()
})
