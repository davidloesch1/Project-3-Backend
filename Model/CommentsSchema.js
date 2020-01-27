const mongoose = require("../db/connection");

const CommentSchema = new mongoose.Schema({
  title: String,
  photo: 
    {
      ref: "Images",
      type: mongoose.Schema.Types.ObjectId
    },
  // ????????????????  
parent: {},

  subcomments: [
    {
      ref: "Comments",
      type: mongoose.Schema.Types.ObjectId
    }
  ]

});

const Comment = mongoose.model("Comments", CommentSchema);

module.exports = Comment;
