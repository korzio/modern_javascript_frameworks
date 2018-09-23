process.on('unhandledRejection', (a) => {
  console.log('oi', a)
})

Promise.reject(1)