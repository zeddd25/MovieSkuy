import React, { Fragment } from "react";
import "../HeroBanner/HeroBanner.css";

const HeroBanner = () => {
  return (
    <Fragment>
      <div className="warp_banner">
        {/* Text */}
        <div>
          <p className="sub_judul">WELCOME TO MOVIESKUY</p>
          <p className="judul">
            <span className="kurus">TEMPAT NONTON FILMS</span>
            <span className="besar">, TV SHOW & DRAMA</span>
          </p>
        </div>
        {/* img */}
        <div></div>
      </div>
    </Fragment>
  );
};

export default HeroBanner;
