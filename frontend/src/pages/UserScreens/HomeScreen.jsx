import React from "react";
import Nav from "../../components/Nav/Nav";
import CardMapper from "../../components/CardMapper/CardMapper";
import plane from "../../assets/Plane.png";
import weather from "../../assets/weather.png";
import ZebranZcroco from "../../assets/zebra n croco.png";
import Springs from "../../assets/40 Spring.jpg";
import "./HomeScreen.css";
function HomeScreen() {
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
      <div className="Whole-wrapper">
        <div>
          <img className="weather-img" src={weather} alt="" />
          <div className="d-flex">
            <h1 className="moto-txt">
              Start Your <h1 className="inner-moto-txt">Journey Enjoy</h1>
            </h1>
            <img className="plane-img" src={plane} alt="" />
          </div>
          <div className="text-box">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="search-box">
            <button className="Green-btn">Get Started</button>
            <input
              className="home-search-bar"
              placeholder="search"
              type="text"
            />
          </div>
        </div>
        <div className=" d-none d-md-flex">
          <img className="right-img" src={ZebranZcroco} alt="" />
        </div>
        <div></div>
      </div>
      <div className="card-holder">
        {/* <CardMapper object={peoples} cols="col-lg-3" BoH='' IMAGE="" H5="" />           //BoH tells is it Blogs or Hotels*/}
      </div>
    </div>
  );
}

export default HomeScreen;
