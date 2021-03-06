const express = require("express");
const router = express.Router();

const Comments = require("../Model/CommentsSchema");
const Image = require("../Model/ImageSchema");

//this works
//create all route below
router.get("/", (req, res) => {
  Comments.find({}).then(comments => res.json(comments));
});

router.get("/:id", (req, res) => {
  Comments.findById(req.params.id).then(comment => res.json(comment));
});

//this works
router.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.body.photo);
  Image.findById(req.body.photo).then(image => {
    Comments.create(req.body).then(comment => {
      image.comments.push(comment._id);
      comment.photo = image._id;
      image.save();
      comment.save();
      res.json(image);
    });
  });
});

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
