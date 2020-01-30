const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Comments = require("../Model/CommentsSchema");
const Image = require("../Model/ImageSchema");

//this works
//create all route below
router.get("/", (req, res) => {
  Comments.find({}).then(comments => res.json(comments));
});

//this works
router.post("/", (req, res) => {
  let newComment = req.body;
  console.log(newComment);
  Comments.create(newComment).then(
    Comments.find({}).then(comments => res.json(comments))
  );
});

//not working
//must connect the two ids on both schemas.
router.post("/new", (req, res) => {
  Image.create(req.body.image).then(image => {
    Comments.create(req.body.comment).then(comments => {
      image.comments.push(comment._id);
      comments.subcomments.push(image._id);
      image.save();
      comments.save();

      res.json(image);
    });
  });
});

//this one not working
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Comments.findOneAndDelete({ id: id }).then(() => {
    Comments.find({}).then(comments => {
      console.log(comments);
      res.json(comments);
    });
  });
});

module.exports = router;
