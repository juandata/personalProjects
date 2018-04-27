/* Build Wep Apps with express.js
// 1: Hello World -Create an Express.js app that outputs "Hello World!" when somebody goes to /home.
//The port number will be provided to you by expressworks as the first argument of
//the application, ie. process.argv[2].
  var express = require('express');
  var app = express();
   app.get('/home', function(req, res) {
     res.end('Hello World!');
   });
   app.listen(process.argv[2]);
*/
/*
// 2: Static -Apply static middleware to serve index.html file without any routes.
//Your solution must listen on the port number supplied by process.argv[2].
//The index.html file is provided and usable via the path supplied by
process.argv[3]. However, you can use your own file with this content:
   var path = require('path')
   var express = require('express');
   var app = express();
   app.use(express.static('/index.html'||path.join(__dirname, 'public')));
   app.listen(process.argv[2]);
*/
/*
// 3: Jade -Create an Express.js app with a home page rendered by Jade template engine.
//The homepage should respond to /home.
//The view should show the current date using toDateString.
var path = require('path')
var express = require('express');
var app = express();
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
});
app.listen(process.argv[2]);
*/

// 4: Good Old Form -Write a route ('/form') that processes HTML form input
//(<form><input name="str"/></form>) and prints backwards the str value.

/*
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
  var string = req.body.str.split('').reverse().join('');
res.send(string);
});
app.listen(process.argv[2]);
*/
// 5: Stylish CSS -Style your HTML from previous example with some Stylus middleware.
//Your solution must listen on the port number supplied by process.argv[2].
//The path containing the HTML and Stylus files is provided in process.argv[3]
/*
var express = require('express');
var app = express();
app.use(require('stylus').middleware(__dirname + process.argv[3]));
app.use(express.static(process.argv[3]));
app.listen(process.argv[2]);
*/
// 6: Param Pam Param -Create an Express.js server that processes PUT '/message/:id' requests.
/*
var express = require('express')
var app = express()

app.put('/message/:id', function(req, res){
  var id = req.params.id
  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(str)
})

app.listen(process.argv[2])
*/
// 7:  WHAT'S IN QUERY -Write a route that extracts data from query string in the GET '/search' URL
//route, e.g. ?results=recent&include_tabs=true and then outputs it back tothe user in JSON format.
/*
var express = require('express');
var app = express();

app.get('/search', function(req, res){
  var query = req.query;
  res.send(query);
});

app.listen(process.argv[2]);
*/
// 8: JSON ME - Write a server that reads a file, parses it to JSON and outputs the content to the user.
/*
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res){
    fs.readFile(process.argv[3],  function doneReading(err, fileContents){
      if(err) throw err;
      var object = JSON.parse(fileContents);
      res.json(object);
    });
});
app.listen(process.argv[2]);
*/
