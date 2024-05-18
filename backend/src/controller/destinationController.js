const Destinations = require("../model/destination_db");
const cloudinary = require("../utils/cloudinary");

module.exports.getAllDestinations = async (req, res) => {
  try {
    const destination = await Destinations.find({});
    res.json({ message: destination }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.searchDestinations = async (req, res) => {
  try {
    const { key } = req.params;
    const destination = await Destinations.find({
      DestName: { $regex: new RegExp(key, "i") },
    });
    res.json(destination).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports.addDestination = async (req, res) => {
  try {
    const { role } = req.user;
    const { Dest_Name, Dest_Description } = req.body;
    const fileUpload = await cloudinary.uploader.upload(req.file.path);
    const Dest_Image = fileUpload.secure_url;
    if (!Dest_Name || !Dest_Description) {
      return res.json({ message: "all fields are required" }).status(400);
    }
    if (role != "admin") {
      return res
        .json({ message: "you are not allowed to add destination" })
        .status(400);
    }
    const destination = {
      DestName: Dest_Name,
      DestImage: Dest_Image,
      DestDescription: Dest_Description,
    };
    await Destinations.create(destination);
    res
      .json({ message: "destination added sucessfully", body: destination })
      .status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.updateDestination = async (req, res) => {
  try {
    const { role } = req.user;
    const id = req.params.id;
    const { newDestName, newDestDescription } = req.body;
    const fileUpload = await cloudinary.uploader.upload(req.file.path);

    const newDestImage = fileUpload.secure_url;
    if (!newDestName || !newDestDescription || !id || !newDestImage) {
      return res.json({ message: "all fields are required" }).status(400);
    }
    if (role != "admin") {
      return res
        .json({ message: "you are not allowed to update destination" })
        .status(400);
    }
    const destination = await Destinations.findById(id);
    destination.DestName = newDestName || destination.DestName;
    destination.DestImage = newDestImage;
    destination.DestDescription =
      newDestDescription || destination.DestDescription;
    await destination.save();
    return res
      .json({ message: "destination updated sucessfully", body: destination })
      .status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports.deleteDestination = async (req, res) => {
  try {
    const { role } = req.user;
    const id = req.params.id;
    if (!id) {
      return res.json({ message: "id is not provided" }).status(400);
    }
    if (role != "admin") {
      return res
        .json({ message: "you are not allowed to delete destination" })
        .status(400);
    }
    const destination = await Destinations.findByIdAndDelete(id);
    return res.json({ message: "destination deleted sucessfully" }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
