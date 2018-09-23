const fs = require('fs')
const events = require('events')
// const domain = require('domain')

// domain.active = domain.create()
// domain.active.on('error', (error) => {
//   setTimeout(() => {
//     // throw new Error('myError')
//     console.log('myError')
//   })
// })
// events.usingDomains = true

const file = fs.createWriteStream('example.txt')

file.write('hello, ')
file.end('world!')

// try {
  file.write('hello, ')
  // throw new Error('something')
// } catch(e) {
//   console.log('error')
// }

setTimeout(() => {
  console.log('done')
})