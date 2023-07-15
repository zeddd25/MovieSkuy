import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../Card/Card.css";
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
        <div className="cards">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <div className="cards">
          <Link
            to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <img className="cards__img" src={movieImage} />
            <div className="cards__overlay">
              <div className="card__title">{movieTitle}</div>
              <div className="card__runtime">
                {movieRelese}
                <span className="card__rating">
                  {movieRating}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card__description">{movieDescription}</div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Card;
