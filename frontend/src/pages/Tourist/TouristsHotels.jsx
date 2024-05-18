import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import menu from "../../assets/menu.png";
import fourty from "../../assets/40 Spring.jpg";
import location from "../../assets/location.png";
import contact from "../../assets/Contact.png";
import search from "../../assets/search.png";
import comment from "../../assets/comment.png";
import star from "../../assets/star.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";
function TouristsHotels() {
  const [stat, setStatus] = useState(true);
  const [hotels, setHotels] = useState([]);
  const [key, setKey] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://tripmate-tourism-management.onrender.com/user/search-hotel/${key}`
      );
      setHotels(result.data);
      console.log(result);
      console.log(hotels);
    }
    fetchData();
  }, [key]);
  return (
    <div>
      <Nav
        href0="/"
        link1="Destinations"
        href1="/Discover"
        link2="Hotels"
        href2="/see-hotels"
        link3="Tours"
        href3="/Packages"
        link4="Blogs"
        href4="/see-blogs"
        setting={contact}
        menu={menu}
        stat={stat}
      />
      <div className="w-full text-center">
        <h1 className="text-center text-4xl font-semibold">All Hotels</h1>
        <div className="flex h-14 justify-center  mt-7">
          <img
            className="h-full pl-8 pr-2 self-center p-3 border-solid border-2 border-r-0 rounded-r-none border-green-950 rounded-2xl"
            src={search}
            alt=""
          />
          <input
            className="w-2/3 h-full self-center p-3 border-solid border-2 border-l-0 rounded-l-none border-green-950 rounded-2xl focus:outline-none"
            type="text"
            placeholder="search for articles . . . "
            onChange={(e) => {
              setKey(e.target.value);
            }}
          />
        </div>
      </div>
      {hotels.map((hotel, index) => (
        <div key={index} className=" my-4 w-11/12 mx-auto">
          <div className=" block lg:flex gap-8 w-full lg:w-9/12 mx-auto py-10">
            <img
              className="w-11/12 mx-auto lg:w-2/5 rounded-xl  py-5"
              src={hotel.profile_image}
              alt=""
            />
            <div className="w-5/6 mx-auto lg:w-3/5 rounded-xl">
              <h1 className="font-bold text-green-950 text-3xl m-2">
                {hotel.company_name}
              </h1>
              <div className="flex items-center ">
                <img className="p-2" src={location} alt="" />
                <p className=" text-green-700 ">{hotel.address}</p>
              </div>
              <div className="my-3 flex">
                <div className="h-1/6">
                  <img className="mb-12 mr-5" src={comment} alt="" />
                </div>
                <p className="w-4/5">{hotel.description}</p>
              </div>
              <p className="text-gray-700 font-bold mb-2">Great For</p>
              <div className="flex flex-wrap w-3/4 gap-4">
                <div className="bg-[#6B9773] p-2 flex  rounded-lg">
                  <img className="h-[25px]" src={star} alt="" />
                  <p>Entertainment</p>
                </div>
                <div className="bg-[#6B9773] p-2 flex rounded-lg">
                  <img className="h-[25px]" src={star} alt="" />
                  <p>sport</p>
                </div>
                <div className="bg-[#6B9773] p-2 flex rounded-lg">
                  <img className="h-[25px]" src={star} alt="" />
                  <p>Entertainment</p>
                </div>
                <div className="bg-[#6B9773] p-2 flex rounded-lg">
                  <img className="h-[25px]" src={star} alt="" />
                  <p> Activity</p>
                </div>
              </div>
              <button
                onClick={() => {
                  navigate(`detail/${hotel._id}`);
                }}
                className="bg-green-900 px-2 py-1 text-white mt-6 rounded-lg"
              >
                see Rooms {">>"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TouristsHotels;
