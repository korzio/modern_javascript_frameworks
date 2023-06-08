const promise = () => console.log('promise')
const next = () => console.log('next')
const timeout = (index) => console.log(`timeout ${index}`)
const immediate = (index) => console.log(`immediate ${index}`)

setTimeout(() => {
  timeout(1)
  
  Promise.resolve().then(promise)
  process.nextTick(next)
  process.nextTick(next)
  Promise.resolve().then(promise)
  
  timeout(2)
})

setTimeout(() => {
  timeout(3)
  
  process.nextTick(next)
  process.nextTick(next)
  
  timeout(4)
})

setTimeout(() => {
  timeout(5)
  
  process.nextTick(next)
  process.nextTick(next)
  
  timeout(6)
})

setImmediate(() => {
  immediate(1)
  
  process.nextTick(next)
  process.nextTick(next)
  
  immediate(2)
})

setImmediate(() => {
  immediate(3)
  
  process.nextTick(next)
  process.nextTick(next)
  
  immediate(4)
})

setImmediate(() => {
  immediate(5)
  
  process.nextTick(next)
  process.nextTick(next)
  
  immediate(6)
})