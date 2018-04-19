var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//para ordenar un resultado alfabeticameatne se puede usar el método sort justo después de find. El valor 1 indica ascendente, el 1 descendente. 
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("db1");
  var ascendingSort = { name: 1 }, descendingSort = {name: -1} ;
  dbo.collection("customers").find().sort(ascendingSort).toArray(function(err, result) {
    if (err) throw err;
    console.log("-sort(ascending) :", result);
    //db.close();
  });
  dbo.collection("customers").find().sort(descendingSort).toArray(function(err, result) {
    if (err) throw err;
    console.log("-sort(descending) :", result);
    //db.close();
  });
});
