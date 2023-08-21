import { getImageUrlPoster } from "../../../utils/ImageUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlay, faLink } from "@fortawesome/free-solid-svg-icons";
import "../MovieHeader/MovieHeader.css";
import { NavLink } from "react-router-dom";

const MovieHeader = ({ movieDetail, officialTrailer, onWatchTrailerClick }) => {
  return (
    <div className="movie_header">
      <img
        className="movie_poster"
        src={getImageUrlPoster(movieDetail?.poster_path || "")}
        alt={movieDetail?.title || ""}
      />
      <div>
        <h1 className="movie_title">{movieDetail?.title || ""}</h1>
        <div className="detail_description">
          <span className="vote_average">
            <FontAwesomeIcon className="star" icon={faStar} />
            {movieDetail.vote_average !== undefined
              ? movieDetail.vote_average.toFixed(1)
              : "N/A"}
          </span>
          <span className="runtime">{movieDetail?.runtime + " min" || ""}</span>
          <span className="release_date">
            {movieDetail.release_date?.slice(0, 4) || ""}
          </span>
          <span>{movieDetail?.status || ""}</span>
        </div>
        <div className="wrap_movie_genres">
          <span>Genre :</span>
          {movieDetail.genres?.map((genre) => (
            <span className="movie_genres" key={genre.id}>
              {genre.name}
            </span>
          ))}
        </div>
        <div>
          <p className="overview_text">{movieDetail.overview?.slice(0, 280) + "..." || ""} </p>
          {officialTrailer && (
            <button className="button_trailer" onClick={onWatchTrailerClick}>
              <FontAwesomeIcon icon={faPlay} />
              {/*  */} Watch Trailer
            </button>
          )}
          <NavLink
            target="blank"
            rel="noopener noreferrer"
            to={movieDetail.homepage}
          >
            <button className="button_trailer">
              <FontAwesomeIcon icon={faLink} className="link_icon" />
              {/*  */} Visit Homepage
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovieHeader;
