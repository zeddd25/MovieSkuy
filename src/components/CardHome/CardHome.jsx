import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./CardHome.css";
import { Link } from "react-router-dom";

const Card = ({
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
        <div className="cardsHome1">
          <Link
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <img className="cards__img1" src={movieImage} />
            <div className="cards__overlay1">
              <div className="card__title1">{movieTitle}</div>
              <div className="card__runtime1">
                {movieRelese}
                <span className="card__rating1">
                  {movieRating}
                  <i className="fas fa-star1" />
                </span>
              </div>
              <div className="card__description1">{movieDescription}</div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Card;
