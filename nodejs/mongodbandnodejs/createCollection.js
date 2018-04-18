//Este código crea una colección en una base de datos (si la base no existe también la crea).
//https://www.w3schools.com/nodejs/nodejs_mongodb_createcollection.asp

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("db1");
  dbo.createCollection("coleccionCreadaDesdeNode", function(err, res) { //se usa el método createCollection
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
