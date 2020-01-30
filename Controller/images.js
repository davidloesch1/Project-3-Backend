const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif" ||
    file.mimtype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("filetype not supported"), false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10
  },
  fileFilter: fileFilter
});

const Image = require("../Model/ImageSchema");

router.get("/", (req, res, next) => {
  Image.find()
    .select("title genre path _id")
    .exec()
    .then(images => {
    //  const res = {
        // count: images.length,
        // images: images.map(img => {
          // return {
          //   title: img.title,
          //   genre: img.genre,
          //   votes: img.votes,
          //   _id: img._id,
          //   request: {
          //     type: "GET",
          //     url: "http://localhost:8080/api/images" + img._id
          //   }
          res.json(images);
          })
});


router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  Image.findById(id)
    .select("title genre path _id")
    .exec()
    .then(image => {
      console.log("from database", image);
      if (image) {
        res.status(200).json({
          image: image,
          request: {
            type: "GET",
            url: "http://localhost:8080/api/images"
          }
        });
      } else {
        res;
      }
    });
});

router.post("/", upload.single("path"), (req, res, next) => {
  console.log(req.file);
  console.log(req.body);
  Image.create(
    new Image({
      // _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      genre: req.body.genre,
      path: req.file.path,
      votes: 0
    })
  ).then(entry => res.json(entry));
  //   const image = new Image({
  //     // _id: new mongoose.Types.ObjectId(),
  //     title: req.body.title,
  //     genre: req.body.genre,
  //     path: req.file.path
  //   });
  //   console.log(image);
});

//works
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Image.findById(id)
  .select("title genre path _id")
    .exec()
    .then(d => {
      console.log("id states: ", d);
      if (d) {
        res.status(200).json({
          d: d,
          request: {
            type: "DELETE",
            url: "http://localhost:8080/api/images"
          }
        });
      } else {
        res;
      }
    });
});

//works 
router.put("/:picId", (req, res) => {
  let updatePic = req.body;
  let picId = req.params._id;
  Image.findOneAndUpdate({ _id: picId }, updatePic, { new: true }).then(() => {
      Image.find({}).then(img => res.json(img));
    }
  );
});





module.exports = router;

