const mongoose = require("mongoose");
const DBconnection = require('../config/db_con')
const BlogSchema = new mongoose.Schema({
  BlogTitle: {
    type: String,
    required: true,
  },
  // BlogImage: {
  // type: String,
  // required: true,
  //},
  BlogDescription: {
    type: String,
    required: true,
  },
  // BlogDate: {
  //   type: String,
  //   required: true,
  // },
});
const Blogs = new mongoose.model("Blog", BlogSchema);
module.exports = Blogs;
