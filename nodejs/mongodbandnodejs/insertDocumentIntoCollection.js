//Usar el método insertOne para añadir un documento a una colección
//https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("db1");
  var myobj = { name: "Juan David", surname: "Tabares Arce", address: "San Martín 841, departamento 311" };
  dbo.collection("coleccionCreadaDesdeNode").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
