const domain = require('domain')

domain.active = domain.create()
domain.active.on('error', (error) => {
  console.log('domain')
})

process.on('uncaughtException', (error) => {
  console.log('uncaughtException')
})

domain.active.run(() => {
  throw new Error('thrown')
})