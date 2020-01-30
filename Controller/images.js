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
      const res = {
        count: images.length,
        images: images.map(img => {
          return {
            title: img.title,
            genre: img.genre,
            votes: img.votes,
            _id: img._id,
            request: {
              type: "GET",
              url: "http://localhost:8080/api/images" + img._id
            }
          };
        })
      };
    });
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

//many not work
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

//update pic / may not working. 
router.put("/:picId", (req, res) => {
  let updatePic = req.body;
  let picId = req.params._id;
  Image.findOneAndUpdate({ _id: picId }, updatePic, { new: true }).then(() => {
      Image.find({}).then(img => res.json(img));
    }
  );
});





module.exports = router;

// const Image = require("../Model/ImageSchema");

// router.get("/", (req, res, next) => {
//   Image.find({}).then(images => res.json(images));
// });

// router.get("/:title", (req, res) => {
//   Image.find({ Title: req.params.Title }).then(images => res.json(images));
// });

// // const storage = multer.diskStorage({
// //   destination: "uploads/",
// //   filename: function(req, file, cb) {
// //     cb(
// //       null,
// //       //allows for changing of name of picture on upload
// //       //after fieldname is the same as after the imagename ---
// //       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
// //     );
// //   }
// // });

// // const uploadV = multer({
// //   storage: storage,
// //   //size of picture
// //   limits: { fileSize: 1000000 },
// //   fileFilter: function(req, file, cb) {
// // checkFileType(file, cb);
// //   }
// // }).single("myImage");

// //check file type
// function checkFileType(file, cb) {
//   //allowed ext
//   const filetypes = /jpeg|jpg|png|gif/;
//   //check ext
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   //check mime
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb("Error: Images Only!");
//   }
// }

// router.post('/', upload.single('pic'),(req, res, next) => {
// router.post("/upload", (req, res) => {
//   uploadV( req, res, err => {
//     res.json({
//       file: `uploads/${req.file.filename}`
//     });
//   });

// // router.get("/", (req, res) => {
// //   Image.find({}).then(images => res.json(images));
// //   //console.log(images);
// // });

// // router.show = function(req, res) {
// //   Image.findById(_id, function(e, image) {
// //     if (e) res.send(e);
// //     res.json(image);
// //   });
// // };

// // router.post = function(req, res) {
// //   const path = require("path");
// //   console.log(path);
// //   const remove = path.join(__dirname, "..", "..", "public");
// //   console.log(remove);
// //   const relativePath = req.file.path.replace(remove, "");
// //   console.log(relativePath);
// //   const newImage = new Image(req.body);
// //   console.log(newImage);
// //   newImage._id = req.params._id;
// //   newImage.path = relativePath;
// //   newImage.save(function(e, image) {
// //     if (e) res.send(e);
// //     res.json(image);
// //   });
// // };

// // router.show("/:_id", (req, res) => {
// //     Image.create(req.body)
// //     .then(newImage => res.json(newImage));
// // });

// // router.put("/:title", (req, res) => {
// //     Image.findOneAndUpdate({title: req.params.title}, req.body, {
// //         new: true}).then(image = res.json(image));
// // });

// // router.delete("/:title", (req, res) => {
// //     Image.findOneAndDelete({title: req.params.title}).then(image =>
// //         res.json(image))
// })
