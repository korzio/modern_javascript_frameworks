const { Observable } = require('rx')

Observable.of('red', 'green', 'blue')
  .subscribe(color => console.log(color))
