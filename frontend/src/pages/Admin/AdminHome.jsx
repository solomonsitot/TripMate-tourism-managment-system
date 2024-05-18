import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import menu from "../../assets/menu.png";
import springs from "../../assets/40 Spring.jpg";
import axios from "axios";
import BlogModal from "../../components/modals/BlogModal";
function AdminHome() {
  const [modal, setModal] = useState("");
  const [blogObj, setBlogObject] = useState([]);
  const [blogObj2, setBlogObject2] = useState([]);

  const [Bid, setBid] = useState("");

  // async function postBlog() {
  //   const result = await axios.get(`http://localhost:8000/blogs/get-all`);
  //   setBlogObject(result.data);
  // }

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://tripmate-tourism-management.onrender.com/blogs/get-all`
      );
      setBlogObject(result.data);
    }
    fetchData();
    async function fetchData2() {
      const result = await axios.get(
      `https://tripmate-tourism-management.onrender.com/destinations/get-all`
      );
      setBlogObject2(result.data.message);
    }
    fetchData2();
  }, []);
  return (
    <div>
      <Nav
        href0="/admin"
        link1="Blogs"
        href1="/admin/blogs"
        link2="Destinations"
        href2="/admin/destinations"
        link3="Users"
        href3="/admin/users"
        link5="logout"
        href5="/login"
        // setting={contact}
        menu={menu}
        // stat ={stat}
      />
      <h1 className="text-center font-bold my-5 text-4xl text-green-950">
        All Blogs
      </h1>
      <div className="flex overflow-x-scroll w-[97%] mx-auto">
        {blogObj.map((blog, index) => {
          return (
            <div
              key={index}
              className="w-3/4 bg md:w-thirty md:flex-cols pb-2 rounded-lg mx-auto md:mx-0 my-6 md:my-0 overflow-hidden shadow-md shadow-gray-600"
            >
              <img src={springs} alt="" />
              <p className="font-bold border-l-4 my-1 text-xl px-3 py-1 border-l-green-950">
                {blog.blog_title}
              </p>
              <p className="my-1 px-4 py-1 text-xl">{blog.blog_description}</p>

              <div className="flex justify-between px-4">
                <p className="my-1 py-1 text-gray-500 text-sm">
                  {blog.BlogDate}
                </p>
                <button
                  className="text-sm text-green-950"
                  onClick={() => {
                    setModal(true);
                    setBid(blog._id);
                  }}
                >
                  Read
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-center font-bold my-5 text-4xl text-green-950">
        All Destinations
      </h1>
      <div className="flex overflow-x-scroll w-[97%] mx-auto">
        {blogObj2.map((dest, index) => {
          return (
            <div
              key={index}
              className="w-3/4 bg md:w-thirty md:flex-cols pb-2 rounded-lg mx-auto md:mx-0 my-6 md:my-0 overflow-hidden shadow-md shadow-gray-600"
            >
              <img src={springs} alt="" />
              <p className="font-bold border-l-4 my-1 text-xl px-3 py-1 border-l-green-950">
                {dest.dest_name}
              </p>
              <p className="my-1 px-4 py-1 text-xl">{dest.dest_location}</p>

              <p className="my-1 px-4 py-1 text-xl">{dest.dest_description}</p>

              <div className="flex justify-between px-4">
                <button
                  className="text-sm text-green-950"
                  // onClick={() => {
                  //   setModal(true);
                  //   setBid(blog._id);
                  // }}
                >
                  Read
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {modal && (
        <BlogModal
          id={Bid}
          onClose={() => {
            setModal(false);
          }}
        />
      )}
    </div>
  );
}

export default AdminHome;
