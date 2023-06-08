const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()
myEmitter.on('event', () => {
  console.log('an event occurred!')
})
myEmitter.on('error', () => {
  
})
myEmitter.emit('error') 

myEmitter.emit('event') 
console.log('after')

