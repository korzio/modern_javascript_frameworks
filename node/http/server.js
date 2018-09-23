const http = require('http')

http.createServer((req, res) => {
  let body = []
  req.on('data', (chunk) => {
    body.push(chunk)
  }).on('end', () => {
    body = Buffer.concat(body).toString()
    console.log(body)
    res.end('hello world\n')
  })
}).listen(8000)