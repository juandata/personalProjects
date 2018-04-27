var fs = require('fs');
var express = require("express");
var app     = express();
//open *File Descriptors
app.get('/',function(req,res){

fs.open('../server.js', 'r', (err, fd) => {
  if (err) throw err;
  fs.fstat(fd, (err, stat) => {
    //Class: fs.Stats
    //A fs.Stats object provides information about a file.
    if (err) throw err;
    // use stat
    console.log(stat); //file descriptor

    // always close the file descriptor!
    //Most operating systems limit the number of file descriptors that may be open at any given time so it is critical
    //to close the descriptor when operations are completed. Failure to do so will result in a memory leak that will eventually cause an application to crash.
    fs.close(fd, (err) => {
      if (err) throw err;
      });
    });
  });
})
app.listen(3001);
