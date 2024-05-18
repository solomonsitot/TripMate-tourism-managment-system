const mongoose = require("mongoose");
const Users = require("./user_db");
const Rooms = require("./room_db");
const reservationSchema = new mongoose.Schema({
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Rooms",
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },

  from: {
    type: Date,
    required: true,
  },
  to: {
    type: Date,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  quantity: {
    type: String,
  },
});
const Reservations = new mongoose.model("reservation", reservationSchema);
module.exports = Reservations;
