//0:  learnyounode select 0: HELLO WORLD
/*
console.log("HELLO WORLD");
*/
//1: learnyounode select 1: BABY STEPS
/*
var res = 0;
for(var i = 2;  i < process.argv.length; i ++ ){
res += Number(process.argv[i]);
}
  console.log(res);
*/
//2: learnyounode select 2: MY FIRST I/O!
/*
var fs = require('fs');
var theFile = fs.readFileSync(process.argv[2]);
console.log(theFile.toString().split('\n').length - 1);
*/
//3: learnyounode select 3: MY FIRST ASYNC I/O!
/*
var fs = require('fs');

  fs.readFile(process.argv[2],  function doneReading(err, fileContents){
    if(err) throw err;
    console.log(fileContents.toString().split('\n').length - 1);
  });
  */
//4: learnyounode select 4: FILTERED LS
/*
const path = require('path');
const theFilter = path.win32.basename( '.' + process.argv[3]);
var fs = require('fs');
  fs.readdir(process.argv[2],  function doneReading(err, list){
    if(err) throw err;

    const filteredArr = list.map(function(cv, ind, arr){
      const ext = path.extname(cv);
      if(ext === theFilter){
        console.log(cv);
        return ext;
      }
    });
  });
*/
  //5: learnyounode select 5: MAKE IT MODULAR [COMPLETED]
/*
  const path = require('path');
  var myFilterModule = require('./localModules/filterModule');
  const theFilter = path.win32.basename( process.argv[3]);
  const theUrl = process.argv[2];


  myFilterModule(theUrl, theFilter, function (err, data){
    if(err) throw err;
    data.forEach(function(d){
      console.log(d);
    });
  });
*/

//6: learnyounode select 6: HTTP CLIENT
/*
var http = require('http')
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    });
*/
//7: HTTP COLLECT (Exercise 8 of 13)
/*
var http = require('http'), BufferList = require('bl'), url = process.argv[2];
http.get(url, function(response) {
  response.pipe(BufferList(function (err, data) {
    if(err) throw err;
    console.log(data.length);
    console.log(data.toString());
  }))
});
*/
//8: JUGGLING ASYNC (Exercise 9 of 13)
/*
var http = require('http'), BufferList = require('bl'), results = [], count = 0;

function printResults(){
  for (var i = 0; i < 3; i ++){
    console.log(results[i]);
  }
}
function httpGet(index ) {
http.get(process.argv[2 + index], function(response) {

  response.pipe(BufferList(function (err, data) {
    if(err) throw err;

      results[index] = data.toString();
      count ++;
      if(count === 3) {
        printResults();
      }
  }))
});
}
for (var i = 0; i < 3; i ++){
  httpGet(i);
}
*/
//9:  TIME SERVER (Exercise 10 of 13)
/*
var net = require('net');
function zeroFill(i) {
    return (i < 10 ? '0' : '') + i;
}
function now() {
    var d = new Date();
    return d.getFullYear() + '-'
      + zeroFill(d.getMonth() + 1) + '-'
      + zeroFill(d.getDate()) + ' '
      + zeroFill(d.getHours()) + ':'
      + zeroFill(d.getMinutes());
}
var server = net.createServer(function(socket) {
    console.log("connected");

    socket.on('close', () => {
      console.log('closed');
    });
    socket.on('error', (err) => {
      throw err;
    });
    socket.end(now() + '\n');
});
server.listen(Number(process.argv[2], () => {console.log('server bound', server.address())}));
*/
 //10: HTTP FILE SERVER (Exercise 11 of 13)
/*
 var http = require('http');
 var server = http.createServer(function (req, res){
   //request handling logic
   var fs = require('fs'); fs.createReadStream(process.argv[3]).pipe(res);
 });
 server.listen(Number(process.argv[2]), () => {console.log("Server listening on http://localhost:", process.argv[2] )});
*/
//11: learnyounode select 11: HTTP UPPERCASERER
/*
var http = require('http'), map = require('through2-map');
var server = http.createServer(function (req, res){

  if(req.method !== 'POST'){
    return res.end('Please send a POST method request.');
  }
  req.pipe(map(function (chunk){
    return chunk.toString().toUpperCase()
  })).pipe(res);
});

server.listen(Number(process.argv[2]), () => {
  console.log("Server listening on http://localhost:", process.argv[2]);
});
*/
/*
// HTTP JSON API SERVER (Exercise 13 of 13)
var http = require('http'), url = require('url');
var server = http.createServer(function (req, res){
  console.log("connected in the url:", req.url);
  if(req.method !== 'GET'){
    return res.end('Please send a GET method request.');
  };
  var jsonData = {
    name : "Juan", lastName : "Tabares"
  };
  var fecha = new Date().toISOString();
  var urlObject = url.parse(req.url, true);
  var stringISO = urlObject.query.iso;
  var regExpr = /T/i;
  var hour = stringISO.split(regExpr);
  console.log( hour);
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.write(JSON.stringify(jsonData));
  res.write(fecha);

});


server.listen(Number(process.argv[2]), () => {
  console.log("Server listening on http://localhost:", process.argv[2]);
});*/
