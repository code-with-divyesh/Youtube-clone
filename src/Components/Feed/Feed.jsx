import React, { useEffect, useState } from "react";
import "./Feed.css";
import { assets } from "../../assets";
import { Link } from "react-router-dom";
import moment from "moment";
const Feed = ({ category }) => {
  const formatCount = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&videoCategoryId=${category}&maxResults=50&key=${API_KEY}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("Fetched Videos:", data.items);
      setData(data.items);
    } catch (error) {
      console.log("error fetching data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.localized.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {formatCount(item.statistics.viewCount)}
              {"  "}
              views &bull;
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
