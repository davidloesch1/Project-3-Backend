//import express 
const express = require("express");
//create instance of express
const app = express();

//port number to listen
const PORT = 8080;


//listen on port 8080
app.listen(PORT, () => {
  console.log("they see me rollin on port 8080...");
});
