
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import "../Home/Home.css"
import Navbar from "../../components/Navbar/Navbar"
import MovieList from "../../components/MovieList/MovieList"
import TvShowList from "../../components/TvShowList/TvShowList"

const Home = () => {
  return (
    <div>
      <Navbar />
      <MovieList />
import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import "../Home/Home.css";
import MovieList from "../../components/Movielist/MovieList";
// Component
import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "./HeroBanner/HeroBanner";

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
      <Navbar />
      <HeroBanner />
      <MovieList />
    </div>
  );
};

export default Home;
