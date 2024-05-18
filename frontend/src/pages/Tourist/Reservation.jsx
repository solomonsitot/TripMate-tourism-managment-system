import React, { useEffect, useState } from "react";
import key from "../../assets/key.png";
import logo from "../../assets/logo.png";
import chapalogo from "../../assets/chapalogo.png";
import { useParams } from "react-router-dom";
import axios from "axios";

function Reservation() {
  //   const [hotelObj, setHotelObj] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [room, setHotelRoom] = useState([]);
  const [results, setResult] = useState([]);
  const { rid } = useParams();
  const info = {
    rid: rid,
    quantity: amount,
    from: from,
    to: to,
  };

  useEffect(() => {
    async function fetchRoom() {
      const result = await axios.get(
        `https://tripmate-tourism-management.onrender.com/rooms/get-single/${rid}`
      );
      setHotelRoom(result.data.message);
    }
    fetchRoom();
  }, [rid]);

  async function reserveRoom(e) {
    e.preventDefault();

    try {
      const result = await axios.post(
        `https://tripmate-tourism-management.onrender.com/reservation/reserve-room/${rid}`,
        info
      );
      console.log(result);
      if (result.data.msg) {
        window.alert(result.data.msg);
        window.location.href = result.data.paymentUrl;
      } else if (result.data) {
        window.alert(result.data.msg);
      } else {
        window.alert(result.data.message);
      }
      setResult(result);
    } catch (error) {
      console.error("There was an error making the reservation:", error);
    }
  }

  return (
    <>
      <p>Reservation</p>

      <div className="flex gap-6">
        <div className="w-2/4 border-2 border-green-800 p-4">
          <p className="text-2xl font-bold mb-4">{room.room_name}</p>
          <p>{room.room_description}</p>
          <div><p>{room.room_price} Birr</p><p>{room.room_available} rooms available</p></div>
        </div>
        <div className="w-1/4 border-2 border-green-800 bg-gray-100 p-5">
          <h1 className="font-bold text-center text-xl my-2">
            Enter The Information
          </h1>
          <label htmlFor="">Amount: </label>
          <input
            className="my-1"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
          <label className="mr-5" htmlFor="">
            From:{" "}
          </label>
          <input
            className="my-1"
            type="date"
            onChange={(e) => setFrom(e.target.value)}
          />
          <br />
          <label className="mr-10" htmlFor="">
            To:{" "}
          </label>
          <input
            className="my-1"
            type="date"
            onChange={(e) => setTo(e.target.value)}
          />
          <br />
          <label htmlFor="">Your Total will be:</label>
          <p className="text-right mx-4">{amount * room.room_price} Birr</p>
          <button
            className="bg-green-950 px-3 py-1 text-white my-4 rounded-md"
            onClick={(e) => reserveRoom(e)}
          >
            reserve now
          </button>
          <div className="flex items-center gap-2">
            <img src={key} alt="" />
            <p className="text-sm">
              Note when you click reserve now you will be redirected to chapa
              payment page
            </p>
          </div>
          <div className="flex justify-between mt-8">
            <img className="h-[80px]" src={logo} alt="" />
            <img className="h-[80px]" src={chapalogo} alt="" />
          </div>
          <div className="h-[200px] flex overflow-x-scroll gap-2">
            {/* <img className="w-full" src={room.room_image[0]} alt="" /> 
             <img className="w-[40%]" src={room.room_image[1]} alt="" />
             <img className="w-[40%]" src={room.room_image[2]} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservation;
