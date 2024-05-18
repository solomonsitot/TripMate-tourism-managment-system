const multer = require("multer");
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null,file.originalname);
  },
});


module.exports.upload = multer({ storage: storage });

