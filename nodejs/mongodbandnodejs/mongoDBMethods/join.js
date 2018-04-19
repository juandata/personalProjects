var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

//NO FUNCIONA, DEBERÍA AÑADIR EL OBJETO DE PRODUCTS QUE ENCAJA CON EL product_id EN ORDERS COMO UN ARRAY.
//https://www.w3schools.com/nodejs/nodejs_mongodb_join.asp
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("db1");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});
