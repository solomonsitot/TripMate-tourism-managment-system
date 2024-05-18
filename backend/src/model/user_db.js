const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  description: {
    type: String,
  },
  profile_image: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/previews/013/042/571/non_2x/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg",
  },
  // images: {
  //   type: Array,
  // },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  verification_status: {
    type: String,
  },
  business_license: {
    type: String,
  },
  payment_detail: {
    acc_name: {
      type: String,
    },
    acc_number: {
      type: String,
    },
    bank: {
      type: String,
    },
    subaccount_id: {
      type: String,
    },
  },
});
const Users = new mongoose.model("user", userSchema);
module.exports = Users;
