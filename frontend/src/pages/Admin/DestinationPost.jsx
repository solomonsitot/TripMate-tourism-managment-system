import axios from 'axios';
import React, { useState } from 'react'

function DestinationPost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('dest_name', title);
      formData.append('dest_location', location);
      formData.append('blog_description', description);
      if (image) {
        formData.append('image', image);
      }
      try {
        const result = await axios.post(
          "https://tripmate-tourism-management.onrender.com/destinations/add",
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log(result);
        window.alert(result.data.message);
      } catch (error) {
        console.error('Error uploading blog:', error);
        window.alert('Failed to post blog. Please try again.');
      }
    };
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-950">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-bold mb-4 text-green-950">Add Destination</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
              <label
                  className="block text-green-950 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Destination Name
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter blog title"
                  required
                />    <label
                className="block text-green-950 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Destination Location
              </label>
              <input
                type="text"
                id="title"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter blog title"
                required
              />
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-950 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description/Details
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter blog description"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  className="block text-green-950 text-sm font-bold mb-2"
                  htmlFor="image"
                >
                  Destination Image
                </label>
                <input
                  type="file"
                  id="image"
                  onChange={(e)=>setImage(e.target.files[0])}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  accept="image/*"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-yellow hover:bg-yellow-600 text-green-950 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default DestinationPost