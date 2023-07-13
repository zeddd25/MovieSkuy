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
          <span id="font">
          <NavLink to="/movies/now_playing" className="text_dropdown">Now Playing</NavLink>
          <NavLink to="/movies/popular" className="text_dropdown">Popular</NavLink>
          <NavLink to="/movies/top_rated" className="text_dropdown">Top Rated</NavLink>
          <NavLink to="/movies/upcoming" className="text_dropdown">Upcoming</NavLink>
          </span>
          </div>
        </li>
        <li className="movie-list">
        TV Show
          <div className="dropdown_list">
          <span id="font">
          <NavLink to="/movies/now_playing" className="text_dropdown">Now Playing</NavLink>
          <NavLink to="/movies/popular" className="text_dropdown">Popular</NavLink>
          <NavLink to="/movies/top_rated" className="text_dropdown">Top Rated</NavLink>
          <NavLink to="/movies/upcoming" className="text_dropdown">Upcoming</NavLink>
          </span>
          </div>
        </li>
        <li className="movie-list">
        Trending
          <div className="dropdown_list">
          <span id="font">
          <NavLink to="/movies/now_playing" className="text_dropdown">Now Playing</NavLink>
          <NavLink to="/movies/popular" className="text_dropdown">Popular</NavLink>
          <NavLink to="/movies/top_rated" className="text_dropdown">Top Rated</NavLink>
          <NavLink to="/movies/upcoming" className="text_dropdown">Upcoming</NavLink>
          </span>
          </div>
        </li>
        {/* <li>TV Show</li> */}
        {/* <li>Trending</li> */}
      </ul>
    </div>
  );
};

export default Navbar;
