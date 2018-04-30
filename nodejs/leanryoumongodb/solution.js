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
MongoClient.connect(url, function(err, database) {
     // db gives access to the database
     var theDb = database.db('learnyoumongo');
     //iterate over the array of objects and insert them into the collection
  jsonusers.users.map((el) => {
     theDb.collection('parrots').insertOne(el, function(err, res) {
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

   // 3 and 4  find project
   /*
var age = process.argv[2]
MongoClient.connect(url, function(err, database) {
  if (err) throw err;
  var theDb = database.db('learnyoumongo');
  var parrots = theDb.collection('parrots');
  parrots.find({
    age : {
    $gt : +age
  }
}).project({_id : 0}).toArray(function(err, docs) {
    if (err) throw err
    console.log(docs)
    database.close()
  })
})
*/

//5 Insert
/*
var firstName = process.argv[2], lastName = process.argv[3];
var doc = {
firstName: firstName
, lastName: lastName
};
MongoClient.connect(url, function(err, database){
  if (err) throw err;
  var theDB = database.db('learnyoumongo');
  var collection = theDB.collection('docs');
  collection.insert(doc, function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(doc));
    db.close();
  })
});
*/

//6 Update

var newValues = {}, username = process.argv[2];
MongoClient.connect(url, function(err, database){
  if (err) throw err;
  var theDB = database.db(process.argv[2]), collection = theDB.collection('users'), username = process.argv[2];
  //update username property to every every doc in the collection
  /*
  jsonusers.users.map((el)=> {
    collection.updateMany({name : el.name},
      {
        $set : {
          username : el.name + '_user'
        }
      }

      , function(err, res){
      if (err) throw err;
      console.log( el.name + " updated");
    });
  });
    database.close();
});
*/
//update just one document property from the Collection
collection.update({username : 'tinatime'}, {
  $set : {
  age : 40
}
},function(err, resp){
  console.log("updated");
  database.close();
});
});
