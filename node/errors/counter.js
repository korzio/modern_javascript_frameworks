const { Readable, Transform } = require('stream');

class Counter extends Readable {
  constructor(opt) {
    super(opt);
    this._max = 100;
    this._index = 1;
  }

  _read() {
    const i = this._index++;
    if (i > this._max)
      this.push(null);
    else {
      const str = String(i);
      const buf = Buffer.from(str, 'ascii');
      this.push(buf);
    }
  }
}

new Counter().pipe(new Transform({
  transform(chunk, encoding, callback) {
    chunk |= 0;
    const data = chunk.toString() + '\n';
    callback(null, data);
  }
})).pipe(process.stdout)