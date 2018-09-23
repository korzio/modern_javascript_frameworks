const stream = require('stream')

const writable = (function(){
  const data = []
  const $ = new stream.Writable({
    write(chunk, encoding, callback) {
      const str = chunk.toString()
      console.log('write', str)
      data.push(str)
      callback()
    }
  })

  $.on('prefinish', () => {
    console.log('prefinish', data)
  })

  return $
})()

writable.write('some data')
writable.write('some more data')
writable.end('done writing data')

writable.on('finish', () => {
  console.log('All writes are now complete.')
})

// process.nextTick(() => {
//   console.log('finished')
//   process.exit(0)
// })