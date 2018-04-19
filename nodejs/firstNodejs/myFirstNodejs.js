var http = require("http");
var dt = require("./myFirstModule");
var url = require("url");
var fs = require("fs");

http.createServer(function(req, res){

  fs.readFile("NodejsTutorial/html/index.html", function(err, data) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    fs.appendFile('mynewfile1.txt', 'Creado por Node.js! ', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved too!');
});

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved again!');
});
    res.end("Hola soy Nodejs, un server framework, el modulo indica que son las :" + dt.myDateTime());
  });
  fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });



  /*var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
  //
  res.write(req.url);
  res.end("Hola soy Nodejs, un server framework, el modulo indica que son las :" + dt.myDateTime());
  */

}).listen(8083);
