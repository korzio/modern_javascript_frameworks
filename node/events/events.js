// https://nodejs.org/api/events.html
// what will happen here?

const EventEmitter = require('events')
const myEmitter = new EventEmitter()

myEmitter.on('test', () => console.log('test'))

myEmitter.emit('test')
myEmitter.emit('test')
myEmitter.emit('error')

console.log('finished')