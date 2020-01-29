

const express = require("express");
const router = express.Router();
const multer = require("multer");
//const upload = multer({dest: 'uploads/'});

const Image = require("../Model/ImageSchema");

router.get("/", (req, res, next) => {
  Image.find({}).then(images => res.json(images));
});

router.get("/:title", (req, res) => {
  Image.find({ Title: req.params.Title }).then(images => res.json(images));
});

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function(req, file, cb) {
    cb(
      null,
      //allows for changing of name of picture on upload
      //after fieldname is the same as after the imagename ---
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

const uploadV = multer({
  storage: storage, 
  //size of picture
  limits: { fileSize: 1000000 },
  fileFilter: function(req, file, cb) {
checkFileType(file, cb);
  }
}).single("myImage");


//check file type
function checkFileType(file, cb) {
  //allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  //check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  //check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}




// router.post('/', upload.single('pic'),(req, res, next) => {
router.post("/upload", (req, res) => {
  uploadV( req, res, err => {
    res.json({
      file: `uploads/${req.file.filename}`
    });
  });
  

  

// router.get("/", (req, res) => {
//   Image.find({}).then(images => res.json(images));
//   //console.log(images);
// });

// router.show = function(req, res) {
//   Image.findById(_id, function(e, image) {
//     if (e) res.send(e);
//     res.json(image);
//   });
// };

// router.post = function(req, res) {
//   const path = require("path");
//   console.log(path);
//   const remove = path.join(__dirname, "..", "..", "public");
//   console.log(remove);
//   const relativePath = req.file.path.replace(remove, "");
//   console.log(relativePath);
//   const newImage = new Image(req.body);
//   console.log(newImage);
//   newImage._id = req.params._id;
//   newImage.path = relativePath;
//   newImage.save(function(e, image) {
//     if (e) res.send(e);
//     res.json(image);
//   });
// };

// router.show("/:_id", (req, res) => {
//     Image.create(req.body)
//     .then(newImage => res.json(newImage));
// });

// router.put("/:title", (req, res) => {
//     Image.findOneAndUpdate({title: req.params.title}, req.body, {
//         new: true}).then(image = res.json(image));
// });

// router.delete("/:title", (req, res) => {
//     Image.findOneAndDelete({title: req.params.title}).then(image =>
//         res.json(image))
})
module.exports = router;
