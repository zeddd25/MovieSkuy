import React from "react";
import "../Navbar/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/"} className="logo">
        <img src="../src/assets/images/MovieSkuys.png" alt="logo" />
      </NavLink>
      <ul>
        <li className="movie-list">
          Movie List
          <div className="dropdown_list">
          <span>
          <NavLink to="/movies/now_playing" style={{textDecoration: "none", color: "black"}}>Now Playing</NavLink>
          <NavLink to="/movies/popular" style={{textDecoration: "none" , color: "black"}}>Popular</NavLink>
          <NavLink to="/movies/top_rated" style={{textDecoration: "none" , color: "black"}}>Top Rated</NavLink>
          <NavLink to="/movies/upcoming" style={{textDecoration: "none" , color: "black"}}>Upcoming</NavLink>
          </span>
          </div>
        </li>
        <li>TV Show</li>
        <li>Trending</li>
      </ul>
    </div>
  );
};

export default Navbar;
