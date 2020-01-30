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
    .then(images => {
          res.json(images);
          })
});


router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  Image.findById(id)
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
     
      title: req.body.title,
      genre: req.body.genre,
      path: req.file.path,
      votes: 0
    })
  ).then(entry => res.json(entry));

});

//works
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Image.findOneAndDelete({_id: id})
    .then(d => res.json(d));
    });


//works 
router.put("/:picId", (req, res) => {
  // let updatePic = req.body;
  let picId = req.params.picId;
  Image.find({ _id: picId }).then(image => {
     image[0].votes = image[0].votes + 1
     image[0].save()
     res.json(image);
    }
  );
});





module.exports = router;

