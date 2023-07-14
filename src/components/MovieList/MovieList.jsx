import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import "../MovieList/MovieList.css";
import { getMovieList } from "../../Api/Api";
import Navbar from "../Navbar/Navbar";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovieList(type || "popular");
      setMovieList(movies);
    };

    fetchData();
  }, [type]);

  const imageBaseUrl = import.meta.env.VITE_APP_BASE_IMAGE_URL;

  return (
    <>
    <Navbar />  
        <div className="movie_list">
          {/* <h2 className="list_title">
            {(type ? type : "POPULAR").toUpperCase()}
          </h2> */}
          <div className="list_cards">
            {movieList.map((movie, i) => (
              <Card
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
    </>
  );
};

export default MovieList;
