const Tours = require("../model/tour_package_db");
const cloudinary = require("../utils/cloudinary");

module.exports.getAllPackages = async (req, res) => {
  try {
    const { role } = req.user;
    if (role != "tourist") {
      return res.json({ message: "you are not allowed to see packages" });
    }
    const tours = await Tours.find({});
    res.json({ message: tours }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports.searchPackage = async (req, res) => {
  try {
    const { role } = req.user;
    const { key } = req.params;
    if (role != "tourist") {
      return res.json({ message: "you are not allowed to see Tours" });
    }
    const tours = await Tours.find({
      name: { $regex: new RegExp(key, "i") },
    });
    res.json({ message: tours }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.getSinglePackage = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tours.findById(id);
    res.json({ message: tour }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.getMyPackages = async (req, res) => {
  try {
    const { role, id } = req.user;

    if (role != "tour agent") {
      return res.json({ message: "you are not allowed to see Tours" });
    }
    const tours = await Tours.find({ agent: id });
    res.json({ message: tours }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.createPackage = async (req, res) => {
  try {
    const { role, id } = req.user;
    const { name, price, total_space, description } = req.body;
    const fileUpload = await cloudinary.uploader.upload(req.file.path,{folder:'TripMate'});
    const image = fileUpload.secure_url;
    if (!name || !image || !price || !total_space || !description) {
      return res.json({ message: "all fields are required" }).status(400);
    }
    if (role != "tour agent") {
      return res.json({ message: "you are not allowed to create Tours" });
    }
    const tour = {
      agent: id,
      name: name,
      image: image,
      description: description,
      price: price,
      total_space: total_space,
      space_left: total_space,
    };
    await Tours.create(tour);
    res.json({ message: "tour created sucessfully", body: tour }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.updatePackage = async (req, res) => {
  try {
    const { role, id } = req.user;
    const pid = req.params.id;
    const { name, price, total_space, description } = req.body;
    const fileUpload = await cloudinary.uploader.upload(req.file.path);

    const image = fileUpload.secure_url;
    if (!name || !image || !price || !total_space || !description) {
      return res.json({ message: "all fields are required" }).satus(400);
    }
    if (role != "tour agent") {
      return res.json({ message: "you are not allowed to update Tours" });
    }
    const tour = await Tours.findById(pid);
    console.log(tour);
    if (tour.agent != id) {
      return res.json({ message: "you are only allowed to update your Tours" });
    }
    tour.name = name || tour.name;
    tour.image = image || tour.image;
    tour.description = description || tour.description;
    tour.price = price || tour.price;
    tour.total_space = total_space || tour.total_space;
    await tour.save();
    res.json({ message: "tour updated successfully", body: tour }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports.deletePackage = async (req, res) => {
  try {
    const { role, id } = req.user;
    const pid = req.params.id;
    if (role != "tour agent") {
      return res.json({ message: "you are not allowed to delete Tours" });
    }
    const tour = await Tours.findById(pid);
    if (tour.agent != id) {
      return res.json({ message: "you are only allowed to delete your Tours" });
    }
    // if (tour.space_left <= 0) return res.send("all Tours are reserved");
    await tour.deleteOne();
    res.json({ message: "tour deleted successfully" }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.ratePackage = async (req, res) => {
  try {
    const { role } = req.user;
    const { rate } = req.body;
    const { id } = req.params;
    if (role != "tourist") {
      return res.json({ message: "you are not allowed to rate Tours" });
    }
    const tour = await Tours.findById(id);
    if (!tour) {
      return res.json({ message: "tour does not exist" });
    }
    tour.rate.total += rate;
    tour.rate.value = tour.rate.total / (tour.rate.rater_number + 1);
    tour.rate.rater_number += 1;
    await tour.save();
    return res.json({ body: tour }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
