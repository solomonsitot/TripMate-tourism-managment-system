import React, { useEffect, useState } from "react";
import Modal from "./Modal";
function Nav(props) {
  const [stat, setShowMenu] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [modal, setModal] = useState(false);

  function displayMenu() {
    setMobileMenu(!mobileMenu);
  }
  const obj = [
    {
      href: props.href0,
    },
    {
      href: props.href1,
      link: props.link1,
    },
    {
      href: props.href2,
      link: props.link2,
    },
    {
      href: props.href3,
      link: props.link3,
    },
    {
      href: props.href4,
      link: props.link4,
    },
    
  ];
  useEffect(() => {
    // setShowMenu(props.stat)
  });
  return (
    <>
      <div className="flex justify-between p-4 pt-6">
        <div className="text-green-950">
          <a href={props.href0}>
            <h2 className="text-5xl font-bold">TripMate</h2>
          </a>
        </div>
        <div>
          <ul className="hidden md:flex gap-4">
            {obj.map((nav, index) => (
              <li className="list-none ">
                <a
                  className={`${
                    stat ? "flex" : "hidden"
                  } text-green-950 no-underline `}
                  href={nav.href}
                >
                  {nav.link}
                </a>
              </li>
            ))}

            <li className="list-none ">
              <img
                className={`h-7 ml-10 ${stat ? "flex" : "hidden"}`}
                src={props.setting}
                alt=""
                onClick={() => {
                  setModal(true);
                }}
              />
            </li>
            <li className="list-none ">
              <a
                className={`bg-green-950 text-white px-4 py-3 rounded-xl ${
                  stat ? "flex" : "hidden"
                }`}
                href={props.href5}
              >
                {props.link5}
              </a>
            </li>
            <li className="list-none ">
              <a
                className={`bg-green-950 text-white px-4 py-3 rounded-xl ${
                  stat ? "hidden" : "flex"
                }`}
                href={"/signup"}
              >
                Signup
              </a>
            </li>
            <li className="list-none ">
              <a
                className={`bg-green-950 text-white px-4 py-3 rounded-xl ${
                  stat ? "hidden" : "flex"
                }`}
                href="/login"
              >
                login
              </a>
            </li>
          </ul>
          <img
            className="h-7 md:hidden"
            src={props.menu}
            alt=""
            onClick={displayMenu}
          />
        </div>
        <ul
          className={`${
            mobileMenu ? "block" : "hidden"
          } absolute  right-0 pt-2 mt-8 shadow-2xl md:hidden rounded-2xl bg-white  w-2/6 z-50`}
        >
          {obj.map((nav, index) => (
            <li>
              <a
                className={` text-green-950 my-2 py-2 justify-center no-underline ${
                  stat ? "flex" : "hidden"
                } `}
                href={nav.href}
              >
                {nav.link}
              </a>
            </li>
          ))}

          <div
            className={`flex justify-between rounded-2xl px-2 mt- shadow-lg bg-slate-50 ${
              stat ? "flex" : "hidden"
            }`}
          >
            <div
              className={`text-green-950 my-2  justify-between no-underline `}
            >
              <img
                className="h-3/4 my-auto"
                onClick={() => {
                  setModal(true);
                }}
                src={props.setting}
                alt=""
              />
            </div>
            <a className=" h-full my-auto  " href="/login">
              logout
            </a>
          </div>
          <li className="list-none ">
            <a
              className={`text-green-950  my-2 py-2 justify-center no-underline ${
                stat ? "hidden" : "flex"
              }`}
              href="/signup"
            >
              Signup
            </a>
          </li>
          <li className="list-none">
            <a
              className={`text-green-950 my-2 py-2 justify-center no-underline ${
                stat ? "hidden" : "flex"
              }`}
              href="/login"
            >
              login
            </a>
          </li>
        </ul>
        {modal && (
          <Modal
            onClose={() => {
              setModal(false);
            }}
          />
        )}
      </div>
    </>
  );
}

export default Nav;
