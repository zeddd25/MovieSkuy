import "../src/styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MovieList from "./components/MovieList/MovieList";
import TvShowList from "./components/TvShowList/TvShowList";
import TrendingList from "./components/TrendingList/TrendingList";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import TvShowDetail from "./pages/TvShowDetail/TvShowDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        <Route path="tvshow/:type" element={<TvShowList />}></Route>
        <Route path="trending/:type" element={<TrendingList />}></Route>
        <Route path="movie/detail/:id" element={<MovieDetail />}></Route>
        <Route path="tvshow/detail/:id" element={<TvShowDetail />} />
        <Route path="upcoming/detail/:id" element={<MovieDetail />}></Route>
        <Route path="/*" element={<h1>error pages!!</h1>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
