const fs = require('fs')
const rr = fs.createReadStream('./test.txt')

rr.pause()
rr.on('data', () => {
  console.log(`data: ${rr.read()}`)
})
// rr.on('readable', () => {
//   console.log(`readable: ${rr.read()}`)
// })
rr.on('end', () => {
  console.log('end')
})

rr.read()