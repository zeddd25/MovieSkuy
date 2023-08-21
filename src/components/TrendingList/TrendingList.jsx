import React, { useEffect, useState, useCallback, Suspense } from "react";
import { useParams } from "react-router-dom";
import "../TrendingList/TrendingList.css";
import Navbar from "../Navbar/Navbar";
import CardLoader from "../../utils/CardLoader";
import Pagination from "../Pagination/Pagination";
import { getImageUrlPoster } from "../../utils/ImageUtils";
import { fetchData } from "../../utils/ApiUtils";
import TimeWindowButtons from "../TimeWindowButtons/TimeWindowButtons";
import {
  handlePrevPage,
  handleNextPage,
  handlePageClick,
} from "../../utils/PaginationUtils";
const Cards = React.lazy(() => import("../Card/Card"));

const TrendingList = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [timeWindow, setTimeWindow] = useState("day"); // Default time window is "day"
  const [initialLoad, setInitialLoad] = useState(true); // Initial load state
  const { type } = useParams();

  const fetchTrendingData = fetchData(
    type,
    currentPage,
    timeWindow,
    initialLoad,
    setTrendingList,
    setTotalPages,
    setInitialLoad
  );

  useEffect(() => {
    setTrendingList([]);
    setCurrentPage(1);
    setInitialLoad(true);
  }, [type, timeWindow]);

  useEffect(() => {
    fetchTrendingData(); // Panggil fungsi fetchData dari useEffect
  }, [currentPage, fetchTrendingData]);

  const handleTimeWindowChange = useCallback((newTimeWindow) => {
    setTimeWindow(newTimeWindow);
    setCurrentPage(1); // Reset page number when time window changes
  }, []);

  const renderCards = () => {
    return trendingList.map((trending, i) => {
      const {
        original_title,
        original_name,
        release_date,
        first_air_date,
        known_for_department,
        vote_average,
        popularity,
        overview,
        media_type,
      } = trending;

      const isMovie = media_type === "movie";

      return (
        <Suspense fallback={<CardLoader />} key={i}>
          <Cards
            LinkTo={
              isMovie
                ? `/movie/detail/${trending.id}`
                : `/tvshow/detail/${trending.id}`
            }
            movie={trending}
            movieTitle={original_title || original_name}
            movieRelese={release_date || first_air_date || known_for_department}
            movieRating={vote_average || popularity}
            movieDescription={
              overview ? `${overview.slice(0, 118)}...` : media_type
            }
            movieImage={getImageUrlPoster(
              trending?.poster_path || trending.profile_path
            )}
          />
        </Suspense>
      );
    });
  };

  return (
    <div className="container">
      <Navbar />
      <div className="trending_list">
      <div className="list_cards">
        <div className="container_button_title">
        {/* TRENDINGLIST LIST NAME */}
        <div className="warp_hr_judul1">
            <hr className="garis" />
            <div className="Judul_warp_Up">
              <div className="text_judul">{type ? type.toUpperCase() : "POPULAR"}</div>
              <div className="gradient"></div>
            </div>
            <hr className="garis" />
          </div>
          {/* BUTTON TIME WINDOW */}
          <div className="wrap_button_time">
          <TimeWindowButtons
            timeWindow={timeWindow}
            handleTimeWindowChange={handleTimeWindowChange}
          />
          </div>
        </div>
        {/* Card */}
        <div className="wrap_card">{renderCards()}</div>
        </div>
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

export default TrendingList;
