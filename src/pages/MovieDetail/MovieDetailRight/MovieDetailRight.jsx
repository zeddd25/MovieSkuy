import CarouselVideo from "../../../components/CarouselVideo/CarouselVideo";

const MovieDetailRight = ({ movieId }) => {
  return (
    <div className="movie_detailRight">
      <CarouselVideo movieId={movieId} />
    </div>
  );
};

export default MovieDetailRight;
