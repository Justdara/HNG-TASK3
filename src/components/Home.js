import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Gallery from "./Gallery";
import Loading from "./Loading";

import "./Home.css";

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const fetchedImages = [
        {
          url: "image1.jpg",
          tags: ["PORSCHE"],
        },
        {
          url: "image2.jpg",
          tags: ["BMW"],
        },
        {
          url: "image3.jpg",
          tags: ["McLAREN"],
        },
        {
          url: "image4.jpg",
          tags: ["AUDI"],
        },
        {
          url: "image5.jpg",
          tags: ["McLAREN"],
        },
        {
          url: "image6.jpg",
          tags: ["HONDA BIKE"],
        },
        {
          url: "image7.jpg",
          tags: ["LAMBORGHINI"],
        },
        {
          url: "image8.jpg",
          tags: ["BMW"],
        },
        {
          url: "image9.jpg",
          tags: ["KTM DUKE"],
        },
        {
          url: "image10.jpg",
          tags: ["BAJAJ PULSAR"],
        },
        {
          url: "image11.jpg",
          tags: ["BMW R75"],
        },
        {
          url: "image12.jpg",
          tags: ["PORSCHE 911 GT3"],
        },
      ];
      setImages(fetchedImages);
      setLoading(false);
    }, 2000);
  }, []);

  // Function to filter images based on tags
  const filteredImages = images.filter((image) => {
    if (!searchQuery) return true; // If no search query, show all images
    return image.tags.some((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  useEffect(() => {
    // Check if there are no results to display
    setNoResults(filteredImages.length === 0);
  }, [filteredImages]);

  return (
    <div className="home">
      <h2>Motors Image Gallery</h2>

      <input
        type="text"
        placeholder="Search by Motor name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="logout" onClick={() => auth.signOut()}>
        Log Out
      </button>
      <p>You can arrange the items by dragging and dropping🔍</p>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {noResults ? (
            <p className="no-results"> 😢Oops! No results found.</p>
          ) : (
            <Gallery images={filteredImages} setImages={setImages} />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
