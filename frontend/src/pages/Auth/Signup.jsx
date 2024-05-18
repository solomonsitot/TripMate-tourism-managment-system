import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bg from "../../assets/login back.png";
import mail from "../../assets/mail.png";
import key from "../../assets/key.png";
import contact from "../../assets/Contact.png";
function Signup() {
  const [full_name, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [re_password, setRe_Password] = useState();
  const [role, SetRole] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  async function sign(e) {
    fetch("https://tripmate-tourism-management.onrender.com/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name,
        email,
        password,
        re_password,
        role,
      }),
    });
    const data = await response.json();
    if (data.body && data.body.role === "tourist") navigate("/");
    // else if (data.body && data.body.role === "Admin") navigate("/admin");
    // else if (data.body && data.body.role === "Hotel")
    //   navigate("/tourist");
    // else if (data.body && data.body.role === "Tour Agent")
    //   navigate("/tourist");
    // else if (data.body && data.body.role === "Shop owner")
    //   navigate("/tourist");
    else {
      window.alert(`${data.message}`);
      setFullname("");
      setEmail("");
      setPassword("");
      setRe_Password("");
      SetRole("null");
    }
  }

  return (
    <>
      <div className="flex">
        <img className="hidden md:block  h-full" src={bg} alt="" />

        <div className=" content-center mx-auto text-center w-3/4  h-screen  ">
          <h1 className="text-3xl  font-bold mb-4">Signup Page</h1>
          <select
            name="role"
            onChange={(e) => {
              SetRole(e.target.value);
            }}
            value={role}
            required={true}
            className="p-2 w-1/2 block border-2 rounded-2xl mx-auto mb-4 border-gray-400"
          >
            <option value="null">Signup as</option>
            <option value="Tourist">Tourist</option>
            <option value="Hotel">Hotel</option>
            <option value="Tour Agent">Tour Agent</option>
            <option value="Shop owner">Shop owner</option>
          </select>
          <div
            className={`${
              role == "Hotel" || role == "Tour Agent" || role == "Shop owner"
                ? "block w-1/2 mx-auto"
                : "hidden"
            } `}
          >
            <button className="px-6 block mb-2 absolute border-2 bg-green-900 text-white py-2 rounded-2xl text-sm cursor-">
              upload your license
            </button>
            <input
              className="p-1 px-4 w-1/2 block opacity-0 "
              type="file"
              required={true}
            />
          </div>
          <div className="flex w-full justify-center my-2">
            <img
              className=" p-1 w-8  border-b-2  mx-0 border-gray-400"
              src={contact}
              alt=""
            />

            <input
              className="p-1 px-4 w-1/2 block border-b-2  mx-0 border-gray-400"
              type="text"
              name="name"
              value={full_name}
              placeholder={`${
                role == "Hotel" || role == "Tour Agent" || role == "Shop owner"
                  ? "Company Name"
                  : "Full name"
              } `}
              required={true}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-center my-2">
            <img
              className=" p-1 w-8  border-b-2  mx-0 border-gray-400"
              src={mail}
              alt=""
            />
            <input
              className="p-1 px-4 w-1/2 block border-b-2 mx-0 border-gray-400"
              type="text"
              value={email}
              name="email"
              placeholder="Email"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex w-full justify-center my-2">
            <img
              className=" p-1 w-8  border-b-2  mx-0 border-gray-400"
              src={key}
              alt=""
            />
            <input
              className="p-1 px-4 w-1/2 block border-b-2 mx-0 border-gray-400"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex w-full justify-center my-2 ">
            <img
              className=" p-1 w-8  border-b-2  mx-0 border-gray-400"
              src={key}
              alt=""
            />
            <input
              className="p-1 px-4 w-1/2 block border-b-2 mx-0 border-gray-400"
              type="password"
              value={re_password}
              name="re_password"
              placeholder="Confirm Password"
              required={true}
              onChange={(e) => setRe_Password(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="mt-3 px-10 py-2 rounded-lg text-white bg-green-950  "
            onClick={sign}
          >
            SignUp
          </button>
          <p className="mt-4">
            Already have an account{" "}
            <a className="text-blue-500" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
