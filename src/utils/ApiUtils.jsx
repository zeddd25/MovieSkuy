import { useCallback } from "react";
import {
  getMovieDetail,
  getMovieDetailCast,
  getMovieList,
  getTrendingList,
  getTvShowList,
  getTvVideoData,
  getTvshowDetail,
  getVideoData,
} from "../Api/Api";

export const fetchData = (
  type,
  currentPage,
  timeWindow,
  initialLoad,
  setTrendingList,
  setTotalPages,
  setInitialLoad
) => {
  return useCallback(async () => {
    setTrendingList([]); // Clear the previous data
    const trendingData = await getTrendingList(
      type || "all",
      currentPage,
      timeWindow
    );
    setTotalPages(trendingData.total_pages);

    // Set trendingList based on initial load state
    if (initialLoad) {
      setTrendingList(trendingData.results);
      setInitialLoad(false);
    } else {
      setTrendingList(trendingData.results);
    }
  }, [
    type,
    currentPage,
    timeWindow,
    initialLoad,
    setTrendingList,
    setTotalPages,
    setInitialLoad,
  ]);
};

export const fetchTvShowData = async (
  type,
  currentPage,
  setTvShowList,
  setTotalPages
) => {
  const tvShowData = await getTvShowList(type || "popular", currentPage);
  setTvShowList(tvShowData.results);
  setTotalPages(tvShowData.total_pages);
};

export const fetchMovieData = async (
  type,
  currentPage,
  setMovieList,
  setTotalPages
) => {
  const movieData = await getMovieList(type || "popular", currentPage);
  setMovieList(movieData.results);
  setTotalPages(movieData.total_pages);
};

export const fetchMovieDetail = async (id, setMovieDetail) => {
  try {
    const movieDetailData = await getMovieDetail(id);
    setMovieDetail(movieDetailData);
  } catch (error) {
    console.error("Error fetching movie detail:", error);
  }
};

export const fetchVideoData = async (id, setDataVideo) => {
  const videoData = await getVideoData(id);
  setDataVideo(videoData.results.splice(0, 4));
};

// apiUtils.js
export const fetchMovieDetailCast = async (id, setMovieCast) => {
  const movieCast = await getMovieDetailCast(id);
  setMovieCast(movieCast.cast.slice(0, 10));
};

export const fetchtvshowDetail = async (id, setTvshowDetail) => {
  try {
    const tvshowDetailData = await getTvshowDetail(id);
    setTvshowDetail(tvshowDetailData);
  } catch (error) {
    console.error("Error fetching tvshow detail:", error);
  }
};

export const fetchTvVideoData = async (id, setTvDataVideo) => {
  const TvVideoData = await getTvVideoData(id);
  setTvDataVideo(TvVideoData.results.splice(0, 4));
};


const API_KEY = "a7a276360f82d61084bcdb311cb45b7e"; // Ganti dengan API key Anda

const searchMoviesAndTvShows = async (searchQuery, setSearchResults) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchQuery}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    setSearchResults(data.results);
  } catch (error) {
    console.error("Error searching movies and TV shows:", error);
  }
};

export default searchMoviesAndTvShows;
