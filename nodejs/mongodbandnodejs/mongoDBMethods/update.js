var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("db1");
  var myquery = { address: "Calle 48C N 16-20" };
  var newvalues = { $set: {name: "Maria Antonia", surname: "Tabarez Vanegas", address: "Calle 48C N 16-20" } };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
