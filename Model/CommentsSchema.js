const mongoose = require("../db/connection");

const CommentSchema = new mongoose.Schema({
  title: String,
  photo: { data: Buffer, contentType: String },
  subcomments: [
    {
      ref: "Image",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const Comments = mongoose.model("Photos", CommentSchema);

module.exports = Comments;
