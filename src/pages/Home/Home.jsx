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
    </div>
  )
}

export default Home