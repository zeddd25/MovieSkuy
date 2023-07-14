import "../src/styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MovieList from "./components/MovieList/MovieList";
import TvShowList from "./components/TvShowList/TvShowList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movie/:id" element={<h1 style={{color: "white"}}>Movie detail page</h1>}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        <Route path="tvshow/:type" element={<TvShowList />}></Route>
        <Route path="/*" element={<h1>error pages!!</h1>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
