const mongoose = require("mongoose");
const Users = require("./user_db");
const tourSchema = new mongoose.Schema({
  agent: {
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
  total_space: {
    type: Number,
    required: true,
  },
  space_left: {
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
const Tours = new mongoose.model("tour", tourSchema);
module.exports = Tours;
