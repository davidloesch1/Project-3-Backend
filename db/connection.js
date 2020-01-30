const config = require('config');
const db = config.get('mongoURI');

// let mongoURI = "";

// if (process.env.NODE_ENV === "production") {
//     mongoURI = process.env.DB_URL;
//   } else {
//     mongoURI = "mongodb://localhost/photoappproject3";
//   }

//import mongoose
const mongoose = require("mongoose");
//Set Mongoose default Promise library to JS native Promise
mongoose.Promise = Promise;
//Connects to db
mongoose.connect(db, { useNewUrlParser: true });



module.exports = mongoose;


