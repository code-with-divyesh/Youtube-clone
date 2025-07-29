import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import moment from "moment";
import "./SearchResults.css";

const SearchResults = () => {
  const { query } = useParams();
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const [results, setResults] = useState([]);

  const formatCount = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };

  const fetchResults = async () => {
    try {
      // Step 1: Get videoIds from search API
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=20&key=${API_KEY}`
      );
      const data = await res.json();
      const videoIds = data.items.map((item) => item.id.videoId).join(",");

      // Step 2: Get detailed info from videos API
      const detailsRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${API_KEY}`
      );
      const detailsData = await detailsRes.json();
      setResults(detailsData.items);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [query]);

  return (
    <div className="feed">
      {results.map((item) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            key={item.id}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {formatCount(item.statistics.viewCount)} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResults;
