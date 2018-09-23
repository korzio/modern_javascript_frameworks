process.on('uncaughtException', (error) => {
  console.log('uncaughtException')
  setTimeout(() => console.log('now done'))
})

setTimeout(() => {
  console.log('where am I?')
})

throw new Error('thrown')

setTimeout(() => {
  console.log('done?')
})