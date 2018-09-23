const { Observable } = require('rx')

Observable.range(0, 5)
  .filter(function (x, idx, obs) {
    return x % 2 === 0
  })
  .map(x => x*x)
  .subscribe(a => console.log(a))