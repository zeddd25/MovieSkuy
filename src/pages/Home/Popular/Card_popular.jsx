import React, { useEffect, useState, Component } from "react";
import "../Popular/Card_popular.css";
import { useParams } from "react-router-dom";
import Card from "../../../components/Card/Card";
import CardHome from "../../../components/CardHome/CardHome";
import CardHomeNew from "../../../components/CardHome/CardHomeNew";
// React Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card_popular = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  const imageBaseUrl = import.meta.env.VITE_APP_BASE_IMAGE_URL;

  // React Slidet
  const settings = {
    useTransform: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="warp_popular">
      {/* Judl Card */}
      <div className="warp_judul_show">
        {/* Judul */}
        <div className="warp_hr_judul2">
          <div className="Judul_warp_Up2">
            <div className="text_judul2">POPULAR</div>
            <div className="gradient2"></div>
          </div>
        </div>
        {/* Show */}
        <div className="warp_hr_judul3">
          <div className="Judul_warp_Up3">
            <div className="text_judul3">Show More</div>
            {/* <div className="gradient3"></div> */}
          </div>
        </div>
      </div>
      {/* Card warp*/}
      {/* <div className="Card_warp"> */}
      <Slider {...settings} className="">
        {movieList.map((movie, i) => (
          <div className="Card_warp " key={i}>
            <CardHomeNew
              key={i}
              movie={movie}
              movieTitle={movie?.original_title || ""}
              movieRelese={movie?.release_date || ""}
              movieRating={movie?.vote_average || ""}
              movieDescription={movie?.overview?.slice(0, 118) + "..." || ""}
              movieImage={`${imageBaseUrl}${movie?.poster_path || ""}`}
            />
          </div>
        ))}
      </Slider>
      {/* </div> */}
    </div>
  );
};

export default Card_popular;
