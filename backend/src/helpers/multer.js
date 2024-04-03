const multer = require("multer");
const blogStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/public/images/Blogs");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "__" + file.originalname);
  },
});

const hotelStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/public/images/Hotels");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "__" + file.originalname);
  },
});
const destinationStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/public/images/Destinations");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "__" + file.originalname);
  },
});

module.exports.uploadBlog = multer({ storage: blogStorage });
module.exports.uploadHotel = multer({ storage: hotelStorage });
module.exports.uploadDestination = multer({ storage: destinationStorage });
