import React from "react";
import "../Search/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div>
      <div className="warp_search">
        <input
          className="search"
          type="text"
          placeholder="Cari films,"
        ></input>
        <FontAwesomeIcon className="icons" icon={faMagnifyingGlass} />
      </div>
    </div>
  );
};

export default Search;
