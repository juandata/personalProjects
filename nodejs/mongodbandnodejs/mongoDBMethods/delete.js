var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
//Note: If the query finds more than one document, only the first occurrence is deleted.

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("db1");
  var myquery = { _id: 1 };
  var myquery2 = { address: /^O/ };

  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    //db.close();
  });

//NO FUNCIONA, SE SUPONE QUE SE DEBENE ELIMINAR TODAS LAS ENTRADAS QUE TENGAN UNA PROPIEDAD ADRESS
 dbo.collection("customers").deleteMany(myquery2, function(err, obj) {
   if (err) throw err;
   console.log(obj.result.n + " document(s) deleted");
   db.close();
 });
});
