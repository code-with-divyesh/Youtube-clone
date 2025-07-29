import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import { useState } from "react";
import SearchResults from "./Pages/Search/SearchResults";
const App = () => {
  const [sidebar, setSideBar] = useState(true);
  return (
    <div>
      <NavBar setSideBar={setSideBar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </div>
  );
};

export default App;
