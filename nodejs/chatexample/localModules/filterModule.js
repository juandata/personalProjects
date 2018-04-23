//learnyounode select 5: MAKE IT MODULAR [COMPLETED]


   const path = require('path');
   var fs = require('fs');
   module.exports = function(filePath, filter, callback){
     fs.readdir(filePath,  function doneReading(err, list){
       if(err) return callback(err);
       var result = [];
         const filteredArr = list.map(function(cv, ind, arr){
         const ext = path.extname(cv);
         if(ext === '.' + filter){
           result.push(cv);
         }
       });
       return callback(null, result);
     });


   }
