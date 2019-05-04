'use strict'

const config = require('../')
const t = require('tap')

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

t.test('test basic properties of config', t => {
  t.ok(isObject(config.parserOptions))
  t.ok(isObject(config.env))
  t.ok(isObject(config.rules))
  t.ok(isObject(config.overrides))
  t.end()
})
