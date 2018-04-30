//No se puede observar la base de datos hasta que se agregue una colección
//https://www.w3schools.com/nodejs/nodejs_mongodb_create_db.asp

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/db1988"

MongoClient.connect(url, function(err, db){
  if (err) throw err;
  console.log("The database was created!");
  db.close();
});
