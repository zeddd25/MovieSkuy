import React, { useEffect, useState } from "react";
import { fetchMovieDetailCast } from "../../../utils/ApiUtils";
import "./CastList.css";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DefaultImage from "../../../assets/images/ghost.gif"; 


const CastList = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieDetailCast(id, setMovieCast);
  }, [id]);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  const handleImageError = (e) => {
    e.target.src = DefaultImage; 
  };

  return (
    <div className="movie_cast">
      <div className="title_cast">
        <h2>Top Cast</h2>
      </div>
      <Slider {...sliderSettings}>
        {movieCast.map((cast) => (
          <>
            {/*  */}
            <div key={cast.id} className="cast_item">
              <img
                className="cast_profile"
                src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                loading="lazy"
                onError={handleImageError}
              />
              {/*  */}
              <div className="wrap_cast">
                <p className="cast_name">{cast.name}</p>
                <p className="cast_character">{cast.character}</p>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default CastList;
