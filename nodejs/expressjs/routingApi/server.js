var express = require("express");
var app     = express();
var fs = require('fs');
var path  = require("path");


app.get('/',function(req,res){
  app.use(express.static('Script/js'))

  res.sendFile('index.html',{ "root": __dirname + '/View'});
  //It will find and locate index.html from View or Scripts

});

app.get('/about',function(req,res){
  res.sendFile('about.html', {"root": __dirname + '/View'});
});

app.get('/services',function(req,res){
  res.sendFile('services.html', {"root": __dirname + '/View'});
});
app.get('/books', function(req, res){
    fs.readFile('./APIs/books.json',  function doneReading(err, fileContents){
      if(err) throw err;
       var object = JSON.parse(fileContents);
       module.exports = {
         object
       }
      res.json(object);
    });
});
app.listen(3001);

console.log("Running at Port 3001");


/*
Resolving Path in each Route
var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

app.get('/services',function(req,res){
  res.sendFile(path.join(__dirname+'/services.html'));
});

app.listen(3000);

console.log("Running at Port 3000");
*/
