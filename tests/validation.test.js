'use strict'

const { LegacyESLint } = require('eslint/use-at-your-own-risk')
const t = require('tap')

t.test('Validate configurations with eslint to assure all rule syntax is correct', async t => {
  const cli = new LegacyESLint({
    useEslintrc: false,
    overrideConfigFile: 'eslintrc.json',
    errorOnUnmatchedPattern: false,
  })

  const lintResult = await cli.lintFiles(['.'])
  const errorCount = lintResult.reduce((total, result) => {
    return total + result.errorCount
  }, 0)

  t.strictSame(errorCount, 0)
  t.end()
})
