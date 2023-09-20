import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Gallery from "./Gallery";
import Loading from "./Loading";

import "./Home.css";

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const fetchedImages = [
        {
          url: "image1.jpg",
          tags: ["tag1"],
        },
        {
          url: "image2.jpg",
          tags: ["tag2"],
        },
        {
          url: "image3.jpg",
          tags: ["tag3"],
        },
        {
          url: "image4.jpg",
          tags: ["tag4"],
        },
        {
          url: "image5.jpg",
          tags: ["tag5"],
        },
        {
          url: "image6.jpg",
          tags: ["tag6"],
        },
        {
          url: "image7.jpg",
          tags: ["tag7"],
        },
        {
          url: "image8.jpg",
          tags: ["tag8"],
        },
        {
          url: "image9.jpg",
          tags: ["tag9"],
        },
        {
          url: "image10.jpg",
          tags: ["tag10"],
        },
        {
          url: "image11.jpg",
          tags: ["tag11"],
        },
        {
          url: "image12.jpg",
          tags: ["tag12"],
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
      <h2>Image Gallery</h2>

      <input
        type="text"
        placeholder="Search by tags"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="logout" onClick={() => auth.signOut()}>
        Log Out
      </button>
      {loading ? (
        <Loading />
      ) : (
        <Gallery images={filteredImages} setImages={setImages} />
      )}
    </div>
  );
};

export default Home;
