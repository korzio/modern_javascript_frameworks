const EventEmitter = require('events')

const subject = new EventEmitter()

subject.addListener('test', () => console.log('got it'))
subject.emit('test')
console.log('after')

subject.setMaxListeners(1)
subject.addListener('test1', () => console.log('got it'))
subject.addListener('test1', () => console.log('got it'))
subject.addListener('test2', () => console.log('got it'))
subject.addListener('test2', () => console.log('got it'))

console.log('finish')