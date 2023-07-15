import "../Navbar/Navbar.css";
import { NavLink } from "react-router-dom";

// komponent dropdown list untuk navbar
const DropdownList = ({ items }) => {
  return (
    <div className="dropdown_list">
      <span>
        {items.map((item) => (
          <NavLink to={item.url} className="text_dropdown" key={item.id}>
            {item.icon} {item.label}
          </NavLink>
        ))}
      </span>
    </div>
  );
};

// komponent navbar
const Navbar = () => {
  const movieItems = [
    { id: 1, url: "/movies/top_rated", label: "Top Rated", icon: "🎥" },
    { id: 2, url: "/movies/popular", label: "Popular", icon: "🎥" },
    { id: 3, url: "/movies/upcoming", label: "Upcoming", icon: "🎥" },
    { id: 4, url: "/movies/now_playing", label: "Now Playing", icon: "🎥" },
  ];

  const tvShowItems = [
    { id: 1, url: "/tvshow/airing_today", label: "Airing Today" },
    { id: 2, url: "/tvshow/on_the_air", label: "On the Air" },
    { id: 3, url: "/tvshow/popular", label: "Popular" },
    { id: 4, url: "/tvshow/top_rated", label: "Top Rated" },
  ];

  const trendingItems = [
    { id: 1, url: "/movies/now_playing", label: "Now Playing" },
    { id: 2, url: "/movies/popular", label: "Popular" },
    { id: 3, url: "/movies/top_rated", label: "Top Rated" },
    { id: 4, url: "/movies/upcoming", label: "Upcoming" },
  ];

  return (
    <div className="container">
      <div className="navbar">
        <NavLink to={"/"} className="logo">
          <img src="../src/assets/images/MovieSkuys.png" alt="logo" />
        </NavLink>
        <ul>
          <div className="movie-list">
            Movie List
            <DropdownList items={movieItems} />
          </div>
          <li className="movie-list">
            TV Show
            <DropdownList items={tvShowItems} />
          </li>
          <li className="movie-list">
            Trending
            <DropdownList items={trendingItems} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
