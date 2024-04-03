import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../components/Nav/Nav";
import CardMapper from "../../components/CardMapper/CardMapper";
import plane from "../../assets/Plane.png";
import weather from "../../assets/weather.png";
import ZebranZcroco from "../../assets/zebra n croco.png";
import Springs from "../../assets/40 Spring.jpg";
function HomeScreen() {
  const [keys, setKey] = useState("");
  const [objects, setObject] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log(keys);
      const result = await axios.get(
        `http://localhost:8000/Users/destination/get/${keys}`
      );
      setObject(result.data);
      if (keys === "") {
        setObject([]);
        return;
      }
    }
    fetchData();
  }, [keys]);
  return (
    <div>
      <Nav
        firstLink="Destinations"
        href1="/Discover"
        secondLink="Hotels"
        href2="/Hotels"
        thirdLink="Tours"
        href3="/Packages"
        fourthLink="Blogs"
        href4="/blogs"
        fifthLink="Signup"
        href5="/Packages"
      />
      <div className="flex justify-between pt-5 px-5">
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
          <div className="flex gap-4 mt-5">
            <button className="Green-btn">Get Started</button>
            <input
              className="border border-solid border-gray-500 rounded-2xl rounded-tl-none px-4 py-2"
              placeholder="search"
              type="text"
              onChange={(e) => {
                setKey(e.target.value);
              }}
            />
          </div>
        </div>
        <div className=" hidden md:flex">
          <img className="h-100" src={ZebranZcroco} alt="" />
        </div>
        <div></div>
      </div>
      <div className="flex overflow-scroll">
        <CardMapper
          OBJECT={objects}
          cols="col-lg-3"
          BoH="Destinations"
          IMAGE="DestImage"
          H5="DestName"
          P="DestDescription"
        />{" "}
      </div>
    </div>
  );
}

export default HomeScreen;
