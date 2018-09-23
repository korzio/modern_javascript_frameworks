// https://nodejs.org/api/events.html
// what will happen here?

const EventEmitter = require('events')

const myEmitter = new EventEmitter()

myEmitter.on('test', () => console.log('test'))
myEmitter.prependListener('test', () => console.log('test1'))

myEmitter.emit('test')

console.log('finished')