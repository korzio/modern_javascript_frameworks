function Promise(source) {
  const thenableMock = {
    then: function(cb) {
      cb()

      return thenableMock
    },

    catch: function(cb) {
      cb()

      return thenableMock
    },
  }

  if (typeof source !== 'function') {
    throw new Error('Constructor argument should be a function')
  }

  source(resolve, reject)
}

exports.Promise = Promise