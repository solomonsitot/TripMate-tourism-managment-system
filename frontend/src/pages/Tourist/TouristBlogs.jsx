import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../components/Nav";
import BlogModal from "../../components/modals/BlogModal";
import springs from "../../assets/40 Spring.jpg";
import search from "../../assets/search.png";
import menu from "../../assets/menu.png";
import setting from "../../assets/setting.png";
import contact from "../../assets/Contact.png";
function TouristBlogs() {
  const [blogObj, setBlogObject] = useState([]);
  const [stat, setStatus] = useState(true);
  const [key, setKey] = useState("");
  const [modal, setModal] = useState(false);
  const [Bid, setBid] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `http://localhost:8000/blogs/search/${key}`
      );
      setBlogObject(result.data);
    }
    fetchData();
  }, [key]);
  return (
    <div>
      <Nav
        href0="/"
        link1="Destinations"
        href1="/Discover"
        link2="Hotels"
        href2="/see-hotels"
        link3="Tours"
        href3="/Packages"
        link4="Blogs"
        href4="/see-blogs"
        setting={contact}
        menu={menu}
        stat={stat}
      />
      <div className="w-full text-center">
        <h1 className="text-center text-4xl font-semibold">All Posts</h1>
        <div className="flex h-14 justify-center  mt-7">
          <img
            className="h-full pl-8 pr-2 self-center p-3 border-solid border-2 border-r-0 rounded-r-none border-green-950 rounded-2xl"
            src={search}
            alt=""
          />
          <input
            className="w-2/3 h-full self-center p-3 border-solid border-2 border-l-0 rounded-l-none border-green-950 rounded-2xl focus:outline-none"
            type="text"
            placeholder="search for articles . . . "
            onChange={(e) => {
              setKey(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="w-11/12 md:flex md:flex-wrap mt-10 md:gap-10 mx-auto  ">
        {blogObj.map((blog, index) => {
          return (
            <div className="w-3/4 bg md:w-thirty md:flex-cols pb-2 rounded-lg mx-auto md:mx-0 my-6 md:my-0 overflow-hidden shadow-md shadow-gray-600">
              <img src={springs} alt="" />
              <p className="font-bold border-l-4 my-1 text-xl px-3 py-1 border-l-green-950">
                {blog.BlogTitle}
              </p>
              <p className="my-1 px-4 py-1 text-xl">{blog.BlogDescription}</p>

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

export default TouristBlogs;
