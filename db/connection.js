//import mongoose
const mongoose = require("mongoose");
//Set Mongoose default Promise library to JS native Promise
mongoose.Promise = Promise;
//Connects to db
mongoose.connect("mongodb://localhost/photoapp", { useNewUrlParser: true });

module.exports = mongoose;


