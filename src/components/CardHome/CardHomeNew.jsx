import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../CardHome/CardHomeNew.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const CardHomeNew = ({
  movie,
  movieImage,
  movieTitle,
  movieRelese,
  movieRating,
  movieDescription,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards1">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <div className="warp_card_HomeNew">
          <Link
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="warp__ratingBintang">
              {/* {movieRating} */}
              <FontAwesomeIcon icon={faStar} id="icons" />
              <div className="rate2">{movieRating}</div>
            </div>
            {/* Gambar */}
            <div className="warp__imge">
              <img className="cards__imge" src={movieImage} />
            </div>
            {/* Judul */}
            <div className="warp_namaJudul">
              <div className="card__title2">{movieTitle}</div>
              <div className="card__runtime2">{movieRelese}</div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default CardHomeNew;
