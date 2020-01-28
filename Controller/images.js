// const Image = require('../Model/ImageSchema');

// exports.index = function(req, res) {
// Image.find({}, function ( e, image) {
//     if(e) res.send(e)
//     res.json(image)
// })
// }


// exports.show = function(req, res) {
    
// }


// exports.create = function(req, res) {
    
// }

// exports.update = function(req, res) {
    
// }

// exports.destroy = function(req, res) {
    
// }


const express = require("express");
const router = express.Router();

const Image = require("../Model/ImageSchema");

router.get("/", (req, res) => {
    Image.find({}).then(images => res.json(images));
});

router.post("/", (req, res) => {
    Image.create(req.body)
    .then(newImage => res.json(newImage));
});

router.put("/:title", (req, res) => {
    Image.findOneAndUpdate({title: req.params.title}, req.body, {
        new: true}).then(image = res.json(image));
});

router.delete("/:title", (req, res) => {
    Image.findOneAndDelete({title: req.params.title}).then(image =>
        res.json(image))
})
module.exports = router;