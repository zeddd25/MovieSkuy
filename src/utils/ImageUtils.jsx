export const getImageUrlPoster = (path) => {
  return `${import.meta.env.VITE_APP_BASE_IMAGE_URL_POSTER}${path}`;
};

export const getImageUrl = (path) => {
  return `${import.meta.env.VITE_APP_BASE_IMAGE_URL}${path}`;
};
