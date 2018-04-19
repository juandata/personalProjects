var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//encuentra el primer registro en el documento
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("db1");
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log("-findOne() :", result);
    //db.close();
  });
//encuentra todos los registros
  dbo.collection("customers").find({}).toArray(function(err, result){
    if (err) throw err;
    console.log("-find({}) :", result);
    //db.close();
  });
//el segundo parametro del método find es un objeto que describe qué campos se deben incluir en el resultado
//sin embargo, NO ESTÁ FUNCIONADO como se espera!!
  dbo.collection("customers").find({}, { _id: 0, name: 1, address: 1 }).toArray(function(err, result) {
    if (err) throw err;
    console.log("-find({}, {filtro}) :", result);
    //db.close();
  });
//se pueden filtrar los resultados añadiendo un query al primer parametro del método find();
  var query = { address: "Lowstreet 4" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log("-find({query} :", result);
    db.close();
  });
});
