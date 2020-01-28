const mongoose = require("../db/connection");


const ImagesSchema = new mongoose.Schema({
  title: String,
  path: { String },
  votes: 0,
  comments: [
    {
      ref: "Comments",
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  genre: [
    String
  ]
 
});

const Image = mongoose.model("Images", ImagesSchema);

module.exports = Image;
