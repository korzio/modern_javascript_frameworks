require('../modules')

delete require.cache[require.resolve('../empty')]

const empty = require('../empty')

console.log(empty.test) // how to make this be undefined again?

console.log('finished')
