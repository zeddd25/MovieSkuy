import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../MovieList/MovieList.css";
import Navbar from "../Navbar/Navbar";
import CardLoader from "../../utils/CardLoader";
import { getImageUrlPoster } from "../../utils/ImageUtils";
import Pagination from "../Pagination/Pagination";
import { fetchMovieData } from "../../utils/ApiUtils";
import {
  handleNextPage,
  handlePageClick,
  handlePrevPage,
} from "../../utils/PaginationUtils";
import Footer from "../../pages/Home/Footer/Footer";
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
            LinkTo={`/movie/detail/${movie.id}`}
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
    <>
      <div className="wrap_movielist">
        <div className="movie_list">
          <Navbar />
          <div className="list_cards">
            {/* MOVIE LIST NAME */}
            <div className="warp_movielist_title">
              <hr className="movielist_line" />
              <div className="movielist_title">
                <div className="movielist_text">
                  {type ? type.toUpperCase() : "POPULAR"}
                </div>
                <div className="movielist_gradient"></div>
              </div>
              <hr className="movielist_line" />
            </div>
            {/* CARD */}
            <div className="parent_wrap_card">
              <div className="wrap_card">{renderCards()}</div>
            </div>
          </div>
          {/*  */}
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
      <Footer />
    </>
  );
};

export default MovieList;
