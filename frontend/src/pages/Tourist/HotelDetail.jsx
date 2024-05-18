import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import springs from "../../assets/40 Spring.jpg";
import axios from "axios";

function HotelDetail() {
  const [hotelObj, setHotelObj] = useState([]);
  const [rooms, setHotelRooms] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    async function fetchHotel() {
      const result = await axios.get(
        `https://tripmate-tourism-management.onrender.com/user/get-single-hotel/${id}`
      );
      setHotelObj(result.data);
      //   console.log(result.data);
    }
    fetchHotel();
    async function fetchRooms() {
      const result = await axios.get(
        `https://tripmate-tourism-management.onrender.com/rooms/get-all-rooms/${id}`
      );
      setHotelRooms(result.data);
      //   console.log(result.data);
    }
    fetchRooms();
  }, []);
  return (
    <div className="p-3 h-screen overflow-y-scroll">
      <div className="w-11/12 mx-auto">
        <h1 className="font-bold text-3xl pt-3">
          {hotelObj.company_name}/{hotelObj.address}
        </h1>
        <div className="flex justify-between items-center pr-8 ">
          <div className="pb-5">
            <p className="text-[#6E6C6C]">{hotelObj.address}</p>
            {/* <p className="text-[#6E6C6C]">{hotelObj.email}</p> */}
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-semibold py-3">Overview</h1>
      <p>{hotelObj.description}</p>
      {rooms.map((room, index) => (
        <div>
          <hr className="h-1 my-3 bg-black" />
          <div className="flex gap-2 ">
            <div className="md:w-1/2">
              <div className="flex gap-2">
                <div className="h-1/2">
                  <img src={room.room_image[1]} alt="" />
                </div>
                <div className="h-1/2">
                  <img src={room.room_image[2]} alt="" />
                </div>{" "}
              </div>
              <div>
                <h1 className="font-bold p-2">{room.room_name}</h1>
                <p>{room.room_description}</p>
                <div className="flex justify-between px-6 py-4">
                  <div>
                    <p>{room.room_price} $ per night</p>
                    <p>{room.room_available} rooms available</p>
                  </div>
                  <button
                    onClick={() => {
                      navigate(`reserve/${room._id}`);
                    }}
                    className="bg-green-900 px-2 py-1 text-white mt-6 rounded-lg"
                  >
                    Reserve now
                  </button>
                </div>
              </div>
            </div>
            <img className="md:w-1/2" src={room.room_image[0]} alt="" />
          </div>
          <hr className="h-1 my-3 bg-black" />
        </div>
      ))}
    </div>
  );
}

export default HotelDetail;
