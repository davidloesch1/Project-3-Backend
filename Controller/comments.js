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
// router.post("/new", (req, res) => {
//   Image.create(req.body.image).then(img => {
//     Comments.create(req.body.comment).then(com => {
//       img.comment.push(Comments._id);
//       com.image.push(Images._id);
//       img.save();
//       com.save();
//       res.json(img);
//     });
//   });
// });

//works
router.delete("/:id", (req, res) => {
  let id = req.params._id;
  Comments.findOneAndDelete({ id: id }).then(() => {
    Comments.find({}).then(comments => {
      console.log(comments);
      res.json(comments);
    });
  });
});

module.exports = router;
