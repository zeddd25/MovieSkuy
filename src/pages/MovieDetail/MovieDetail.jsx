import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetail, fetchVideoData } from "../../utils/ApiUtils";
import "../MovieDetail/MovieDetail.css";
import Navbar from "../../components/Navbar/Navbar";
import { getImageUrl } from "../../utils/ImageUtils";
import MovieHeader from "./MovieHeader/MovieHeader";
import VideoPopup from "../../components/VideoPopup/VideoPopup";
import MovieDetailRight from "./MovieDetailRight/MovieDetailRight";
import CastList from "./CastList/CastList";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [videoData, setVideoData] = useState([]);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await fetchMovieDetail(id, setMovieDetail);
      await fetchVideoData(id, setVideoData);
    }
    fetchData();
  }, [id]);

  console.log(movieDetail);

  const officialTrailer = videoData.find(
    (video) => video.name === "Official Trailer"
  );

  const trailerUrl = officialTrailer?.key || null;

  const handleWatchTrailerClick = () => {
    setShowVideoPopup(true);
  };

  const handleClosePopup = () => {
    setShowVideoPopup(false);
  };

  return (
    <>
      <Navbar />
      <div className="movie">
        {/* <Navbar /> */}
        {/* MOVIE INTRO BACKDROP */}
        <div className="movie_intro">
          <img
            className="movie_backdrop"
            src={getImageUrl(movieDetail?.backdrop_path || "")}
            alt={movieDetail?.title || ""}
          />
        </div>
        {/* MOVIE DETAIL CONTAINER */}
        <div className="movie_detail">
          {/* MOVIE DETAIL HEADER */}
          <MovieHeader
            movieDetail={movieDetail}
            officialTrailer={officialTrailer}
            onWatchTrailerClick={handleWatchTrailerClick}
          />
          {/* POPUP TRAILER MOVIE */}
          {showVideoPopup && (
            <VideoPopup
              trailerUrl={trailerUrl}
              onClosePopup={handleClosePopup}
            />
          )}
          {/* MOVIE CAROUSEL VIDEO */}
          <div>
            <MovieDetailRight movieId={id} />
          </div>
        </div>
        {/* MOVIE CAST LIST */}
        <div className="movie_detail">
          <CastList />
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
