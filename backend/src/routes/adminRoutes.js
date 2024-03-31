const {
  getAllBlogs,
  postBlog,
  updateBlog,
  deleteBlog,
} = require("../controller/admincontroller.js");
const { uploadBlog } = require("../helpers/multer.js");
const path = require("path");
const express = require("express");
const router = express.Router();

router.post("/blogs/post", uploadBlog.single("image"), postBlog);
router.get("/blogs/seeAll", getAllBlogs);
router.put("/blogs/update/:id", uploadBlog.single("image"), updateBlog);
router.delete("/blogs/delete/:id", deleteBlog);

module.exports = router;
