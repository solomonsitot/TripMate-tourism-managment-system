const mongoose = require("mongoose");
const Users = require("./user_db");
const roomSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
    //   default:'',
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  available: {
    type: Number,
    required: true,
  },
  rate: {
    value: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
    rater_number: {
      type: Number,
      default: 0,
    },
  },
});
const Rooms = new mongoose.model("room", roomSchema);
module.exports = Rooms;
