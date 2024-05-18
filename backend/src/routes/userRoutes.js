const path = require("path");
const express = require("express");
const auth_mw = require("../middleware/auth_mw");
const {
  signup,
  Login,
  logStatus,
  userInfo,
  updateCredential,
  changePassword,
  logout,
  getAllHotels,
  getSingleUser,
  searchUser,
} = require("../controller/userController");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", Login);
router.post("/logout", logout);
router.get("/get-log-status", logStatus);
router.get("/get-current-user", auth_mw, userInfo);
router.put("/update-profile", auth_mw, updateCredential);
router.put("/change-password", auth_mw, changePassword);
router.get("/get-all-hotels", getAllHotels);
router.get("/get-single-user/:id?", getSingleUser);
router.get("/search-user/:key?", searchUser);

module.exports = router;
