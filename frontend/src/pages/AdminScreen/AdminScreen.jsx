import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "../../bootstrap.css";
import test from "../../assets/test.jpg";
import Nav from "../../components/Nav/Nav";
import Modal from "../../components/Modal/Modal";
import CardMapper from "../../components/CardMapper/CardMapper";
import Sections from "../../components/Sections/Sections";
function AdminScreen() {
  const [modal, setModal] = useState(false);
  const [destObj, setDestObject] = useState([]);
  const [blogObj, setBlogObject] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `http://localhost:8000/Admin/destination/getAll`
      );
      setDestObject(result.data);
    }
    fetchData();
  }, [modal]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `http://localhost:8000/Admin/blogs/seeAll`
      );
      setBlogObject(result.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <Nav
        firstLink="Hotels"
        href1="Admin/seeHotels"
        secondLink="Blogs"
        href2="Admin/seeblogs"
        thirdLink="Agents"
        href3="Admin/seeAgents"
        fifthLink="logout"
        href4="#"
      />
      <div className=" bg-slate-300 mx-per5 rounded-2xl">
        {" "}
        <div className="flex justify-between bg-slate-300 p-5  w-per90">
          <h2 className="text-4xl font-semibold">Destinations</h2>
          <button
            className="text-green-900 font-semibold px-3 py-2 rounded-xl bg-lime-500 hover:bg-green-900 hover:text-lime-500"
            onClick={() => {
              setModal(true);
            }}
          >
            Add New
          </button>
        </div>
        {modal && (
          <Modal
            onClose={() => {
              setModal(false);
            }}
          />
        )}
        <div className=" flex overflow-x-scroll  mx-per5">
          <CardMapper
            OBJECT={destObj}
            cols="col-4"
            IMAGE="DestImage"
            BoH="Destinations"
            H5="DestName"
            P="DestDescription"
          />
        </div>
      </div>
      <div className=" bg-slate-300 mx-per5 rounded-2xl mt-7">
        <div className="flex justify-between bg-slate-300 p-5  w-per90">
          <h2 className="text-4xl font-semibold">Blogs</h2>
          <a
            className="text-green-900 font-semibold px-3 py-2 rounded-xl bg-lime-500 hover:bg-green-900 hover:text-lime-500"
            href="Admin/seeblogs"
          >
            Add New
          </a>
        </div>
        <div className=" flex overflow-x-scroll  mx-6">
          {" "}
          <CardMapper
            OBJECT={blogObj}
            cols="col-4"
            IMAGE="BlogImage"
            BoH="Blogs"
            H5="BlogTitle"
            P="BlogDescription"
            SPAN="BlogDate"
          />
        </div>
      </div>
      <div className="row">
        {/* <Sections
          cn="col-lg-6 card"
          title="Blogs"
          description="Wanna post something?"
          linkAddress="Admin/seeblogs"
          linkText=" Blog page"
          recentText="Recent Blogs"
          image1={test}
          image2={test}
        />
        <Sections
          cn="col-lg-6 card"
          title="Hotels"
          description="Wanna see All?"
          linkAddress="Admin/seeHotels"
          linkText=" Hotels"
          recentText="Top Hotels"
          image1={test}
          image2={test}
          text1="Haile resorts"
          text2="Paradise lodge"
        /> */}
      </div>
    </>
  );
}

export default AdminScreen;

{
  /* <CardMapper OBJECT={} /> */
}
