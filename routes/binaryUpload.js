
//module.exports = app;
// module.exports = function(app) {
    //access file system in node
    // const fs = require('fs');
    // //path to pic
    // const path = require('path');
    // //multer allows for pictures on app
    // //library access for multi file uploads
    // const multer = require('multer');

//store files on disk:
    // const storage = multer.diskStorage({
    //     //location area for pic
    //     destination: function(req, file, cb) {
    //         const uploadsDir = path.join(__dirname, '.', '.', 'public', 'uploads', `${Date.now()}`)
    //         //use below for immediate return
    //         fs.mkdirSync(uploadsDir)
    //         cb(null, uploadsDir)
    //     },
    //     filename: function(req, file, cb) {
    //         cb(null, file.originalname)
    //     }
    // })

    // const upload = multer({ storage})
    // const controller = require('../Controller/images')

    //   app.route()
      //.get(controller.index)
     //'data' is the key for binary file
    //   .post(upload.single("data"). controller.create)

    //  app.route()
    //  .get(controller.show)
    // //.put(controller.update)
    //  .delete(controller.destroy)

//}
// module.exports = app;

