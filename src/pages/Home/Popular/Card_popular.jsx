import React, { useEffect, useState } from "react";
import "../Popular/Card_popular.css";
import { useParams } from "react-router-dom";
import Card from "../../../components/Card/Card";
import CardHome from "../../../components/CardHome/CardHome";
import CardHomeNew from "../../../components/CardHome/CardHomeNew";

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

  return (
    <div className="warp_popular">
      {/* Judl Card */}
      <div className="Judul_warp">
        <h1 className="text_judul">POPULAR</h1>
      </div>
      {/* Card warp*/}
      <div className="Card_warp">
        {movieList.map((movie, i) => (
          <CardHomeNew
            key={i}
            movie={movie}
            movieTitle={movie?.original_title || ""}
            movieRelese={movie?.release_date || ""}
            movieRating={movie?.vote_average || ""}
            movieDescription={movie?.overview?.slice(0, 118) + "..." || ""}
            movieImage={`${imageBaseUrl}${movie?.poster_path || ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Card_popular;
