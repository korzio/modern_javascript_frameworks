process.on('uncaughtException', function(e) {
  Error.captureStackTrace(e)
  e.stack = e.stack.replace(/.*node/, '.')
  console.log(e.stack)
})

throw {}

console.log('finished')