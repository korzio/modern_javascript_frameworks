setInterval(() => {
  console.log('hello')
}, 500);

process.addListener('SIGINT', () => {
  console.log('got it')
  process.exit(0)
})