const empty = require('./empty.js')

empty.test = 123

console.log(require('./empty.js').test)
