import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Home/Home.css";
import MovieList from "../../components/Movielist/MovieList";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a7a276360f82d61084bcdb311cb45b7e"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <div>
      <MovieList />
      <Navbar />
      <div className="container">
        {popularMovies.map((movie) => (
          <div>
            <h3>{movie ? movie.original_title : ""}</h3>
            <img
              src={`https://image.tmdb.org/t/p/original${
                movie && movie.backdrop_path
              }`}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
