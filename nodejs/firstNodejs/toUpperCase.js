var http = require('http');
var uc = require('upper-case');
var fs = require('fs');
var formidable = require('formidable');


http.createServer(function (req, res) {
  if(req.url == '/fileupload'){
    var form = new formidable.IncomingForm();
   form.parse(req, function (err, fields, files) {
     var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/nisum/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
   });
  }
  else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
  }
}).listen(8085);
