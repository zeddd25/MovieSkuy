import React, { useState } from "react";
import "../Search/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchResult from "../SearchResult/SearchResult";
import searchMoviesAndTvShows from "../../utils/ApiUtils";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Perform search and update results
    searchMoviesAndTvShows(query, setSearchResults);
  };

  return (
    <div className="warp_search_results">
      <div className="warp_search">
        <input
          className="search"
          type="text"
          placeholder="Cari films,"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <FontAwesomeIcon className="icons" icon={faMagnifyingGlass} />
      </div>
        <SearchResult searchResults={searchResults} />
    </div>
  );
};

export default Search;
