const apiKey = import.meta.env.VITE_APP_API_KEY;
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const getMovieList = async (type) => {
  const movieResponse = await fetch(
    `${baseUrl}/movie/${type}?api_key=${apiKey}&page=30`
export const getMovieList = async (type, page) => {
  const movieResponse = await fetch(
    `${baseUrl}/movie/${type}?api_key=${apiKey}&page=${page}`
  );
  const movieData = await movieResponse.json();
  console.log(movieData);
  return movieData;
};

export const getTvShowList = async (type) => {
  const tvshowResponse = await fetch(
    `${baseUrl}/tv/${type}?api_key=${apiKey}&page=5`

export const getTvShowList = async (type, page) => {
  const tvshowResponse = await fetch(
    `${baseUrl}/tv/${type}?api_key=${apiKey}&page=${page}`

  );
  const tvshowData = await tvshowResponse.json();
  return tvshowData;
};
