const path = require("path");
const express = require("express");
const auth_mw = require("../middleware/auth_mw");
const {
  getAllReservations,
  getMyReservations,
  reserveRoom,
} = require("../controller/reservationController");
const { request, verify } = require("../helpers/transaction");
const { chapaPayment } = require("../controller/paymentController");
const router = express.Router();

router.get("/get-all", auth_mw, getAllReservations);
router.get("/get-my-reservation", auth_mw, getMyReservations);
// router.post("/reserve-room", auth_mw,request,chapaPayment,verify);
router.post("/reserve-room", auth_mw, request, chapaPayment);

module.exports = router;
