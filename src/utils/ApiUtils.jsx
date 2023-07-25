import { useCallback } from "react";
import { getMovieDetail, getMovieList, getTrendingList, getTvShowList, getVideoData } from "../Api/Api";

export const fetchData = (type, currentPage, timeWindow, initialLoad, setTrendingList, setTotalPages, setInitialLoad) => {
  return useCallback(async () => {
    setTrendingList([]); // Clear the previous data
    const trendingData = await getTrendingList(type || "all", currentPage, timeWindow);
    setTotalPages(trendingData.total_pages);

    // Set trendingList based on initial load state
    if (initialLoad) {
      setTrendingList(trendingData.results);
      setInitialLoad(false);
    } else {
      setTrendingList(trendingData.results);
    }
  }, [type, currentPage, timeWindow, initialLoad, setTrendingList, setTotalPages, setInitialLoad]);
};

export const fetchTvShowData = async (type, currentPage, setTvShowList, setTotalPages) => {
  const tvShowData = await getTvShowList(type || "popular", currentPage);
  setTvShowList(tvShowData.results);
  setTotalPages(tvShowData.total_pages);
  console.log(tvShowData.results);
};

export const fetchMovieData = async (type, currentPage, setMovieList, setTotalPages) => {
  const movieData = await getMovieList(type || "popular", currentPage)
  setMovieList(movieData.results);
  console.log("Movie Data",movieData);
  setTotalPages(movieData.total_pages);
};

export const fetchVideoData = async (id, setDataVideo) => {
  const videoData = await getVideoData(id);
  setDataVideo(videoData.results)
};

export const fetchMovieDetail = async (id, setMovieDetail) => {
  try {
    const movieDetailData = await getMovieDetail(id);
    setMovieDetail(movieDetailData);
  } catch (error) {
    console.error("Error fetching movie detail:", error);
  }
};

