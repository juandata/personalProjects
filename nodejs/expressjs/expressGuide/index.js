var path = require('path')
var express = require('express');
var app = express();
// POST method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

app.get('/home', function (req, res) {
  res.send('GET request to the home')
});
app.get('/user', function (req, res) {
  res.send('GET request to the user')
});
app.listen(process.argv[2]);
