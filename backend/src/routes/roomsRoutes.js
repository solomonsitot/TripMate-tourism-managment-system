const path = require("path");
const express = require("express");
const auth_mw = require("../middleware/auth_mw");

const {
  getAllRooms,
  getMyRooms,
  createRooms,
  updateRoom,
  deleteRoom,
  searchRoom,
  getSingleRoom,
  rateRoom,
} = require("../controller/roomController");
const { upload } = require("../middleware/multer");
const router = express.Router();

router.get("/get-all", auth_mw, getAllRooms);
router.get("/get-single", getSingleRoom);

router.get("/search/:key?", auth_mw, searchRoom);
router.get("/get-my-rooms", auth_mw, getMyRooms);
// router.post("/create-new", upload.single("image"), auth_mw, createRooms);
router.post("/create-new", auth_mw, createRooms);
// router.put("/update", upload.single("image"), auth_mw, updateRoom);
router.put("/update/:id?", auth_mw, updateRoom);
router.post("/rate-room/:id?", auth_mw, rateRoom);
router.delete("/delete/:id?", auth_mw, deleteRoom);

module.exports = router;
