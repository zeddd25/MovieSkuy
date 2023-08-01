import { getImageUrlPoster } from "../../../utils/ImageUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlay, faLink } from "@fortawesome/free-solid-svg-icons";
import "../TvShowHeader/TvShowHeader.css";
import { NavLink } from "react-router-dom";

const TvShowHeader = ({
  tvShowDetail,
  officialTrailer,
  onWatchTrailerClick,
}) => {
  const isTrailerAvailable = officialTrailer !== null;

  return (
    <div className="tvshow_header">
      <img
        className="tvshow_poster"
        src={getImageUrlPoster(tvShowDetail?.poster_path || "")}
        alt={tvShowDetail?.name || ""}
      />
      <div>
        <h1 className="tvshow_title">{`${tvShowDetail?.name}  ${tvShowDetail?.first_air_date?.slice(0, 4)}`}</h1>
        <div className="tvshow_description">
          <span className="tvshow_vote_average">
            <FontAwesomeIcon className="star" icon={faStar} />
            {tvShowDetail.vote_average !== undefined
              ? tvShowDetail.vote_average.toFixed(1)
              : "N/A"}
          </span>
          <span className="tvshow_runtime">
            {tvShowDetail?.number_of_episodes + " episode" || ""}
          </span>
          <span>{tvShowDetail?.status || ""}</span>
        </div>
        <div className="wrap_tvshow_genres">
          <span>Genre :</span>
          {tvShowDetail.genres?.map((genre) => (
            <span className="tvshow_genres" key={genre.id}>
              {genre.name}
            </span>
          ))}
        </div>
        <div>
          <p className="overview_text">{tvShowDetail.overview}...</p>
        </div>
        <div className="tvshow_buttons">
          {isTrailerAvailable && (
            <button className="button_trailer" onClick={onWatchTrailerClick}>
              <FontAwesomeIcon icon={faPlay} />
              {/*  */} Watch Trailer
            </button>
          )}
          {tvShowDetail.homepage && (
            <NavLink
              target="_blank"
              rel="noopener noreferrer"
              to={tvShowDetail.homepage}
            >
              <button className="button_trailer">
                <FontAwesomeIcon icon={faLink} className="link_icon" />
                {/*  */} Visit Homepage
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default TvShowHeader;
