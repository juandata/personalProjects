var express = require("express");
var app     = express();

app.get('/',function(req,res){
  res.sendFile('index.html',{ "root": __dirname + '/View'});
  //It will find and locate index.html from View or Scripts
});

app.get('/about',function(req,res){
  res.sendFile('about.html', {"root": __dirname + '/View'});
});

app.get('/services',function(req,res){
  res.sendFile('services.html', {"root": __dirname + '/View'});
});

app.listen(3000);

console.log("Running at Port 3000");
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
