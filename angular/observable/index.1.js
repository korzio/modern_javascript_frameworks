const { Observable } = require('rx')

const source = Observable.range(1, 3)
const subscription = source.subscribe(
  (x) => console.log('onNext: ' + x),
  (e) => console.log('onError: ' + e.message),
  () => console.log('onCompleted')
)

// => onNext: 1
// => onNext: 2
// => onNext: 3
// => onCompleted
