

import React from 'react'

function BlogModal() {
  return (
    <div>BlogModal</div>
  )
}

export default BlogModal

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import springs from "../../assets/40 Spring.jpg";

// function BlogModal(props) {
//   const [blogObj, setBlogObject] = useState([]);
//   const id = props.id;
//   useEffect(() => {
//     async function fetchBlog() {
//       const result = await axios.get(
//         `http://localhost:8000/blogs/get-single/${id}`
//       );
//       setBlogObject(result.data);
//     }
//     fetchBlog();
//   });
//   return (
//     <>
//       {" "}
//       <div className=" fixed inset-0 bg-gray-200 bg-opacity-30 backdrop-blur-sm flex justify-between   z-50 ">
//         <div className="lg:flex gap-6 lg:h-4/5 w-10/12 p-2 rounded-3xl my-auto shadow-2xl bg-white mx-auto">
//           <img className=" h-4/5 my-auto" src={springs} alt="" />
//           <div className=" h-4/5 my-auto">
//             {" "}
//             <p className="font-bold border-l-4 my-1 text-xl px-3 py-1 border-l-green-950">
//               {blogObj.BlogTitle}
//             </p>
//             <p className="my-1 px-4 py-1 text-xl">{blogObj.BlogDescription}</p>
//             <p className="my-1 py-1 text-gray-500 text-sm">
//               {blogObj.BlogDate}
//             </p>
//           </div><button
//           className="bg-red-600 text-white lg:fixed right-16 mr-14 rounded-xl px-5 py-2 "
//           onClick={props.onClose}
//         >
//           close
//         </button>
//         </div>
        
//       </div>
//     </>
//   );
// }

// export default BlogModal;
