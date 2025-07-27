import React from "react";
import "./Home.css";
import SlideBar from "../../Components/SlideBar/SlideBar";
import Feed from "../../Components/Feed/Feed";
const Home = ({ sidebar }) => {
  return (
    <>
      <SlideBar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </>
  );
};

export default Home;
