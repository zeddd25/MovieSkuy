import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetail } from "../../utils/ApiUtils";
import "../MovieDetail/MovieDetail.css";
import Navbar from "../../components/Navbar/Navbar";
import { getImageUrl, getImageUrlPoster } from "../../utils/ImageUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchMovieDetail(id, setMovieDetail);
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="movie">
        {/*  */}
        <div className="movie_intro">
          <img
            className="movie_backdrop"
            src={getImageUrl(movieDetail?.backdrop_path || "")}
            alt={movieDetail?.title || ""}
          />
        </div>
        {/*  */}
        <div className="movie_detail">
          <div className="movie_detailLeft">
            <div className="">
              <img
                className="movie_poster"
                src={getImageUrlPoster(movieDetail?.poster_path || "")}
                alt={movieDetail?.title || ""}
              />
            </div>
          </div>
          {/*  */}
          <div className="movie_detailRight">
            <h1 className="movie_title">{movieDetail?.title || ""}</h1>
            <h1 className="movie_trailer">Wacth Trailer</h1>
            {/*  */}
            <div className="detail_description">
            <span className="vote_average">
            <FontAwesomeIcon className="star" icon={faStar} />
            {movieDetail.vote_average !== undefined ? movieDetail.vote_average.toFixed(1) : "N/A"}</span>
            <span className="runtime">{movieDetail?.runtime + " mins" || ""}</span>
            <span className="release_date">{movieDetail.release_date}</span>
            </div>
            {/*  */}
            <div className="container_movie_genres">
              <span>Genre :</span>
              {movieDetail && movieDetail.genres
                ? movieDetail.genres.map((genre) => (
                    <>
                      <span className="movie_genres" id={genre.id}>{genre.name}</span>
                    </>
                  ))
                : ""}
            </div>
            <p className="overview_text">{movieDetail.overview}</p>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default MovieDetail;
