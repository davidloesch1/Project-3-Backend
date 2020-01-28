const config = require('config');
const db = config.get('mongoURI');

//import mongoose
const mongoose = require("mongoose");
//Set Mongoose default Promise library to JS native Promise
mongoose.Promise = Promise;
//Connects to db
mongoose.connect(db, { useNewUrlParser: true });



module.exports = mongoose;


