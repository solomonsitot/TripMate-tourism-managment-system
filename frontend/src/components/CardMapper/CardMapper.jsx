import React from "react";
import "./CardMapper.css";
import Springs from "../../assets/40 Spring.jpg";
function CardMapper(props) {
  const OBJECT = props.object;
  const IMAGE = props.IMAGE;
  const H5 = props.H5;
  const BoH = props.BoH;
  // const PARAM4 = props.param4;
  return (
    <>
      {OBJECT.map((obj, index) => (
        <div key={obj.id} className={`card custom-card ${props.cols}`}>
          <img className="card-img" src={`http://localhost:8000/${obj[BoH]}/${obj[IMAGE]}`} alt="" />
          <h5>{obj[H5]}</h5>
        </div>
      ))}
    </>
  );
}

export default CardMapper;
