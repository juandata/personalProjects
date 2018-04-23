//  learnyounode select 0: HELLO WORLD
//console.log("HELLO WORLD");

//learnyounode select 1: BABY STEPS
//console.log( +process.argv[2][0] + +process.argv[2][1] + +process.argv[2][2] );

// learnyounode select 2: MY FIRST I/O!
/*
var fs = require('fs');
var theFile = fs.readFileSync('./threeLinesFile.txt');
console.log(theFile.toString().split('\n').length - 1);
*/

//learnyounode select 3: MY FIRST ASYNC I/O!
/*
var fs = require('fs');

  fs.readFile(process.argv[2],  function doneReading(err, fileContents){
    if(err) throw err;
    console.log(fileContents.toString().split('\n').length - 1);
  });
*/
//learnyounode select 4: FILTERED LS
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
  });*/

  //learnyounode select 5: MAKE IT MODULAR [COMPLETED]
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

//  learnyounode select 6: HTTP CLIENT

var http = require('http')
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    });
