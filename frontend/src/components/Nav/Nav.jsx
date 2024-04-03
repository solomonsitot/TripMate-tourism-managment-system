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
      <div className="flex justify-between p-4">
        <div className="text-green-950">
          <h2 className="text-5xl font-bold">TourMate</h2>
        </div>
        <div>
          <ul className="hidden md:flex gap-10">
            <li className="list-none ">
              <a className="text-green-950 no-underline" href={props.href1}>
                {props.firstLink}
              </a>
            </li>
            <li className="list-none ">
              <a className="text-green-950 no-underline" href={props.href2}>
                {props.secondLink}
              </a>
            </li>
            <li className="list-none ">
              <a className="text-green-950 no-underline" href={props.href3}>
                {props.thirdLink}
              </a>
            </li>
            <li className="list-none ">
              <a className="text-green-950 no-underline" href={props.href4}>
                {props.fourthLink}
              </a>
            </li>
            <li className="list-none ">
              <a className="Green-btn" href={props.href5}>
                {props.fifthLink}
              </a>
            </li>
          </ul>
          <img
            className="h-7 md:hidden"
            src={hamburger}
            alt=""
            onClick={displayMenu}
          />
        </div>
      </div>
      <div>
        <ul className={`${showMenu ? "block" : "hidden"} absolute  right-0 py-2 px-4 border border-solid border-green-900 rounded-lg bg-white text-center z-50`}>
          <li>
            <a className="no-underline text-green-950" href={props.href1}>
              {props.firstLink}
            </a>
          </li>
          <li>
            <a className="no-underline text-green-950" href={props.href2}>
              {props.secondLink}
            </a>
          </li>
          <li>
            <a className="no-underline text-green-950" href={props.href3}>
              {props.thirdLink}
            </a>
          </li>
          <li>
            <a className="no-underline text-green-950" href={props.href4}>
              {props.fourthLink}
            </a>
          </li>
          <li>
            <a className="no-underline text-green-950" href={props.href5}>
              {props.fifthLink}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
