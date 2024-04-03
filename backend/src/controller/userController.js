const Blogs = require("../model/blogs_db");
const Destinations = require("../model/destination_db");

module.exports.searchDestinations = async (req, res) => {
  try {
    const { key } = req.params;
    const destination = await Destinations.find({
      DestName: { $regex: new RegExp(key, "i") },
    });
    res.json(destination).status(200);
  } catch (err) {
    console.log(err.message);
  }
};
