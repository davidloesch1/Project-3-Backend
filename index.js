const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());
//define path for pic upload
//const path = require('path');

//port number to listen
const PORT = 8080;



//add 2 router files here -
const commentController = require("./Controller/comments.js");
const imagesController = require("./Controller/images");

//connect the controllers here
app.use("/api/comment/", commentController);
app.use("/api/images/", imagesController);

//this is the picture code below
//app.use(express.static(path.join(__dirname, '.', 'public')))






//listen on port 8080
app.listen(PORT, () => {
  console.log("they see me rollin on port 8080...");
});
