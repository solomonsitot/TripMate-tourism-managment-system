const Rooms = require("../model/room_db");
const cloudinary = require("../utils/cloudinary");

module.exports.getAllRooms = async (req, res) => {
  try {
    const { role } = req.user;
    if (role != "tourist") {
      return res.json({ message: "you are not allowed to see rooms" });
    }
    const rooms = await Rooms.find({});
    res.json({ message: rooms }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports.searchRoom = async (req, res) => {
  try {
    const { role } = req.user;
    const { key } = req.params;
    if (role != "tourist") {
      return res.json({ message: "you are not allowed to see rooms" });
    }
    const rooms = await Rooms.find({
      name: { $regex: new RegExp(key, "i") },
    });
    res.json({ message: rooms }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.getSingleRoom = async (req, res) => {
  try {
    const { id } = req.body;
    const room = await Rooms.findById(id);
    res.json({ message: room }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.getMyRooms = async (req, res) => {
  try {
    const { role, id } = req.user;

    if (role != "hotel manager") {
      return res.json({ message: "you are not allowed to see rooms" });
    }
    const rooms = await Rooms.find({ owner: id });
    res.json({ message: rooms }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.createRooms = async (req, res) => {
  try {
    const { role, id } = req.user;
    const { name, price, amount, description } = req.body;
  //  const fileUpload = await cloudinary.uploader.upload(req.file.path)
    // const image = fileUpload.secure_url;
    // if (!name || !image || !price || !amount || !description) {
    //   return res.json({ message: "all fields are required" }).satus(400);
    // }
    if (role != "hotel manager") {
      return res.json({ message: "you are not allowed to create rooms" });
    }
    const room = {
      owner: id,
      name: name,
        // image: image,
      description: description,
      price: price,
      amount: amount,
      available: amount,
    };
    await Rooms.create(room);
    res.json({ message: "room created sucessfully", body: room }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.updateRoom = async (req, res) => {
  try {
    const { role, id } = req.user;
    console.log(id);
    const rid = req.params.id;
    const { name, price, amount, description } = req.body;
    const fileUpload = await cloudinary.uploader.upload(req.file.path)
    const image = fileUpload.secure_url;
    if (!name || !image || !price || !amount || !description) {
      return res.json({ message: "all fields are required" }).satus(400);
    }
    if (role != "hotel manager") {
      return res.json({ message: "you are not allowed to update rooms" });
    }
    const room = await Rooms.findById(rid);
    console.log(room);
    if (room.owner != id) {
      return res.json({ message: "you are only allowed to update your rooms" });
    }
    room.name = name || room.name;
    room.image = image || room.image;
    room.description = description || room.description;
    room.price = price || room.price;
    room.amount = amount || room.amount;
    await room.save();
    res.json({ message: "room updated sucessfully", body: room }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports.deleteRoom = async (req, res) => {
  try {
    const { role } = req.user;
    const rid = req.params.id;
    if (role != "hotel manager") {
      return res.json({ message: "you are not allowed to delete rooms" });
    }
    const room = await Rooms.findById(rid);
    if (room.owner != req.user.id) {
      return res.json({ message: "you are only allowed to update your rooms" });
    }
    if (room.available <= 0) return res.send("all rooms are reserved");
    await room.deleteOne();
    res.json({ message: "room deleted successfully" }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.rateRoom = async (req, res) => {
  try {
    const { role } = req.user;
    const { rate } = req.body;
    const { id } = req.params;
    if (role != "tourist") {
      return res.json({ message: "you are not allowed to rate rooms" });
    }
    const room = await Rooms.findById(id);
    if (!room) {
      return res.json({ message: "room does not exist" });
    }
    room.rate.total += rate;
    room.rate.value = room.rate.total / (room.rate.rater_number + 1);
    room.rate.rater_number += 1;
    await room.save();
    return res.json({ body: room }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
