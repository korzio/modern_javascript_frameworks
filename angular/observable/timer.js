const { Observable } = require('rx')

// const source = Observable.timer(500, 500)
const source = Observable.interval(500 /* ms */)
const subscription = source.subscribe(
  (x) => console.log('onNext: ' + x),
  (e) => console.log('onError: ' + e.message),
  () => console.log('onCompleted')
)

// => onNext: 1
// => onNext: 2
// => onNext: 3
// => onCompleted
