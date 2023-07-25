import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../MovieList/MovieList.css";
import Navbar from "../Navbar/Navbar";
import CardLoader from "../../utils/CardLoader";
import { getImageUrlPoster } from "../../utils/ImageUtils";
import Pagination from "../Pagination/Pagination";
import { fetchMovieData, fetchVideoData } from "../../utils/ApiUtils";
import {
  handleNextPage,
  handlePageClick,
  handlePrevPage,
} from "../../utils/PaginationUtils";
const Cards = React.lazy(() => import("../Card/Card"));

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
    setMovieList([]);
    setCurrentPage(1);
  }, [type]);

  useEffect(() => {
    fetchMovieData(type, currentPage, setMovieList, setTotalPages); // Use the fetchData function here
  }, [type, currentPage]);

  // Ketika currentPage berubah, reset movieList untuk menghindari data yang berkumpul
  useEffect(() => {
    setMovieList([]);
  }, [currentPage]);

  const renderCards = () => {
    return movieList.map((movie, i) => {
      const {
        original_title,
        release_date,
        vote_average,
        overview,
        poster_path,
      } = movie;

      return (
        <Suspense fallback={<CardLoader />} key={i}>
          <Cards
            movie={movie}
            movieTitle={original_title || ""}
            movieRelese={release_date || ""}
            movieRating={vote_average || ""}
            movieDescription={overview ? `${overview.slice(0, 118)}...` : ""}
            movieImage={getImageUrlPoster(poster_path || "")}
          />
        </Suspense>
      );
    });
  };

return (
    <div className="container">
      <Navbar />
      <div className="movie_list">
        {/* Button-Title */}
        <div className="container_button_title">
        <h2 className="list_title">{type ? type.toUpperCase() : "POPULAR"}</h2>
        </div>
        {/* Card */}
        <div className="list_cards">{renderCards()}</div>
        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevPage={() => handlePrevPage(currentPage, setCurrentPage)}
          handleNextPage={() =>
            handleNextPage(currentPage, totalPages, setCurrentPage)
          }
          handlePageClick={(page) => handlePageClick(page, setCurrentPage)}
        />
      </div>
    </div>
  );
};

export default MovieList;
