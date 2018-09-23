const fs = require('fs')
const events = require('events')
const domain = require('domain')

new events

domain.active = domain.create()
domain.active.on('error', (error) => {
  setTimeout(() => {
    console.log('domain')
  })
})
events.usingDomains = true // false

const file = fs.createWriteStream('example.txt')

file.write('hello, ')
file.end('world!')

try {
  // throw new Error('something')
  file.write('hello, ')
} catch(e) {
  console.log('error')
}

setTimeout(() => {
  console.log('done')
})