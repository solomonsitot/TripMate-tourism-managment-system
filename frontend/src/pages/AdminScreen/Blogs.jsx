import React, { useState } from "react";
import axios from "axios";
import Sections from "../../components/Sections/Sections";
import test from "../../assets/test.jpg";
function Blogs() {
  const [blogImage, SetblogImage] = useState("");
  const [blogDesc, SetblogDesc] = useState("");
  const [blogTitle, SetblogTitle] = useState("");
  async function blogPost(e) {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("blogTitle", blogTitle);
      formdata.append("blogDesc", blogDesc);
      console.log(formdata.blogTitle);
      await axios.post("http://localhost:8000/Admin/blogs/post", formdata);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="admin-blog-page">
      <h2>Blogs</h2>
      <p>Add new blog</p>
      <div className="blog-posting-container">
        <label htmlFor="">Enter Blog Title: </label>
        <input
          type="text"
          onChange={(e) => {
            SetblogTitle(e.target.value);
          }}
        />
        <br />
        <input
          type="file"
          onChange={(e) => {
            SetblogImage(e.target.files[0]);
          }}
        />
        <br />
        <textarea
          name=""
          id=""
          cols="50"
          rows="5"
          placeholder="Enter Description"
          onChange={(e) => {
            SetblogDesc(e.target.value);
          }}
        ></textarea>
        <br />
        <button onClick={blogPost}>Post</button>
      </div>
      {/* <Sections
        linkAddress="/"
        linkText=" Blog page"
        recentText="Recent Blogs"
        image1={test}
        image2={test}
      /> */}
    </div>
  );
}

export default Blogs;
