import { Link } from "react-router-dom"
import "../Card/Card.css"

const Card = ({movie, movieImage, movieTitle, movieRelese, movieRating, movieDescription}) => {

  const image = import.meta.env.VITE_APP_BASE_IMAGE_URL

  return (
    <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
    <div className="cards">
        <img className="cards_img" src={movieImage} />
        <div className="cards_overlay">
            <div className="card_title">{movieTitle}</div>
            <div className="card_runtime">
                {movieRelese}
                <span className="card_rating">{movieRating}<i className="fas fa-star" /></span>
            </div>
            <div className="card_description">{movieDescription}</div>
        </div>
    </div>
</Link>
  )
}

export default Card