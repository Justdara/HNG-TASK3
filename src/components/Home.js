// import React, { useState } from "react";
// import { auth } from "../firebase";
// import Gallery from "./Gallery";

// import "./Home.css";

// const Home = () => {
//   const [images, setImages] = useState([
//     {
//       name: "Image 1",
//       url: "image1.jpg",
//       tags: ["tag1", "tag2"],
//     },
//     {
//       name: "Image 2",
//       url: "image2.jpg",
//       tags: ["tag2", "tag3"],
//     },
//     {
//       name: "Image 3",
//       url: "image3.jpg",
//       tags: ["tag1", "tag3"],
//     },
//     {
//       name: "Image 1",
//       url: "image1.jpg",
//       tags: ["tag1", "tag2"],
//     },
//     {
//       name: "Image 2",
//       url: "image2.jpg",
//       tags: ["tag2", "tag3"],
//     },
//     {
//       name: "Image 3",
//       url: "image3.jpg",
//       tags: ["tag1", "tag3"],
//     },
//     {
//       name: "Image 1",
//       url: "image1.jpg",
//       tags: ["tag1", "tag2"],
//     },
//     {
//       name: "Image 2",
//       url: "image2.jpg",
//       tags: ["tag2", "tag3"],
//     },
//     {
//       name: "Image 3",
//       url: "image3.jpg",
//       tags: ["tag1", "tag3"],
//     },
//     {
//       name: "Image 1",
//       url: "image1.jpg",
//       tags: ["tag1", "tag2"],
//     },
//     {
//       name: "Image 2",
//       url: "image2.jpg",
//       tags: ["tag2", "tag3"],
//     },
//     {
//       name: "Image 3",
//       url: "image3.jpg",
//       tags: ["tag1", "tag3"],
//     },
//     // Add more image objects here with names and tags
//   ]);

//   const [searchQuery, setSearchQuery] = useState("");

//   // Function to filter images based on tags
//   const filteredImages = images.filter((image) => {
//     if (!searchQuery) return true; // If no search query, show all images
//     return image.tags.includes(searchQuery);
//   });

//   return (
//     <div className="home">
//       <h1>Image Gallery</h1>
//       <button onClick={() => auth.signOut()}>Log Out</button>
//       <input
//         type="text"
//         placeholder="Search by tag"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <Gallery images={filteredImages} setImages={setImages} />
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Gallery from "./Gallery";
import Loading from "./Loading"; // Import your Loading component

import "./Home.css";

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // Initial loading state
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const fetchedImages = [
        {
          name: "Image 1",
          url: "image1.jpg",
          tags: ["tag1", "tag2"],
        },
        {
          name: "Image 2",
          url: "image2.jpg",
          tags: ["tag2", "tag3"],
        },
        {
          name: "Image 3",
          url: "image3.jpg",
          tags: ["tag1", "tag3"],
        },
        {
          name: "Image 1",
          url: "image1.jpg",
          tags: ["tag1", "tag2"],
        },
        {
          name: "Image 2",
          url: "image2.jpg",
          tags: ["tag2", "tag3"],
        },
        {
          name: "Image 3",
          url: "image3.jpg",
          tags: ["tag1", "tag3"],
        },
        {
          name: "Image 1",
          url: "image1.jpg",
          tags: ["tag1", "tag2"],
        },
        {
          name: "Image 2",
          url: "image2.jpg",
          tags: ["tag2", "tag3"],
        },
        {
          name: "Image 3",
          url: "image3.jpg",
          tags: ["tag1", "tag3"],
        },
        {
          name: "Image 1",
          url: "image1.jpg",
          tags: ["tag1", "tag2"],
        },
        {
          name: "Image 2",
          url: "image2.jpg",
          tags: ["tag2", "tag3"],
        },
        {
          name: "Image 3",
          url: "image3.jpg",
          tags: ["tag1", "tag3"],
        },
      ];
      setImages(fetchedImages);
      setLoading(false);
    }, 2000);
  }, []);

  // Function to filter images based on tags
  const filteredImages = images.filter((image) => {
    if (!searchQuery) return true; // If no search query, show all images
    return image.tags.includes(searchQuery);
  });

  return (
    <div className="home">
      <h1>Image Gallery</h1>
      <button onClick={() => auth.signOut()}>Log Out</button>
      <input
        type="text"
        placeholder="Search by tag"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {loading ? (
        <Loading />
      ) : (
        <Gallery images={filteredImages} setImages={setImages} />
      )}
    </div>
  );
};

export default Home;
