import React from "react";
import "./Home.css";
import SlideBar from "../../Components/SlideBar/SlideBar";
const Home = ({ sidebar }) => {
  return (
    <>
      <SlideBar sidebar={sidebar} />
    </>
  );
};

export default Home;
