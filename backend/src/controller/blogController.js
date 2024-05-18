const Blogs = require("../model/blogs_db");
const cloudinary = require("../utils/cloudinary");

module.exports.getAllBlogs = async (req, res) => {
  try {
    const blog = await Blogs.find({});
    res.json(blog).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blogs.findById(id);
    res.json(blog).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.searchBlog = async (req, res) => {
  try {
    const { key } = req.params;
    const blog = await Blogs.find({
      BlogTitle: { $regex: new RegExp(key, "i") },
    });
    res.json(blog).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.postBlog = async (req, res) => {
  try {
    const fileUpload = await cloudinary.uploader.upload(req.files.path);
    const { role } = req.user;
    const { Blog_Title, Blog_Description, Blog_Time } = req.body;
    const Blog_Image = fileUpload.secure_url;
    if (!Blog_Title || !Blog_Description || !Blog_Time || !Blog_Image) {
      return res.json({ message: "all fields are required" });
    }
    if (role != "admin") {
      return res.json({ message: "you are not allowed to post blog" });
    }
    const blog = {
      BlogTitle: Blog_Title,
      BlogImage: Blog_Image,
      BlogDescription: Blog_Description,
      BlogDate: Blog_Time,
    };
    await Blogs.create(blog);
    res.json({ message: "blog posted sucessfully", body: blog }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.updateBlog = async (req, res) => {
  try {
    const { role } = req.user;
    const id = req.params.id;
    const { newTitle, newDescription } = req.body;
    const fileUpload = await cloudinary.uploader.upload(req.file.path);
    const newImage = fileUpload.secure_url;
    if (!newTitle || !newDescription || !id || !newImage) {
      return res.json({ message: "all fields are required" });
    }
    if (role != "admin") {
      return res.json({ message: "you are not allowed to update blog" });
    }
    const blog = await Blogs.findById(id);
    blog.BlogTitle = newTitle || blog.BlogTitle;
    blog.BlogImage = newImage;
    blog.BlogDescription = newDescription || blog.BlogDescription;
    // blog.BlogDate = newDate;
    await blog.save();
    return res
      .json({ message: "blog updated sucessfully", body: blog })
      .status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const { role } = req.user;
    const id = req.params.id;
    if (!id) {
      return res.json({ message: "id is not provided" });
    }
    if (role != "admin") {
      return res.json({ message: "you are not allowed to delete blog" });
    }
    const blog = await Blogs.findByIdAndDelete(id);
    return res.json({ message: "blog deleted sucessfully" }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
