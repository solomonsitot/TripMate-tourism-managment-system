import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "../../bootstrap.css";
import test from "../../assets/test.jpg";
import Nav from "../../components/Nav/Nav";
import Sections from "../../components/Sections/Sections";
function AdminScreen() {
  return (
    <>
      <Nav
        firstLink="Hotels"
        href1="Admin/seeHotels"
        secondLink="Blogs"
        href2="Admin/seeblogs"
        thirdLink="Agents"
        href3="Admin/seeAgents"
        fourthLink="logout"
        href4="#"
      />
      <div className="row">
        <Sections
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
        />
      </div>
    </>
  );
}

export default AdminScreen;
