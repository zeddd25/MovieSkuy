import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import "../MovieList/MovieList.css";
import { getMovieList } from "../../Api/Api";
import Navbar from "../Navbar/Navbar";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { type } = useParams();

  useEffect(() => {
    setMovieList([]);
    setCurrentPage(1);
  }, [type]);


  useEffect(() => {
    const fetchData = async () => {
      const movieData = await getMovieList(type || "popular", currentPage);
      setMovieList((prevList) => [...prevList, ...movieData.results]);
      setTotalPages(movieData.total_pages);
    };

    fetchData();
  }, [type, currentPage]);

  const imageBaseUrl = import.meta.env.VITE_APP_BASE_IMAGE_URL;

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="movie_list">
        <h2 className="list_title">{type ? type.toUpperCase() : "POPULAR"}</h2>
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
        <div className="button_container">
        {currentPage < totalPages && (
          <button onClick={handleLoadMore} className="load_more_button">
            Load More
          </button>
        )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
