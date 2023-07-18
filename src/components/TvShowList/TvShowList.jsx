import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../TvShowList/TvShowList.css";
import Card from "../Card/Card";
import { getTvShowList } from "../../Api/Api";
import Navbar from "../Navbar/Navbar";

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
    const fetchData = async () => {
      const tvShowData = await getTvShowList(type || "popular", currentPage);
      setTvShowList((prevList) => [...prevList, ...tvShowData.results]);
      setTotalPages(tvShowData.total_pages);
    };

    fetchData();
  }, [type, currentPage]);

  const image = import.meta.env.VITE_APP_BASE_IMAGE_URL;

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };


  return (
    <div className="container">
      <Navbar />
      <div className="tvshow_list">
        <h2 className="list_title">{type ? type.toUpperCase() : "POPULAR"}</h2>
        <div className="list_cards">
          {tvShowList.map((tvshow, i) => (
            <Card
              key={i}
              movie={tvshow}
              movieTitle={tvshow?.original_name || ""}
              movieRelese={tvshow?.release_date || ""}
              movieRating={tvshow?.vote_average || ""}
              movieDescription={tvshow?.overview?.slice(0, 118) + "..." || ""}
              movieImage={`${image}${tvshow?.poster_path || ""}`}
            />
          ))}
        </div>
        <div className="button_container">
          {currentPage < totalPages && (
            <button onClick={handleLoadMore} className="load_more_button">
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TvShowList;
