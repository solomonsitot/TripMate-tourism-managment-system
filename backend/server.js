require("dotenv").config();
const DBconnection = require("./src/config/db_con");
const userRoute = require("./src/routes/userRoutes");
const blogRoute = require("./src/routes/blogsRoute");
const destinationRoute = require("./src/routes/destinationRoutes");
const roomRoute = require("./src/routes/roomsRoutes");
const reservationRoute = require("./src/routes/reservationsRoute");
const tourPackageRoute = require("./src/routes/tourPackageRoute");

const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const express = require("express");
const app = express();
app.use(cookieParser());
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
app.use("/user", userRoute);
app.use("/blogs", blogRoute);
app.use("/destinations", destinationRoute);
app.use("/rooms", roomRoute);
app.use("/reservation", reservationRoute);
app.use("/tours", tourPackageRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`running on port ${port}`);
});
