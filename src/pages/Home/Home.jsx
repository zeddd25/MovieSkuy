import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import "../Home/Home.css"
import MovieList from "../../components/MovieList/MovieList"
import Navbar from "../../components/Navbar/Navbar"
import HeroBanner from "../Home/HeroBanner/HeroBanner"

const Home = () => {

  return (
    <div>
      <Navbar />
      <HeroBanner />
    </div>
  )
}

export default Home