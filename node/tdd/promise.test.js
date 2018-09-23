const { Promise } = require('./promise')

describe('Promise', () => {
  let promise

  beforeEach(() => {
    promise = new Promise(function(resolve, reject) {
      resolve()
    })
  })

  describe('then()', () => {
    test('can be executed', (done) => {
      promise.then(done)
    })

    test('can be executed twice', (done) => {
      promise.then(() => {}).then(done)
    })

    test('can be executed three times', (done) => {
      promise
        .then(() => {})
        .then(() => {})
        .then(done)
    })
  })

  describe.skip('catch()', () => {
    test('can be executed', (done) => {
      promise.catch(done)
    })
  })
})