const {
    searchDestinations,
  } = require("../controller/userController.js");
  const { uploadBlog, uploadDestination } = require("../helpers/multer.js");
  const path = require("path");
  const express = require("express");
  const router = express.Router();
  
  router.get("/destination/get/:key?", searchDestinations);
  
  module.exports = router;
  