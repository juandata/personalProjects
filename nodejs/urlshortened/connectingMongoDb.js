//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.

//(Focus on This Variable)
var url = 'mongodb://localhost:27017/urlshortened';
var urlRemoteEnvVariable= process.env.MONGOLAB_URI;
/*for creating an environment variable use the next sintax before executing the command:
MAC/LINUX
export MONGOLAB_URI="thevalueyouwant"
WINDOWS
SET MONGOLAB_URI="thevalueyouwant"
*/

//(Focus on This Variable)
/*
// Use connect method to connect to the Server
  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);

    // do some work here with the database.

    //Close connection
    db.close();

  }
});*/
/*
MongoClient.connect(urlRemoteEnvVariable, function (err, db) {
if (err) {
  console.log('Unable to connect to the mongoDB server. Error:', err);
} else {
  console.log('Connection established to mlab.com:15340/urlshortened');

  // do some work here with the database.


  //Close connection
  db.close();
}
});
*/ //create collection
/*
MongoClient.connect(urlRemoteEnvVariable, function(err, db) {
  if (err) throw err;
  var dbo = db.db("urlshortened");
  dbo.createCollection("users1", function(err, res) { //se usa el método createCollection
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});*/
  //drop collection
/*
MongoClient.connect(urlRemoteEnvVariable, function(err, db) {
  if (err) throw err;
  var dbo = db.db("urlshortened");
  dbo.collection('users3').drop(function(err, ok){
    if (err) throw err;
    if (ok) console.log('collection droped!');
    db.close();
  });
});
*/
//insert document in collection
var jsonObject = {
  name : "Juan David",
  lastName : "Tabares Arce"
}
MongoClient.connect(urlRemoteEnvVariable, function(err, db) {
if (err) throw err;
var dbo = db.db("urlshortened");
dbo.collection('users4').insert( jsonObject, function(err, ok){
  if (err) throw err;
  if (ok) console.log('document inserted!', ok);
  db.close();
});
});
