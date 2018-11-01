'use strict'

const config = require('../')
const { test } = require('tap')

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

test('test basic properties of config', assert => {
  assert.ok(isObject(config.parserOptions))
  assert.ok(isObject(config.env))
  assert.ok(isObject(config.rules))
  assert.end()
})
