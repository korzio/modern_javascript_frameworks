const fs = require('fs');
const crypto = require('crypto')

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 1

setTimeout(() => console.log('timer 1 expired'), 0)

fs.readFile('text-flie.txt', () => {
  console.log('I/O finished')

  console.log('---------------------------------')
  setTimeout(() => console.log('timer 2 expired'), 0)
  setTimeout(() => console.log('timer 3 expired'), 3000)
  setImmediate(() => console.log('setImmediate 1 is finished'))
  process.nextTick(() => console.log('process.nextTick()'))

  for (let i = 0; i < 6; i++) {
    crypto.pbkdf2('mypassword', 'salt', 500000, 1024, 'sha512', () => {
      console.log(Date.now() - start, 'password encrypted')
    })
  }
})

console.log('this is a top-level code')