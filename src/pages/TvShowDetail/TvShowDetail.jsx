import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTvVideoData, fetchtvshowDetail } from "../../utils/ApiUtils";
import "../TvShowDetail/TvShowDetail.css";
import Navbar from "../../components/Navbar/Navbar";
import { getImageUrl } from "../../utils/ImageUtils";
import TvShowHeader from "./TvShowHeader/TvShowHeader";
import VideoPopup from "../../components/VideoPopup/VideoPopup";
import MovieDetailRight from "../MovieDetail/MovieDetailRight/MovieDetailRight";

const TvShowDetail = () => {
  const { id } = useParams();
  const [tvShowDetail, setTvshowDetail] = useState({});
  const [videoData, setVideoData] = useState([]);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  useEffect(() => {
    fetchtvshowDetail(id, setTvshowDetail);
    fetchTvVideoData(id, setVideoData);
  }, [id]);

  // Ambil video pertama sebagai trailer
  const trailerUrl = videoData.length > 0 ? videoData[0]?.key : null;

  const handleWatchTrailerClick = () => {
    setShowVideoPopup(true);
  };

  const handleClosePopup = () => {
    setShowVideoPopup(false);
  };

  console.log("VIDEO NYA", videoData);

  return (
    <>
      <div className="tvshow">
        {/* TVSHOW INTRO BACKDROP */}
        <div className="tvshow_intro">
          <Navbar />
          <img
            className="tvshow_backdrop"
            src={getImageUrl(tvShowDetail?.backdrop_path || "")}
            alt={tvShowDetail?.name || ""}
          />
        </div>
        {/* TVSHOW DETAIL CONTAINER */}
        <div className="tvshow_detail">
          {/* TVSHOW DETAIL HEADER */}
          <TvShowHeader
            tvShowDetail={tvShowDetail}
            officialTrailer={trailerUrl} // Menggunakan trailerUrl sebagai prop
            onWatchTrailerClick={handleWatchTrailerClick}
          />
          {/* POPUP TRAILER TVSHOW */}
          {showVideoPopup && (
            <VideoPopup
              trailerUrl={trailerUrl}
              onClosePopup={handleClosePopup}
            />
          )}
          {/* TVSHOW CAROUSEL VIDEO */}
          <div>
            <MovieDetailRight tvShowId={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TvShowDetail;
