import React from "react";
import { auth } from "../firebase";

const Home = () => {
  return (
    <div>
      <h1>Image Gallery</h1>
      <button onClick={() => auth.signOut()}>Log Out</button>
    </div>
  );
};

export default Home;
