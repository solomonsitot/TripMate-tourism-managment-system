const mongoose = require("mongoose");
const DBconnection = require("../config/db_con");
const BlogSchema = new mongoose.Schema({
  BlogTitle: {
    type: String,
    required: true,
  },
  BlogImage: {
    type: String,
    required: false,
  },
  BlogDescription: {
    type: String,
    required: true,
  },
  BlogDate: {
    type: String,
    required: false,
  },
});
const Blogs = new mongoose.model("blog", BlogSchema);
module.exports = Blogs;
