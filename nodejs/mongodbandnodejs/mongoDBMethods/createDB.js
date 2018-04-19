//este comando parece no funcionar porque no se puede ver la base de datos en mongo
//https://www.w3schools.com/nodejs/nodejs_mongodb_create_db.asp

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/db1988"

MongoClient.connect(url, function(err, db){
  if (err) throw err;
  console.log("The database was created!");
  db.close();
});
