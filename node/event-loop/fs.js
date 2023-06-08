const fs = require('fs')

fs.readFile('./events.js', () => {
  console.log('fs')
  setTimeout(() => console.log('timeout'))
  setImmediate(() => console.log('immediate'))
})