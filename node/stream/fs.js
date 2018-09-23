const fs = require('fs')
const http = require('http')

http.createServer((req, res) => {
  fs.createReadStream('./huge', { encoding: 'utf-8' })
    .pipe(res)
}).listen(8000)
