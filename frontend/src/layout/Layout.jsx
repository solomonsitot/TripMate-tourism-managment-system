import React from "react";
import { Routes, Route } from "react-router-dom";

import TouristHome from "../pages/Tourist/TouristHome";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import AdminHome from "../pages/Admin/AdminHome";
import HotelManagerHome from "../pages/HotelManager/HotelManagerHome";
import ShopOwnerHome from "../pages/ShopOwner/ShopOwnerHome";
import TourGuideHome from "../pages/TourGuide/TourGuideHome";
import TouristBlogs from "../pages/Tourist/TouristBlogs";
import TouristsHotels from "../pages/Tourist/TouristsHotels";
import HotelDetail from "../pages/Tourist/HotelDetail";
import PaymentDone from "../pages/Tourist/PaymentDone";
import Reservation from "../pages/Tourist/Reservation";
import ThankYouPage from "../pages/Tourist/ThankYouPage";
import BlogPost from "../pages/Admin/BlogPost";
import DestinationPost from "../pages/Admin/DestinationPost";
import AdminUsers from "../pages/Admin/AdminUsers";
function Layout() {
  return (
    // <PaymentDone/>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/">
        <Route path="" element={<TouristHome />} />
        <Route path="see-blogs" element={<TouristBlogs />} />
        <Route path="see-hotels" element={<TouristsHotels />} />
        <Route path="see-hotels/detail/:id?" element={<HotelDetail />} />
        <Route
          path="see-hotels/detail/:id?/reserve/:rid?"
          element={<Reservation />}
        />
        <Route path="see-packages" element={<TouristHome />} />
        <Route path="see-shop" element={<TouristHome />} />
        <Route path="/thanks" element={<ThankYouPage />} />
      </Route>
      <Route path="/admin">
        <Route path="" element={<AdminHome />} />
        <Route path="blogs" element={<BlogPost />} />
        <Route path="destinations" element={<DestinationPost />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="see-agents" element={<TouristHome />} />
        <Route path="see-shops" element={<TouristHome />} />
      </Route>
      <Route path="/hotel">
        <Route path="" element={<HotelManagerHome />} />
        <Route path="manage-rooms" element={<TouristHome />} />
        <Route path="reservation-list" element={<TouristHome />} />
        <Route path="see-hotels" element={<TouristHome />} />
        <Route path="see-agents" element={<TouristHome />} />
        <Route path="see-shops" element={<TouristHome />} />
      </Route>
      <Route path="/shop">
        <Route path="" element={<ShopOwnerHome />} />
        <Route path="manage-rooms" element={<TouristHome />} />
        <Route path="reservation-list" element={<TouristHome />} />
        <Route path="see-hotels" element={<TouristHome />} />
        <Route path="see-agents" element={<TouristHome />} />
        <Route path="see-shops" element={<TouristHome />} />
      </Route>
      <Route path="/agent">
        <Route path="" element={<TourGuideHome />} />
        <Route path="manage-rooms" element={<TouristHome />} />
        <Route path="reservation-list" element={<TouristHome />} />
        <Route path="see-hotels" element={<TouristHome />} />
        <Route path="see-agents" element={<TouristHome />} />
        <Route path="see-shops" element={<TouristHome />} />
      </Route>
    </Routes>
  );
}

export default Layout;
