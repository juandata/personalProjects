//Usar el método insertOne para añadir un documento a una colección
//https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("db1");
  var myobj =
  { _id: 1, product_id: 154, status: 1 };
  dbo.collection("orders").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});