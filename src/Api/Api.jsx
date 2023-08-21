const apiKey = import.meta.env.VITE_APP_API_KEY;
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

export const getMovieList = async (type, page) => {
  const movieResponse = await fetch(
    `${baseUrl}/movie/${type}?api_key=${apiKey}&append_to_response=videos&page=${page}`
  );
  const movieData = await movieResponse.json();
  return movieData;
};

export const getTvShowList = async (type, page) => {
  const tvshowResponse = await fetch(
    `${baseUrl}/tv/${type}?api_key=${apiKey}&page=${page}`
  );
  const tvshowData = await tvshowResponse.json();
  return tvshowData;
};

export const getTrendingList = async (type, page, timeWindow) => {
  const trendingResponse = await fetch(
    `${baseUrl}/trending/${type}/${timeWindow}?api_key=${apiKey}&page=${page}`
  );
  const trendingData = await trendingResponse.json();
  return trendingData;
};

{
  /*  */
}
export const getMovieDetail = async (id) => {
  const movieDetailResponse = await fetch(
    `${baseUrl}/movie/${id}?api_key=${apiKey}`
  );
  const movieDetailData = await movieDetailResponse.json();
  return movieDetailData;
};

export const getVideoData = async (id) => {
  const videoDataResponse = await fetch(
    `${baseUrl}/movie/${id}/videos?api_key=${apiKey}`
  );
  const videoData = await videoDataResponse.json();
  return videoData;
};

export const getMovieDetailCast = async (id) => {
  const response = await fetch(
    `${baseUrl}/movie/${id}/credits?api_key=${apiKey}`
  );
  const data = await response.json();
  return data;
};
{
  /*  */
}

export const getTvshowDetail = async (id) => {
  const tvshowDetailResponse = await fetch(
    `${baseUrl}/tv/${id}?api_key=${apiKey}`
  );
  const tvshowDetailData = await tvshowDetailResponse.json();
  return tvshowDetailData;
};

export const getTvVideoData = async (id) => {
  const response = await fetch(`${baseUrl}/tv/${id}/videos?api_key=${apiKey}`);
  const videoData = await response.json();
  return videoData; 
};

// import axios from "axios";

// export const getTrendingList = async (type, page, timeWindow) => {
//   try {
//     const response = await axios.get(
//       `${baseUrl}/trending/${type}/${timeWindow}?api_key=${apiKey}&page=${page}`
//     );
//     return response.data;
//   } catch (error) {
//     // Handle error jika terjadi masalah saat pengambilan data dari API
//     throw new Error("Failed to fetch trending list.");
//   }
// };
