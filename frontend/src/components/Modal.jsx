import React, { useState } from "react";
import axios from "axios";
function Modal({ onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  async function add(e) {
    try {
      e.preventDefault();
      const formdata = new FormData();
      formdata.append("Dest_Name", name);
      formdata.append("image", image);
      formdata.append("Dest_Description", description);
      const result = await axios.post(
        `http://localhost:8000/Admin/destination/add`,
        formdata
      );
      setName("");
      setImage("");
      setDescription("");
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div className="fixed inset-0 bg-green-950 bg-opacity-70 backdrop-blur-sm flex justify-center   z-50 ">
      <div className=" bg-green-950 opacity-80  p-10 w-3/4 border-solid border-white border-2 my-auto rounded-lg shadow-2xl shadow-white  ">
        <div className="flex justify-between text-white">
          <h1 className="text-2xl">Add New Destination</h1>
          <button onClick={onClose}>X</button>
        </div>
        <hr className="text-white " />
        <div className="block ">
          <label className="text-white mt-4 mr-2" htmlFor="">
            Name:{" "}
          </label>
          <input
            value={name}
            className=""
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <div className="flex justify-between">
            {" "}
            <div>
              <label className="text-white mt-4 mr-2" htmlFor="">
                Image:{" "}
              </label>
              <input
                className="mb-4"
                type="file"
                name="image"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
              <img src="" alt="" height={100} width={100} />
            </div>
            <br />
            <label className="text-white mt-4 mr-2" htmlFor="">
              Description:{" "}
            </label>
            <textarea
              value={description}
              className="mt-4"
              name=""
              id=""
              cols="30"
              rows="5"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>{" "}
          </div>
          <button className="bg-white py-2 px-3 rounded-lg" onClick={add}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
