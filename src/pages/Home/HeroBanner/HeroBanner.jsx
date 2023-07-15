import React, { Fragment } from "react";
import "../HeroBanner/HeroBanner.css";
import Search from "../../../components/Search/Search";
import Navbar from "../../../components/Navbar/Navbar";

const HeroBanner = () => {
  return (
    <Fragment>
      <div className="warp_banner">
        {/* Text search*/}
        <div className="TextAndSearch">
          {/* Text */}
          <div className="warp_judul">
            <h1 className="sub_judul">WELCOME TO MOVIESKUY</h1>
            <span className="judul">
              <span className="kurus">TEMPAT NONTON </span>
              <span className="besar">FILMS, TV SHOW & DRAMA</span>
            </span>
          </div>
          {/* Search */}
          <Search />
        </div>

        {/* img */}
        <div className="warp_image">
          <img
            className="image"
            src="../src/assets/images/Steam.gif"
            alt="logo"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default HeroBanner;
