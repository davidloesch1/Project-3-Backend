const mongoose = require("../db/connection");

const ImagesSchema = new mongoose.Schema({
  title: String,
  photoFile: { data: Buffer, contentType: String },
  comments: [
    {
      ref: "Comments",
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  genre: [
    {
      Category: String
      
    }
  ],
  votes: number
});

const Image = mongoose.model("Images", ImagesSchema);

module.exports = Image;
