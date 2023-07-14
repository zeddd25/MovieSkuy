const apiKey = import.meta.env.VITE_APP_API_KEY;
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const getMovieList = async (type) => {
  const movieResponse = await fetch(`${baseUrl}/movie/${type}?api_key=${apiKey}&page=30`);
  const movieData = await movieResponse.json();
  return movieData.results;
};

export const getTvShowList = async (type) => {
  const tvshowResponse = await fetch(`${baseUrl}/tv/${type}?api_key=${apiKey}&page=5`);
  const tvshowData = await tvshowResponse.json();
  return tvshowData.results;
};
