'use strict'

async function exportedFunction() {
  const array = []
  let object = {
    Array: array,
  }

  object = {
    k: object,
  }

  const promises = []
  for (const i in object) {
    if ({}.hasOwnProperty.call(object, i)) {
      promises.push(promise())
    }
  }

  const results = await Promise.all(promises)
  return results
}

async function promise() {
  return new Promise((resolve) => {
    resolve('ok')
  })
}

module.exports = exportedFunction
