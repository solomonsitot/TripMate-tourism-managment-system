const path = require("path");
const express = require("express");
const auth_mw = require("../middleware/auth_mw");
const {
  getAllDestinations,
  searchDestinations,
  addDestination,
  updateDestination,
  deleteDestination,
} = require("../controller/destinationController");
const { upload } = require("../middleware/multer");
const router = express.Router();

router.get("/get-all", getAllDestinations);
router.get("/search/:key?", searchDestinations);
router.post("/add", upload.single("image"), auth_mw, addDestination);
// router.post("/add", auth_mw, addDestination);
// router.put("/update", upload.single("image"), auth_mw, updateDestination);
router.put("/update/:id", auth_mw, updateDestination);
router.delete("/delete/:id?", auth_mw, deleteDestination);

module.exports = router;
