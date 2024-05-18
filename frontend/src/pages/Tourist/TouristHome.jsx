import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../components/Nav";
import CardMapper from "../../components/CardMapper";
import plane from "../../assets/Plane.png";
import weather from "../../assets/weather.png";
import ZebranZcroco from "../../assets/zebra n croco.png";
import search from "../../assets/search.png";
import hicking from "../../assets/hicking.png";
import culture from "../../assets/culture.png";
import nature from "../../assets/nature.png";
import religion from "../../assets/religion.png";
import lamp from "../../assets/lamp.png";
import bed from "../../assets/bed.png";
import guide from "../../assets/guide.png";
import shop from "../../assets/shop.png";
import menu from "../../assets/menu.png";
import telegram from "../../assets/telegram2.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import arrow from "../../assets/arrow.png";
import fourty from "../../assets/40 Spring.jpg";
import contact from "../../assets/Contact.png";
function TouristHome() {
  const [key, setKey] = useState("");
  const [stat, setStatus] = useState(false);
  const [objects, setObject] = useState([]);
  useEffect(() => {
    async function searchDestination() {
      const response = await axios.get(
        `http://localhost:8000/destinations/search/${key}`
      );
      // console.log(response.data)
      setObject(response.data);
      if (key === "") {
        setObject([]);
      }
    }
    searchDestination();

    // fetch(`http://localhost:8000/destinations/search/${key}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => res.json())
    //   .then((data) => setObject(data));
    // console.log(data)
    // const data = await response.json();
    // setObject(data.data.message);
    // console.log(stat);
  }, [key]);

  async function searchDestination() {}

  async function logout() {
    try {
      // console.log(keys);
      const result = await axios.get("http://localhost:8000/api/user/logout");
      // Handle logout success if needed
    } catch (error) {
      console.log("Error occurred while logging out:", error);
    }
  }
  return (
    <div>
      <Nav
        href0="/"
        link1="Destinations"
        href1="/"
        link2="Hotels"
        href2="/see-hotels"
        link3="Tours"
        href3="/"
        link4="Blogs"
        href4="/see-blogs"
        setting={contact}
        menu={menu}
        stat={stat}
      />
      <div className="flex justify-between pt-14 px-5">
        <div>
          <img className="h-16" src={weather} alt="" />
          <div className="flex">
            <h1 className="text-7xl">
              Start Your <h1 className="text-6xl font-bold">Journey Enjoy</h1>
            </h1>
            <img className="h-24" src={plane} alt="" />
          </div>
          <div className="w-per70 text-xl my-3">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex  gap-12  mt-8">
            <button className="bg-green-950 text-white font-bold px-6 py-2 rounded-2xl">
              Get Started
            </button>
            <div className=" flex h-12">
              <input
                className="border p-3 border-solid border-gray-500 border-r-0 rounded-bl-2xl pl-4  focus:outline-none"
                placeholder="search . . ."
                type="text"
                onChange={(e) => {
                  setKey(e.target.value);
                }}
              />
              <img
                className="border border-solid border-gray-500 border-l-0 rounded-2xl rounded-l-none pr-6 py-2 "
                src={search}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" hidden md:flex">
          <img className="h-100" src={ZebranZcroco} alt="" />
        </div>
        <div></div>
      </div>
      <div className="block md:flex  overflow-x-scroll py-4">
        {objects.map((obj, index) => (
          <div
            className=" m-6 overflow-hidden rounded-xl md:flex-cols md:w-1/4  shadow-xl text-center "
            key={index}
          >
            <img className=" mx-auto" src={fourty} alt="" />
            <p>{obj.DestName}</p>
            <p>{obj.DestDescription}</p>
          </div>
        ))}
        {/* <CardMapper
          OBJECT={objects}
          cols="col-lg-3"
          BoH="Destinations"
          IMAGE="DestImage"
          H5="DestName"
          P="DestDescription"
        />{" "} */}
      </div>
      <div className="block md:flex  my-9 py-6 bg-gray-100 px-5 mx-5 gap-16 shadow-2xl ">
        <div>
          <h1 className="font-bold text-xl">What Excites You Most?</h1>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className="flex justify-around md:gap-2 my-2">
          <img
            className="bg-green-950 rounded-full p-3 h-2/3"
            src={hicking}
            alt=""
          />
          <div className="h-full my-auto">
            <h1 className="font-bold">Hicking</h1>
            <p className="text-sm">Lorem Ipsum is simply dummy text</p>
          </div>
        </div>
        <div className="flex justify-around md:gap-2 my-2">
          <img
            className="bg-green-950 rounded-full p-3 h-2/3 "
            src={culture}
            alt=""
          />
          <div className="h-full my-auto">
            <h1 className="font-bold">Culture</h1>
            <p className="text-sm">Lorem Ipsum is simply dummy text</p>
          </div>
        </div>{" "}
        <div className="flex justify-around md:gap-2  my-2">
          <img
            className="bg-green-950 rounded-full p-3 h-2/3"
            src={nature}
            alt=""
          />
          <div className="h-full my-auto">
            <h1 className="font-bold">Nature</h1>
            <p className="text-sm">Lorem Ipsum is simply dummy text</p>
          </div>
        </div>{" "}
        <div className="flex justify-around md:gap-2 my-2">
          <img
            className="bg-green-950 rounded-full p-3 h-2/3"
            src={religion}
            alt=""
          />
          <div className="h-full my-auto">
            <h1 className="font-bold">Religious</h1>
            <p className="text-sm">Lorem Ipsum is simply dummy text</p>
          </div>
        </div>
      </div>

      <div className="text-center my-16">
        <h1 className="text-green-800 font-semibold text-3xl my-6">
          Our Services
        </h1>
        <div className="block md:flex  justify-evenly ">
          <div className="w-full md:w-1/6 my-6">
            <img className="mx-auto h-1/2" src={bed} alt="" />
            <h1 className="my-4 text-2xl font-bold">Hotels</h1>
            <p>Lorem Ipsum is simply dummy text of the printing.</p>
          </div>
          <div className="w-full md:w-1/6 my-6">
            <img className="mx-auto h-1/2" src={shop} alt="" />
            <h1 className="my-4 text-2xl font-bold">Shopping</h1>
            <p>Lorem Ipsum is simply dummy text of the printing.</p>
          </div>
          <div className="w-full md:w-1/6 my-6">
            <img className="mx-auto h-1/2" src={guide} alt="" />
            <h1 className="my-4 text-2xl font-bold">Tour Agents</h1>
            <p>Lorem Ipsum is simply dummy text of the printing.</p>
          </div>
          <div className="w-full md:w-1/6 my-6 ">
            <img className="mx-auto h-1/2" src={lamp} alt="" />
            <h1 className="my-4 text-2xl font-bold">Discovery</h1>
            <p>Lorem Ipsum is simply dummy text of the printing.</p>
          </div>
        </div>
      </div>

      <div className="block md:flex gap-3 px-6 pb-5 mb-20">
        <div className="border-solid rounded-2xl border-2 w-full border-green-950 flex items-center justify-center h-64">
          <h1 className="text-5xl font-bold text-green-950">ADVERTISEMENT</h1>
        </div>
        <div className="w-full flex gap-3">
          <div className="w-full ">
            <div className=" mb-1.5 h-1/2 rounded-2xl bg-[#C0F4FF] w-full border-green-950">
              <h1 className=" text-3xl font-bold text-green-950 p-3">
                Read our Blogs
              </h1>
            </div>
            <div className="mt-1.5 h-1/2 rounded-2xl bg-[#E1FECE] w-full border-green-950">
              <h1 className=" text-3xl font-bold text-green-950 p-3">
                Go to discovery
              </h1>
            </div>
          </div>
          <div className=" bg-[#F2E8DE] rounded-2xl w-full border-green-950">
            <div className=" px-3  py-6 flex justify-between">
              <h1 className=" text-3xl font-semibold text-green-950">
                {" "}
                Gamo tourism
              </h1>
              <div>
                {" "}
                <img className="h-1/2" src={arrow} alt="" />
              </div>{" "}
            </div>
            <div className=" h-1/5 bg-gray-200 rounded-2xl m-2 p-2 flex justify-evenly">
              <img src={telegram} alt="" />{" "}
              <p className="text-2xl text-green-950 font-semibold pt-2">
                telegram
              </p>{" "}
            </div>
            <div className="h-1/5  bg-gray-200  rounded-2xl m-2 p-2 flex justify-evenly">
              <img src={facebook} alt="" />{" "}
              <p className="text-2xl text-green-950 font-semibold pt-2">
                facebook
              </p>{" "}
            </div>
            <div className="h-1/5 bg-gray-200 rounded-2xl m-2 p-2 flex justify-evenly">
              <img className="" src={twitter} alt="" />{" "}
              <p className="text-2xl text-green-950 font-semibold pt-2">
                twitter
              </p>{" "}
              {/* bg-[#E1FECE] */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouristHome;
