import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import { assets } from "../../assets";
import moment from "moment";

const PlayVideo = ({ videoId }) => {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [channelDetails, setChannelDetails] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const fetchData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
    try {
      const res = await fetch(url);
      const result = await res.json();
      console.log("Fetched Video:", result.items[0]);
      setData(result.items[0]);
    } catch (error) {
      console.log("Error fetching video data", error);
    }
  };

  const fetchComments = async () => {
    const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=50&key=${API_KEY}`;
    try {
      const res = await fetch(url);
      const result = await res.json();
      console.log("Comments:", result.items);
      setComments(result.items);
    } catch (error) {
      console.log("Error fetching comments", error);
    }
  };

  const fetchChannelDetails = async () => {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${data.snippet.channelId}&key=${API_KEY}`;
    try {
      const res = await fetch(url);
      const result = await res.json();
      console.log("Channel Info:", result.items[0]);
      setChannelDetails(result.items[0]);
    } catch (error) {
      console.log("Error fetching channel details", error);
    }
  };

  useEffect(() => {
    if (videoId) fetchData();
    fetchComments();
  }, [videoId]);

  useEffect(() => {
    if (data?.snippet?.channelId) {
      fetchChannelDetails();
    }
  }, [data]);

  if (!data) return <div>Loading...</div>;

  const { snippet, statistics } = data;

  const formatCount = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num;
  };

  return (
    <div className="playvideo">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0`}
        width="996"
        height="560"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="YouTube Video Player"
      />

      <h3>{snippet.title}</h3>

      <div className="play-video-info">
        <p>
          {formatCount(statistics.viewCount)} views &bull;{" "}
          {moment(snippet.publishedAt).fromNow()}
        </p>
        <div>
          <span>
            <img src={assets.like} alt="Like icon" />
            {formatCount(statistics.likeCount)}
          </span>
          <span>
            <img src={assets.dislike} alt="Dislike icon" />
          </span>
          <span>
            <img src={assets.share} alt="Share icon" />
            Share
          </span>
          <span>
            <img src={assets.save} alt="Save icon" />
            Save
          </span>
        </div>
      </div>

      <hr />

      {channelDetails && (
        <div className="publisher">
          <img
            src={channelDetails.snippet.thumbnails.default.url}
            alt={`${snippet.channelTitle} channel logo`}
          />
          <div>
            <p>{snippet.channelTitle}</p>
            <span>
              {formatCount(channelDetails.statistics.subscriberCount)}{" "}
              Subscribers
            </span>
          </div>
          <button>Subscribe</button>
        </div>
      )}

      <div className="video-des">
        <p
          dangerouslySetInnerHTML={{
            __html: showFullDescription
              ? data.snippet.description
              : data.snippet.description.slice(0, 300) + "...",
          }}
        ></p>
        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="show-toggle-button"
        >
          {showFullDescription ? "Show Less" : "Show More"}
        </button>

        <hr />
        <h4>{comments.length} Comments</h4>

        {comments.map((comment) => {
          const snippet = comment.snippet.topLevelComment.snippet;
          return (
            <div className="Comments" key={comment.id}>
              <img
                src={snippet.authorProfileImageUrl}
                alt={`Profile picture of ${snippet.authorDisplayName}`}
              />
              <div>
                <h3>
                  {snippet.authorDisplayName}
                  <span>{moment(snippet.publishedAt).fromNow()}</span>
                </h3>
                <p
                  dangerouslySetInnerHTML={{ __html: snippet.textDisplay }}
                ></p>
                <div className="comment-action">
                  <img src={assets.like} alt="Like comment" />
                  <span>{snippet.likeCount || 0}</span>
                  <img src={assets.dislike} alt="Dislike comment" />
                  <span>2</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
