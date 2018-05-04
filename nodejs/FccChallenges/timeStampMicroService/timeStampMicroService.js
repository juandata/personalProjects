/******************************************************
 * This is the timestamp server file
 * Developed by JDA to potential clients
 * ***************************************************/

var path = require('path')
var express = require('express');
var app = express();
var fs = require('fs');
var url = require('url');
/* //output hello world
 app.get('/', function(req, res) {
   res.end('Hello World!');
 });
 app.listen(process.env.PORT);
 */
/*//process the query and outputs it to the res
app.get('/search', function(req, res){
 var query = req.query;
 res.send(query);
});
app.listen(process.env.PORT);
 */
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  jsonResp = {},
  readableDate = "";

function Unix_timestamp(t) {
  var dt = new Date(t * 1000);
  var month = dt.getMonth();
  var day = dt.getDate();
  var year = dt.getFullYear();
  return months[month] + ' ' + day + ', ' + year;
};
//app.use(express.static('public'));
app.use(function(req, res, next) {
  //console.log("Middleware de nivel de aplicación sin ninguna vía de acceso de montaje");
  var date = req.url.substr(1);
  var miliseconds = parseInt(date);
  var unixDate = new Date(miliseconds);

  if (unixDate == "Invalid Date") {
    var regExpr = /%/;
    date = date.split(regExpr);
    var date1 = new Date(date[0] + " " + date[1] + "," + date[2]);
    if (date1 == "Invalid Date") {
      jsonResp = {
        "unix": null,
        "natural": null
      };

      res.json(jsonResp);
    } else {
      var date2 = date1.getTime();
      var timestamp = Math.floor(date2 / 1000);
      jsonResp = {
        "unix": timestamp,
        "natural": date[0] + " " + date[1] + "," + date[2]
      };

      res.json(jsonResp);
    }




    //console.log("the date is wrong");
  } else {
    readableDate = Unix_timestamp(date);
    jsonResp = {
      "unix": miliseconds,
      "natural": readableDate
    };

    res.json(jsonResp);
  }
  next();
});

app.use('/public', express.static('/app/public'));
/*
app.get('/', function(req, res) {
   console.log("this never appears");
  //var urlObject = url.parse(req.url, true);
 //console.log(urlObject);
 res.sendFile('index.html', { root: __dirname + '/views/'})
 //res.sendFile(__dirname + '/views/index.html')
 //var query = req.query;
 //res.send(query);
 //console.log(query);

})*/

app.listen(process.env.PORT, function() {
  console.log('Node.js listening ...');
});
