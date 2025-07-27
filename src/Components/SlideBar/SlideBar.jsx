import React from "react";
import { assets } from "../../assets";
import "./SlideBar.css";

const SlideBar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-link ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <img src={assets.home} alt="" />
          <p>Home</p>
        </div>
        <div
          className={`side-link ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <img src={assets.game} alt="" />
          <p>Gaming</p>
        </div>
        <div
          className={`side-link ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <img src={assets.automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <img src={assets.sports} alt="" />
          <p>Sports</p>
        </div>
        <div
          className={`side-link ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <img src={assets.entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div
          className={`side-link ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <img src={assets.tech} alt="" />
          <p>Technology</p>
        </div>
        <div
          className={`side-link ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <img src={assets.music} alt="" />
          <p>Music</p>
        </div>
        <div
          className={`side-link ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <img src={assets.blogs} alt="" />
          <p>Blog</p>
        </div>
        <div
          className={`side-link ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
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
