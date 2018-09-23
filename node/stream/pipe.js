const stream = require('stream')

const readable = new stream.Readable({
  encoding: 'utf-8',
  read() {}
})

readable.push('1')
readable.push('1')
readable.push('1')

const writable = new stream.Writable({
  encoding: 'utf-8',
  write(chunk, encoding, callback) {
    console.log('write', chunk.toString())
    callback()
  }
})

readable.on('data', (chunk) => {
  writable.write(chunk)
})

readable.on('end', () => {
  writable.end()
})

// ->
// readable.pipe(writable)
