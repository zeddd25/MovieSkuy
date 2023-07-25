import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../TvShowList/TvShowList.css";
import Navbar from "../Navbar/Navbar";
import CardLoader from "../../utils/CardLoader";
import { getImageUrlPoster } from "../../utils/ImageUtils";
import Pagination from "../Pagination/Pagination";
import {
  handlePrevPage,
  handleNextPage,
  handlePageClick,
} from "../../utils/PaginationUtils";
import { fetchTvShowData } from "../../utils/ApiUtils";
const Cards = React.lazy(() => import("../Card/Card"));

const TvShowList = () => {
  const [tvShowList, setTvShowList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { type } = useParams();

  useEffect(() => {
    setTvShowList([]);
    setCurrentPage(1);
  }, [type]);

  useEffect(() => {
    fetchTvShowData(type, currentPage, setTvShowList, setTotalPages); // Use the fetchData function here
  }, [type, currentPage]);

  // Ketika currentPage berubah, reset tvShowList untuk menghindari data yang berkumpul
  useEffect(() => {
    setTvShowList([]);
  }, [currentPage]);

  const renderCards = () => {
    return tvShowList.map((tvshow, i) => {
      const {
        original_name,
        first_air_date,
        vote_average,
        overview,
        poster_path,
      } = tvshow;

      return (
        <Suspense fallback={<CardLoader />} key={i}>
          <Cards
            movie={tvshow}
            movieTitle={original_name || ""}
            movieRelese={first_air_date || ""}
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
      <div className="tvshow_list">
        {/* Button-Title */}
        <div className="container_button_title">
          <h2 className="list_title">
            {type ? type.toUpperCase() : "POPULAR"}</h2>
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

export default TvShowList;
