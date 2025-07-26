import React from "react";
import "./NavBar.css";
import { assets } from "../../assets";
const NavBar = ({ setSideBar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          src={assets.menu}
          onClick={() => setSideBar((prev) => (prev === false ? true : false))}
          alt=""
          className="menu-icon"
        />
        <img src={assets.logo} alt="" className="logo" />
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" name="" id="" placeholder="search" />
          <img src={assets.search} alt="" />
        </div>
      </div>
      <div className="nav-right flex div">
        <img src={assets.upload} alt="" />
        <img src={assets.more} alt="" />
        <img src={assets.notification} alt="" />
        <img src={assets.jack} alt="" className="user-icon" />
      </div>
    </nav>
  );
};

export default NavBar;
