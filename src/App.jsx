import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:catagoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
