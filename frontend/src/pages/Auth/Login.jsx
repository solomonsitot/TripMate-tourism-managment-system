import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/login back.png";
import mail from "../../assets/mail.png";
import key from "../../assets/key.png";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  async function login(e) {
    try {
      const response = await fetch(
        "https://tripmate-tourism-management.onrender.com/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
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
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log("Error occurred during login:", error);
    }
  }

  return (
    <>
      <div className="flex">
        <img className="hidden md:block  h-full" src={bg} alt="" />
        <div className=" content-center mx-auto text-center w-3/4  h-screen ">
          <h1 className="text-3xl  font-bold mb-4">Login Page</h1>
          <div className="flex w-full justify-center">
            <img
              className=" p-1 w-8  border-b-2  mx-0 border-gray-400"
              src={mail}
              alt=""
            />
            <input
              className="py-1 px-4 w-1/2  border-b-2  mx-0 border-gray-400"
              type="text"
              name="email"
              id=""
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-full justify-center">
            <img
              className=" p-1 w-8  border-b-2  mx-0 border-gray-400"
              src={key}
              alt=""
            />
            <input
              className="py-1 px-4 w-1/2 border-b-2 mx-0 border-gray-400"
              type="password"
              name="password"
              value={password}
              id=""
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            onClick={login}
            className="mt-3 px-10 py-2 rounded-lg text-white bg-green-950  "
          >
            Login
          </button>
          <p className="mt-4">
            have No account{" "}
            <a className="text-blue-500" href="/signup">
              SignUp
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
