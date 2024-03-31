const Blogs = require("../model/blogs_db");
module.exports.getAllBlogs = async (req, res) => {
  try {
    const blog = await Blogs.find({});
    res.json(blog), status(200);
  } catch (err) {
    console.log(err.message);
  }
};
module.exports.postBlog = async (req, res) => {
  try {
    const { Blog_Title, Blog_Description } = req.body;
    const Blog_Image = req.file.filename;
    const blog = {
      BlogTitle: Blog_Title,
      BlogImage: Blog_Image,
      BlogDescription: Blog_Description,
    };
    await Blogs.create(blog);
    res.status(200).send("created");
  } catch (err) {
    console.log(err.message);
  }
};
module.exports.updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const { newTitle, newDescription } = req.body;
    const newImage = req.file.filename;
    const blog = await Blogs.findById(id);
    blog.BlogTitle = newTitle;
    blog.BlogImage = newImage;
    blog.BlogDescription = newDescription;
    blog.BlogDate = newDate;
    await blog.save();
    res.send("updated").status(200);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blogs.findByIdAndDelete(id);
    res.send("deleted").status(200);
  } catch (err) {
    console.log(err.message);
  }
};
