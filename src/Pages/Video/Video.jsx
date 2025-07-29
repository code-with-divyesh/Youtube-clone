import React from "react";
import "./Video.css";
import PlayVideo from "../../Components/Play/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className="playcontainer">
      <PlayVideo videoId={videoId} categoryId={categoryId} />
      <Recommended categoryId={categoryId} videoId={videoId} />
    </div>
  );
};

export default Video;
