var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
//limita el número de resultados 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("db1");
  dbo.collection("customers").find().limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
