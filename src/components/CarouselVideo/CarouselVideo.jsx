import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { fetchTvVideoData, fetchVideoData } from "../../utils/ApiUtils";
import YouTube from "react-youtube";
import "../CarouselVideo/CarouselVideo.css";

const CarouselVideo = ({ movieId, tvShowId }) => {
  const [movieVideoData, setMovieVideoData] = useState([]);
  const [tvVideoData, setTvVideoData] = useState([]);

  useEffect(() => {
    fetchVideoData(movieId, setMovieVideoData);
  }, [movieId]);

  useEffect(() => {
    fetchTvVideoData(tvShowId, setTvVideoData);
  }, [tvShowId]);

  const settings = {
    customPaging: function (i) {
      // Use correct videoData based on the video type
      const videoData = movieVideoData.length > 0 ? movieVideoData : tvVideoData;
      return (
        <div className="carousel_video_preview">
          <img
            className="thumbnail_img"
            src={`https://img.youtube.com/vi/${videoData[i].key}/0.jpg`}
            alt={`Thumbnail${i + 1}`}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Use correct videoData based on the video type
  const videoData = movieVideoData.length > 0 ? movieVideoData : tvVideoData;

  return (
    <div className="carousel_video">
      <Slider {...settings}>
        {videoData.map((video) => (
          <div key={video.key}>
            <YouTube videoId={video.key} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselVideo;
