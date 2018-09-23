var express = require('express')
var app = new express()

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)