'use strict'

const t = require('tap')

const config = require('../')

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

t.test('test basic properties of config', t => {
  t.ok(Array.isArray(config), 'config should be an array')
  const [mainConfig, testOverrideConfig] = config
  t.ok(isObject(mainConfig.languageOptions), 'main config has languageOptions')
  t.ok(isObject(mainConfig.plugins), 'main config has plugins')
  t.ok(isObject(mainConfig.rules), 'main config has rules')
  t.ok(isObject(testOverrideConfig.rules), 'test override config has rules')
  t.end()
})
