const stream = require('stream')

const readable = (function(){
  const data = []
  const $ = new stream.Readable({
    read() {
      $.push('1')
    }
  })
  $.unshift('-1')
  $.setEncoding('utf8')

  return $
})()

readable.on('data', (data) => {
  console.log(data)
})

readable.on('end', () => {
  console.log('There will be no more data.');
});

process.nextTick(() => {
  console.log('finished')
  process.exit(0)
})