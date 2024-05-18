const Reservations = require("../model/reservation_db");
const Rooms = require("../model/room_db");
module.exports.request = async (req, res, next) => {
  try {
    const { role, id } = req.user;
    const { rid, quantity, from, to, first_name, last_name, email } = req.body;
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
      status: "pending",
    };
    await Reservations.create(reservation);
    const info = {
      id: room.owner,
      first_name: first_name,
      last_name: last_name,
      email: email,
      quantity: quantity,
      rid: rid,
    };
    console.log(info)
    req.info = info;
    console.log(req.info)
    next();
  } catch (ex) {
    res.json({ message: ex.message });
  }
};
module.exports.verify = async (req, res, next) => {
  try {
    const { status, quantity, rid } = req.payment;
    if (status != "success") {
      return res.json({ message: "unable to perform try again please" });
    }
    const room = await Rooms.findById(rid);
    room.available -= quantity;
    await room.save();
    res
      .json({
        message: " reservation completed successfully",
        body: reservation,
      })
      .status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};
