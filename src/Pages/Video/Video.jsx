import React from "react";
import "./Video.css";
import PlayVideo from "../../Components/Play/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
const Video = () => {
  return (
    <div className="playcontainer">
      <PlayVideo />
      <Recommended />
    </div>
  );
};

export default Video;
