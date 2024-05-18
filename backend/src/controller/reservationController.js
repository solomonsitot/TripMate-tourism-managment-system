const Reservations = require("../model/reservation_db");
const Rooms = require("../model/room_db");
module.exports.getAllReservations = async (req, res) => {
  try {
    const { role } = req.user;
    if (role != "admin") {
      return res.json({ message: "you are not allowed to see reservations" });
    }
    const reservations = await Reservations.find({});
    res.json({ message: reservations }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.getMyReservations = async (req, res) => {
  try {
    const { role, id } = req.user;
    if (role != "hotel manager") {
      return res.json({ message: "you are not allowed to see reservations" });
    }
    const reservations = await Reservations.find({ hotel: id });
    res.json({ message: reservations }).status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
module.exports.reserveRoom = async (req, res) => {
  try {
    const { role, id } = req.user;
    const { rid, quantity, from, to } = req.body;
    if (role != "tourist") {
      return res.json({ message: "you are not allowed to reserve room" });
    }
    const room = await Rooms.findById(rid);
    if (!room) {
      return res.json({ message: "room does not exist" });
    }
    if (room.available <= quantity) {
      return res.json({ message: "sorry!!! we don't have this much room" });
    }
    const reservation = {
      hotel: room.owner,
      room: rid,
      customer: id,
      from: from,
      to: to,
      quantity: quantity,
    };
    await Reservations.create(reservation);
    room.available -= quantity;
    await room.save();
    res
      .json({ message: " reserved successfully", body: reservation })
      .status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
