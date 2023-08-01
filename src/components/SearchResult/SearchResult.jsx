import React from "react";
import { Link } from "react-router-dom";
import { getImageUrlPoster } from "../../utils/ImageUtils";
import "../SearchResult/SearchResult.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SearchResult = ({ searchResults }) => {
  return (
    <div className="search-result">
      {searchResults.map((result) => (
        <Link
          key={result.id}
          to={result.media_type === "movie" ? `/movie/detail/${result.id}` : `/tvshow/detail/${result.id}`}
        >
          <div className="result-item">
            <img
              src={getImageUrlPoster(result.poster_path)}
              alt={result.title || result.name}
            />
            <div className="result-info">
              <h3>{result.title || result.name}</h3>
              <FontAwesomeIcon className="star" icon={faStar} />
              {result.vote_average !== undefined
              ? result.vote_average.toFixed(1)
              : "N/A"}
              <p>{result.media_type === "movie" ? "Movie" : "TV Show"}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResult;
