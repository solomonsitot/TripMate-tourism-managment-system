const Blogs = require("../model/blogs_db");
const Destinations = require("../model/destination_db");
module.exports.getAllBlogs = async (req, res) => {
  try {
    const blog = await Blogs.find({});
    res.json(blog).status(200);
  } catch (err) {
    console.log(err.message);
  }
};
module.exports.postBlog = async (req, res) => {
  try {
    const { Blog_Title, Blog_Description, Blog_Time } = req.body;
    const Blog_Image = req.file.filename;
    const blog = {
      BlogTitle: Blog_Title,
      BlogImage: Blog_Image,
      BlogDescription: Blog_Description,
      BlogDate: Blog_Time,
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

module.exports.getAllDestinations = async (req, res) => {
  try {
    const destination = await Destinations.find({});
    res.json(destination).status(200);
  } catch (err) {
    console.log(err.message);
  }
};

// module.exports.searchDestinations = async (req, res) => {
//   try {
//     const { key } = req.params;
//     const destination = await Destinations.find({
//       DestName: { $regex: new RegExp(key, "i") },
//     });
//     res.json(destination).status(200);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

module.exports.addDestination = async (req, res) => {
  try {
    const { Dest_Name, Dest_Description } = req.body;
    const Dest_Image = req.file.filename;
    const destination = {
      DestName: Dest_Name,
      DestImage: Dest_Image,
      DestDescription: Dest_Description,
    };
    await Destinations.create(destination);
    res.status(200).send("created");
  } catch (err) {
    console.log(err.message);
  }
};
