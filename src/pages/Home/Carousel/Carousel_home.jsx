import "../Carousel/Carousel_home.css";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";

const Carousel_home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={1}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
          showIndicators={true}
        >
          {popularMovies.map((movie, i) => (
            <div className="warp_carousel" key={i}>
              <span className="posterImage_"></span>
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  <span className="posterImage__date">
                    {movie ? movie.release_date : ""}
                  </span>
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie?.overview?.slice(0, 308) + "..." || ""}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        {/* <MovieList /> */}
      </div>
    </>
  );
};

export default Carousel_home;
