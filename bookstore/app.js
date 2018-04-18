var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

Genre = require("./models/genre");
// Connect to Mongoose
mongoose.connect("mongodb://localhost:27017/bookstore");
var db = mongoose.connection;

app.get("/", function(req, res){
  res.send("Please use the /api/books or /api/genres ");

});
app.get("api/genres", function(req, res){
  Genre.getGenres(function(err, genres){
    if(err){
      throw err;
    }
    res.json(genres);

  });
});
app.listen(4000);
console.log("Running yess on port 4000");
