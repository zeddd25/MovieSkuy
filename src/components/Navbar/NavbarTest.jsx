import { useState } from "react";
import "../Navbar/NavbarTest.css";
import { NavLink } from "react-router-dom";

// komponent dropdown list untuk navbar
const DropdownList = ({ items }) => {
  return (
    <div className="dropdown_list">
      <span>
        {items.map((item) => (
          <NavLink to={item.url} className="text_dropdown" key={item.id}>
            ▶{item.label}
          </NavLink>
        ))}
      </span>
    </div>
  );
};

// KOMPONEN NAVBAR
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const movieItems = [
    { id: 1, url: "/movies/top_rated", label: "Top Rated" },
    { id: 2, url: "/movies/popular", label: "Popular" },
    { id: 3, url: "/movies/upcoming", label: "Upcoming" },
    { id: 4, url: "/movies/now_playing", label: "Now Playing" },
  ];

  const tvShowItems = [
    { id: 1, url: "/tvshow/airing_today", label: "Airing Today" },
    { id: 2, url: "/tvshow/on_the_air", label: "On the Air" },
    { id: 3, url: "/tvshow/popular", label: "Popular" },
    { id: 4, url: "/tvshow/top_rated", label: "Top Rated" },
  ];

  const trendingItems = [
    { id: 1, url: "/trending/all", label: "All" },
    { id: 2, url: "/trending/movie", label: "Movie" },
    { id: 3, url: "/trending/person", label: "Person" },
    { id: 4, url: "/trending/tv", label: "Tv" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="wrap_navbar_home">
      <div className="navbar_home">
        {/* LOGO */}
        <div>
          <NavLink to="/" className="logo">
            <img src="../../src/assets/images/MovieSkuys.png" alt="logo" />
          </NavLink>
        </div>
        {/* DROPDOWN LIST */}
        <div className="wrap_dropdown">
          <span className={`menu_drop ${isMenuOpen ? "active" : ""}`}>
            <span className="movie-list">
              Movie List
              <DropdownList items={movieItems} />
            </span>
            <span className="movie-list">
              TV Show
              <DropdownList items={tvShowItems} />
            </span>
            <span className="movie-list">
              Trending
              <DropdownList items={trendingItems} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
