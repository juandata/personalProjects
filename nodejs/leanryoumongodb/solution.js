var jsonusers = require('./json/users');


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//1.crear base de datos llamada learnyoumongo, la base de datos no se puede observar
//hasta añadirle una colección.
/*
MongoClient.connect(url + 'db0', function(err, db){
  if (err) throw err;
  console.log("The database was created!");
  db.close();
});
*/

//2. crear collección en base de datos, si la base de datos no existe la crea.
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("database");
  dbo.createCollection("users", function(err, res) { //se usa el método createCollection
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
*/
// 2.1 Insert the elements of the array into the database collection:
MongoClient.connect(url + 'learnyoumongo', function(err, db) {
     // db gives access to the database
     var theDb = db.db('learnyoumongo');
   jsonusers.users.map((el) => {
     theDb.collection('users').insertOne(el, function(err, res) {
       if (err) throw err;
       console.log("1 document inserted");
     });
   });
     db.close();
   });
