const http = require('http')

http.createServer((request, response) => {
  const { headers, method, url } = request
  let body = []

  request.emit('error')
}).listen(8080)