require("dotenv").config();
const { Chapa } = require("chapa-nodejs");
const chapa = new Chapa({
  secretKey: process.env.CHAPA_SECRET_KEY,
});
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Blogs = require("../model/blogs_db");
const Destinations = require("../model/destination_db");
const cloudinary = require("../utils/cloudinary");
const Users = require("../model/user_db");
module.exports.signup = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      re_password,
      role,
      acc_name,
      acc_number,
      bank,
    } = req.body;
    if (!name || !email || !password || !re_password || !role) {
      return res.status(400).json({ message: "all fields are required" });
    }
    if (password != re_password) {
      return res.status(400).json({ message: "password mismatch" });
    }
    let user = await Users.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }
    let bank_code;
    if (bank === "Awash Bank") {
      bank_code = "80a510ea-7497-4499-8b49-ac13a3ab7d07";
    } else if (bank === "Bank of Abyssinia") {
      bank_code = "32735b19-bb36-4cd7-b226-fb7451cd98f0";
    } else if (bank === "Commercial Bank of Ethiopia (CBE)") {
      bank_code = "96e41186-29ba-4e30-b013-2ca36d7e7025";
    } else if (bank === "Dashen Bank") {
      bank_code = "809814c1-ab98-4750-a5b8-3be5db7bd5f5";
    } else if (bank === "telebirr") {
      bank_code = "853d0598-9c01-41ab-ac99-48eab4da1513";
    } else if (bank === "M-Pesa") {
      bank_code = "953d0598-4e01-41ab-ac93-t9eab4da1u13";
    }
    if (role === "tourist") {
      user = new Users(_.pick(req.body, ["name", "email", "password", "role"]));
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    } else {
      const response = await chapa.createSubaccount({
        business_name: name,
        account_name: acc_name,
        bank_code: bank_code,
        account_number: acc_number,
        split_type: "flat",
        split_value: 25,
      });
      user = new Users({
        name: name,
        email: email,
        password: password,
        role: role,
        payment_detail: {
          acc_name: acc_name,
          acc_number: acc_number,
          bank: bank,
          subaccount_id: response.data.subaccount_id,
        },
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
    await user.save();

    const token = await jwt.sign(
      { id: user._id, role: user.role },
      process.env.PRIVATE_SECERET_TOKEN
    );
    res
      .cookie("token", token, {
        path: "/",
        httpOnly: true,
        // expires: new Date(Date.now()) + 1000 * 86400,
        sameSite: "none",
        secure: true,
      })
      .json({ message: "user signup successfully", body: user })
      .status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "invalid email or password" });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(400).json({ message: "invalid email or password" });
    }
    const token = await jwt.sign(
      { id: user._id, role: user.role },
      process.env.PRIVATE_SECERET_TOKEN
    );
    res
      .cookie("token", token, {
        path: "/",
        httpOnly: true,
        // expires: new Date(Date.now()) + 1000 * 86400,
        sameSite: "none",
        secure: true,
      })
      .json({ message: "loggedin successfully", body: user })
      .status(200);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports.logout = async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0), // Setting expiration date to past
    sameSite: "none",
    secure: true,
  });
  res
    .json({
      message: "logged out successfully",
    })
    .status(200);
};

module.exports.logStatus = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ message: false });
    }
    const valid = await jwt.verify(token, process.env.PRIVATE_SECERET_TOKEN);
    if (valid) {
      return res.json({ message: true });
    } else return res.json({ message: false });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports.userInfo = async (req, res) => {
  try {
    const id = req.user.id;
    if (!id) {
      return res.json({ message: "not authorized" });
    }
    const user = await Users.findById(id);
    if (!user) {
      return res.json({ message: "user does not exist" });
    }
    return res.json({ message: user });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports.updateCredential = async (req, res) => {
  try {
    const { id } = req.user;
    const { name } = req.body;
    if (!name) {
      res.json({ message: "all fields are required" });
    }
    if (!id) {
      return res.json({ message: "not authorized" });
    }
    const user = await Users.findById(id);
    if (!user) {
      return res.json({ message: "user does not exist" });
    }
    user.name = name || user.name;
    await user.save();
    return res.json({ message: user });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports.changePassword = async (req, res) => {
  try {
    const id = req.user.id;
    const { old_password, re_password, new_password } = req.body;
    if (!old_password || !re_password || !new_password) {
      res.json({ message: "all fields are required" });
    }
    if (!id) {
      return res.json({ message: "not authorized" });
    }
    const user = await Users.findById(id);
    if (!user) {
      return res.json({ message: "user does not exist" });
    }
    if (new_password != re_password) {
      return res.json({ message: " password mismatch" });
    }
    const validate = await bcrypt.compare(old_password, user.password);
    if (!validate) {
      return res.json({ message: "old password incorrect" });
    }
    user.password = new_password;
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    return res.json({ message: user });
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports.getAllHotels = async (req, res) => {
  const hotels = await Users.find({ role: "hotel manager" });
  res.json(hotels);
};
module.exports.getSingleUser = async (req, res) => {
  const id = req.params.id;
  const hotels = await Users.findById(id);
  res.json(hotels);
};
module.exports.searchUser = async (req, res) => {
  const { key } = req.params;
  const hotels = await Users.find({
    $and: [
      { role: "hotel manager" },
      { name: { $regex: new RegExp(key, "i") } },
    ],
  });
  res.json(hotels);
};
