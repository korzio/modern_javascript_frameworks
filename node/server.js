const http = require('http')

http.createServer((req, res) => {
  res.write('<html>')
  res.write('<body>')
  res.write('<h1>Hello, World!</h1>')
  res.write('</body>')
  res.write('</html>')
  res.end()
}).listen(8000)
