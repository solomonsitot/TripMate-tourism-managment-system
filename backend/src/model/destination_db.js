const mongoose = require("mongoose");
const DBconnection = require("../config/db_con");
const DestinationSchema = new mongoose.Schema({
  DestName: {
    type: String,
    required: true,
  },
  DestImage: {
    type: String,
    required: false,
  },
  DestDescription: {
    type: String,
    required: true,
  },
});
const Destinations = new mongoose.model("Destination", DestinationSchema);
module.exports = Destinations;
