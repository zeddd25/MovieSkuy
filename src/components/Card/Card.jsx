import "../Card/Card.css";
import { Link } from "react-router-dom";
import DefaultImage from "../../assets/images/ghost.gif"; 

const Card = ({
  LinkTo,
  movieImage,
  movieTitle,
  movieRelese,
  movieRating,
  movieDescription,
}) => {
  const handleImageError = (e) => {
    // Handle image loading error
    e.target.src = DefaultImage; // Set the source to the default image from local file
  };

  return (
    <div className="cards">
      <Link
        to={LinkTo}
        style={{ textDecoration: "none", color: "white" }}
      >
        <img
          className="cards__img"
          src={movieImage}
          alt={movieTitle}
          loading="lazy"
          onError={handleImageError} // Call the handleImageError function on image loading error
        />
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
  );
};

export default Card;
