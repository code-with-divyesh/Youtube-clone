import React, { useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
const NavBar = ({ setSideBar }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search/${query}`);
  };
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          src={assets.menu}
          onClick={() => setSideBar((prev) => (prev === false ? true : false))}
          alt=""
          className="menu-icon"
        />
        <Link to={"/"}>
          <img src={assets.logo} alt="" className="logo" />
        </Link>
      </div>
      <form className="nav-middle flex-div" onSubmit={handleSearch}>
        <div className="search-box flex-div">
          <input
            type="text"
            name=""
            id=""
            placeholder="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <img src={assets.search} alt="" />
        </div>
      </form>
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
