const multer = require("multer");
const blogStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './src/public/images/Blogs');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '__' + file.originalname);
    },
  });
  
  const hotelStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './src/public/images/Hotels');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '__' + file.originalname);
    },
  });
  
module.exports.uploadBlog = multer({ blogStorage });
module.exports.uploadHotel = multer({ hotelStorage });