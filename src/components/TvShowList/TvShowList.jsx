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
    async function fetchData() {
      await fetchTvShowData(type, currentPage, setTvShowList, setTotalPages);
    }
    fetchData();
  }, [type, currentPage]);

  // Ketika currentPage berubah, reset tvShowList untuk menghindari data yang berkumpul
  useEffect(() => {
    setTvShowList([]);
  }, [currentPage]);

  const renderCards = () => {
    if (!tvShowList) {
      return null; // Tampilkan konten lain atau pesan loading jika tvShowList masih null/undefined
    }

    return tvShowList.map((tvshow, i) => {
      const {
        original_name,
        first_air_date,
        vote_average,
        overview,
        poster_path,
      } = tvshow;

      return (
        <Suspense key={i} fallback={<CardLoader />}>
          <Cards
            LinkTo={`/tvshow/detail/${tvshow.id}`}
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
      <div className="list_cards">
        {/* TVSHOW LIST NAME */}
        <div className="warp_hr_judul1">
          <hr className="garis" />
          <div className="Judul_warp_Up">
            <div className="text_judul">
              {type ? type.toUpperCase() : "POPULAR"}
            </div>
            <div className="gradient"></div>
          </div>
          <hr className="garis" />
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

export default TvShowList;
