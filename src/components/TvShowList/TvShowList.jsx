import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../TvShowList/TvShowList.css"
import Card from "../Card/Card";
import { getTvShowList } from "../../Api/Api";
import Navbar from "../Navbar/Navbar";

const TvShowList = () => {
  const [tvShowList, setTvShowList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const tvshow = await getTvShowList(type || "popular");
      setTvShowList(tvshow);
    };

    fetchData();
  }, [type]);

  const image = import.meta.env.VITE_APP_BASE_IMAGE_URL;

  return (
    <>
      <Navbar />
      <div className="movie_list">
        <h2 className="list_title">
          {(type ? type : "POPULAR").toUpperCase()}
        </h2>
        <div className="list_cards">
          {tvShowList.map((tvshow, i) => (
            <Card
              key={i}
              movie={tvshow}
              movieTitle={tvshow?tvshow.original_name:""}
              movieRelese={tvshow?tvshow.release_date:""}
              movieRating={tvshow?tvshow.vote_average:""}
              movieDescription={tvshow ? tvshow.overview.slice(0,118)+"..." : ""}
              movieImage={`${image}${tvshow ? tvshow.poster_path : ""}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TvShowList;
