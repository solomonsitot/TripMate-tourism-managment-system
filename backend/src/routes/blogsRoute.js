const path = require("path");
const express = require("express");
const auth_mw = require("../middleware/auth_mw");
const {
  getAllBlogs,
  searchBlog,
  postBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
} = require("../controller/blogController");
const { upload } = require("../middleware/multer");
const router = express.Router();

router.get("/get-all", getAllBlogs);
router.get("/get-single/:id?", getSingleBlog);
router.get("/search/:key?", searchBlog);
router.post("/post-new", upload.single("image"), auth_mw, postBlog);
// router.post("/post-new", auth_mw, postBlog);
router.put("/update", upload.single("image"), auth_mw, updateBlog);
// router.put("/update/:id?", auth_mw, updateBlog);
router.delete("/delete/:id?", auth_mw, deleteBlog);

module.exports = router;
