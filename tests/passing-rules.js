'use strict'

async function exportedFunction() {
  const array = []
  let object = {
    Array: array,
  }

  object = {
    k: object,
    _id: '_id',
    _s: '_s',
    _p: '_p',
    _q: '_q',
    _l: '_l',
    _sk: '_sk',
    _st: '_st',
    __STATE__: '__STATE__',
  }

  const promises = []
  for (const i in object) {
    if ({}.hasOwnProperty.call(object, i)) {
      promises.push(promise())
    }
  }

  const string = `${object.k._id}, ${object.k._s}, ${object.k._p}, ${object.k._q}, ${object.k._l}, ${object.k._sk}, ${object.k._st}, ${object.k.__STATE__}`
  const results = await Promise.all(promises)
  return { results, string }
}

async function promise() {
  return new Promise((resolve) => {
    resolve('ok')
  })
}

module.exports = exportedFunction
