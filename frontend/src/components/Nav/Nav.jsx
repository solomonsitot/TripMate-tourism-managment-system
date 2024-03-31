import React, { useState } from "react";
import "./Nav.css";
import hamburger from "../../assets/hamburger.png";
function Nav(props) {
  const [showMenu, setShowMenu] = useState(false);
  function displayMenu(e) {
    e.preventDefault();
    setShowMenu(!showMenu);
  }
  return (
    <>
      <div className="nav-wrapper">
        <div className="logo-wrapper">
          <h2>TourMate</h2>
        </div>
        <div>
          <ul className="header-links-wrapper d-none d-md-flex">
            <li>
              <a className="header-links" href={props.href1}>
                {props.firstLink}
              </a>
            </li>
            <li>
              <a className="header-links" href={props.href2}>
                {props.secondLink}
              </a>
            </li>
            <li>
              <a className="header-links" href={props.href3}>
                {props.thirdLink}
              </a>
            </li>
            <li>
              <a className="header-links" href={props.href4}>
                {props.fourthLink}
              </a>
            </li>
            <li>
              <a className="Green-btn" href={props.href5}>
                {props.fifthLink}
              </a>
            </li>
          </ul>
          <img
            className="ham-icon d-md-none"
            src={hamburger}
            alt=""
            onClick={displayMenu}
          />
        </div>
      </div>
      <div>
        <ul className={`${showMenu ? "d-block" : "d-none"} ham-header-links`}>
          <li>
            <a className="sm-header-links" href={props.href1}>
              {props.firstLink}
            </a>
          </li>
          <li>
            <a className="sm-header-links" href={props.href2}>
              {props.secondLink}
            </a>
          </li>
          <li>
            <a className="sm-header-links" href={props.href3}>
              {props.thirdLink}
            </a>
          </li>
          <li>
            <a className="sm-header-links" href={props.href4}>
              {props.fourthLink}
            </a>
          </li>
          <li>
            <a className="sm-header-links" href={props.href5}>
              {props.fifthLink}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
