const express = require("express");
const router = express.Router();

const Comments = require("../Model/CommentsSchema");

//create all route below
router.get("/", (req, res) => {
  Comments.find({}).then(comments => res.json(comments));
});

router.post("/", (req, res) => {
  //body-parser here with req.body.
  //create new bookmark.
  let newComment = req.body;
  console.log(newComment);

  Comments.create(req.body).then(comments => res.json(comments));
});

module.exports = router; 
