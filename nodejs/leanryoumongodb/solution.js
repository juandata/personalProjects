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
/*
MongoClient.connect(url + 'learnyoumongo', function(err, database) {
     // db gives access to the database
     var theDb = database.db('learnyoumongo');
     //iterate over the array of objects and insert them into the collection
  jsonusers.users.map((el) => {
     theDb.collection('users').insertOne(el, function(err, res) {
       if (err) throw err;
       console.log("1 document inserted");
     });
   });
   //search for documents with age property greater than first option in cli
    var theDoc = theDb.collection('users').find().toArray(function(err, documents){
      console.log(documents[0].age);
      documents.map((el)=>{
        if(el.age > process.argv[2]){
          console.log(el);
        }
      });

    });
      database.close();
   });
   */

   // 3 find
var age = process.argv[2]
MongoClient.connect(url, function(err, database) {
  if (err) throw err;
  var theDb = database.db('learnyoumongo');
  var parrots = theDb.collection('parrots');
  parrots.find({
    age: {
      $gt: +age
    }
  }).toArray(function(err, docs) {
    if (err) throw err
    console.log(docs)
    database.close()
  })
})
