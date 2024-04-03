require("dotenv").config();
const AdminRoutes = require("./src/routes/adminRoutes");
const HotelsRoutes = require("./src/routes/hotelsRoutes");
const ShopsRoutes = require("./src/routes/shopsRoutes");
const TourGuidesRoutes = require("./src/routes/tourGuideRoutes");
const UsersRoutes = require("./src/routes/userRoutes");
const cors = require("cors");
const path = require("path");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/Blogs",
  express.static(path.join(__dirname, "src", "public", "images", "Blogs"))
);
app.use(
  "/Hotels",
  express.static(path.join(__dirname, "src", "public", "images", "Hotels"))
);
app.use(
  "/Destinations",
  express.static(
    path.join(__dirname, "src", "public", "images", "Destinations")
  )
);
app.use("/Admin", AdminRoutes);
// app.use("/Hotels", HotelsRoutes);
app.use("/Users", UsersRoutes);
// app.use("/TourGuides", TourGuidesRoutes);
// app.use("/Shops", ShopsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`running on port ${port}`);
});
