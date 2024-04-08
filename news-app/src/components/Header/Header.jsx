import "./Header.css";
import { Link } from "react-router-dom";
import React from "react";
import SearchBar from "../Search/Search";

function Header({ onSearch }) {
  return (
    <div className="header">
      <div className="text">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>News App📰</h1>
        </Link>
        <h4>Stay Informed. Stay Ahead. Your World, Our News.</h4>
      </div>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
}

export default Header;
