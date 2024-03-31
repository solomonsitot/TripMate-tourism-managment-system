import React from "react";
import "./Sections.css";
function Sections(props) {
  return (
    <div className={`${props.cn} section`}>
      <h4>{props.title}</h4>
      <div className="content-holder">
        <p>
          {props.description} <a href={props.linkAddress}>{props.linkText}</a>
        </p>
        <h5>{props.recentText}</h5>
        <div className="inside-card-wrapper">
          <div className="card card-list col-6 col-md-5 col-lg-6">
            <img className="content-image" src={props.image1} alt="" />
            <p>{props.text1}</p>
          </div>
          <div className="card card-list col-6 col-md-5 col-lg-6">
            <img className="content-image" src={props.image2} alt="" />
            <p>{props.text2}</p>
          </div>
          <div className="card card-list col-6 col-md-5 col-lg-6">
            <img className="content-image" src={props.image1} alt="" />
            <p>{props.text1}</p>
          </div>
          <div className="card card-list col-6 col-md-5 col-lg-6">
            <img className="content-image" src={props.image2} alt="" />
            <p>{props.text2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
