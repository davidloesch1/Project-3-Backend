//import express 
const express = require("express");
//create instance of express
const app = express();

//define path for pic upload
const path = require('path');

//port number to listen
const PORT = 8080;

//start listening to routes in the controller folder fbelow. 


//this is the picture code below
app.use(express.static(path.join(__dirname, '.', 'public')))






//listen on port 8080
app.listen(PORT, () => {
  console.log("they see me rollin on port 8080...");
});
