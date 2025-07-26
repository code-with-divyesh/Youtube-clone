import React from "react";
import { assets } from "../../assets";
import "./SlideBar.css";

const SlideBar = () => {
  return (
    <div className="sidebar">
      <div className="shortcut-links">
        <div className="side-link">
          <img src={assets.home} alt="" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={assets.game} alt="" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={assets.automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={assets.sports} alt="" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={assets.entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={assets.tech} alt="" />
          <p>Technology</p>
        </div>
        <div className="side-link">
          <img src={assets.music} alt="" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={assets.blogs} alt="" />
          <p>Blog</p>
        </div>
        <div className="side-link">
          <img src={assets.news} alt="" />
          <p>News</p>
        </div>
      </div>
      <hr />
      <div className="subscribed-list">
        <h3>SUBSCRIBED</h3>
        <div className="side-link">
          <img src={assets.jack} alt="" />
          <p>Thanos</p>
        </div>
        <div className="side-link">
          <img src={assets.tom} alt="" />
          <p>The Great Khali</p>
        </div>
        <div className="side-link">
          <img src={assets.simon} alt="" />
          <p>Divyesh Gandhi</p>
        </div>
        <div className="side-link">
          <img src={assets.cameron} alt="" />
          <p>Mrunal Thankur</p>
        </div>
        <div className="side-link">
          <img src={assets.megan} alt="" />
          <p>Sizuka</p>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
