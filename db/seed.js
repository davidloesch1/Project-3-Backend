//connects to db
const mongoose = require("./connection");

//connects to the Models folder to grab the schema to mongodb
const Comments = require("../Model/CommentsSchema");
const Images = require("../Model/ImageSchema");

Images.deleteMany({}).then(() => {
  console.log("ALL IMAGES DELETED");
  Comments.deleteMany({}).then(() => {
    console.log("ALL COMMENTS DELETED");
    //CREATE A IMAGE FILE BELOW
    Images.create({
      title: "The love of my life",
      photofile: "https://images-na.ssl-images-amazon.com/images/I/41nYEMfvoEL._SX352_BO1,204,203,200_.jpg",
      genre: {cat: 'sky'},
      votes: 0
    }).then(pic1 => {
      Comments.create({
        title: "Picture looks good",
        parent: {com: 'lookin'},
        photo: pic1.id,
        subcomments: pic1.comments
      }).then(com1 => {
        pic1.comments.push(com1);
        pic1.save();
        console.log("CREATED PHOTO UPLOAD AND COMMENT");
      });
    });
  });
});