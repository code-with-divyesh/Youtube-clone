import React, { useState } from "react";
import { assets } from "../../assets";
import "./Recommended.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Recommended = ({ categoryId }) => {
  const [videos, setVideos] = useState([]);
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const fetchVideosByCategory = async () => {
    if (!categoryId) return;

    try {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&videoCategoryId=${categoryId}&maxResults=10&regionCode=IN&key=${API_KEY}`;

      const res = await fetch(url);
      const data = await res.json();

      if (data.error) {
        console.error("API Error:", data.error.message);
      } else {
        setVideos(data.items || []);
      }
    } catch (err) {
      console.error("Fetch Error:", err.message);
    }
  };
  useEffect(() => {
    fetchVideosByCategory(categoryId);
  }, [categoryId]);
  const formatCount = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };
  return (
    <div className="recommended">
      {videos.map((item, index) => {
        const videoId = item.id;
        return (
          <Link
            key={index}
            to={`/video/${categoryId}/${videoId}`}
            className="side-video-list"
          >
            <img
              src={item.snippet?.thumbnails?.medium?.url}
              className="thumbnil"
            />
            <div className="video-info">
              <h4 dangerouslySetInnerHTML={{ __html: item.snippet.title }}></h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{formatCount(item.statistics?.viewCount) || 0} views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
