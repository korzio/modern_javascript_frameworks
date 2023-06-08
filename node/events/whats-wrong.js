/**
 * What's wrong with this code?
 * What will be an output?
 * How to fix it?
 */
// const EventEmitter = require('events')
const EventEmitter = require('./index.js')

class MyThing extends EventEmitter {
  constructor() {
    super()
    setTimeout(() => {
      this.emit('thing1')
    })
  }
}

// ...client
const mt = new MyThing()
mt.on('thing1', function onThing1() {
  console.log('thing1')
})