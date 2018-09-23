const stream = require('stream')

const readable = (function() {
  const data = []
  const $ = new stream.Readable({
    objectMode: true,
    read() {}
  })
  $.push({ a: 1 })
  $.unshift({ b: 1 })

  return $
})()

readable.on('data', (data) => {
  console.log(data)
})