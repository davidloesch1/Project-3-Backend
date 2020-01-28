

// module.exports = function(app) {
//     const fs = require('fs');
//     const path = require('path');
//     //multer allows for pictures on app
//     const multer = require('multer');

//     const storage = multer.diskStorage({
//         destination: function(req, file, cb) {
//             const uploadsDir = path.join(__dirname, '..', '..', 'public', 'uploads', `${Date.now()}`)
//             //use below for immediate return
//             fs.mkdirSync(uploadsDir)
//             cb(null, uploadsDir)
//         },
//         filename: function(req, file, cb) {
//             cb(null, file.originalname)
//         }
//     })

//     const upload = multer({ storage})
//     const controller = require('../Controller/images')

//     app.route()
//     .get(controller.index)
//     .post(upload.single("data"). controller.create)

//     app.route()
//     .get(controller.show)
//     //.put(controller.update)
//     .delete(controller.desroy)
// }

