const path = require("path");
const express = require("express");
const auth_mw = require("../middleware/auth_mw");

const {
  getAllPackages,
  getSinglePackage,
  searchPackage,
  getMyPackages,
  createPackage,
  updatePackage,
  deletePackage,
  ratePackage,
} = require("../controller/tourPackageController");
const router = express.Router();

router.get("/get-all", auth_mw, getAllPackages);
router.get("/get-single/:id?", getSinglePackage);

router.get("/search/:key?", auth_mw, searchPackage);
router.get("/get-my-tours", auth_mw, getMyPackages);
// router.post("/create-new", uploadHotel.single("image"), auth_mw, getMyPackages);
router.post("/create-new", auth_mw, createPackage);
// router.put("/update", uploadHotel.single("image"), auth_mw, updatePackage);
router.put("/update/:id?", auth_mw, updatePackage);
router.post("/rate-tours/:id?", auth_mw, ratePackage);
router.delete("/delete/:id?", auth_mw, deletePackage);

module.exports = router;
