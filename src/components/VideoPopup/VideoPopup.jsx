import React, { useRef } from "react";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./VideoPopup.css";

const VideoPopup = ({ trailerUrl, onClosePopup }) => {
  const videoRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (videoRef.current && !videoRef.current.contains(event.target)) {
      onClosePopup();
    }
  };

  return (
    <div className="video_popup" onClick={handleOutsideClick}>
      <div className="video_trailer" ref={videoRef}>
        {trailerUrl ? (
          <YouTube
            videoId={trailerUrl}
            opts={{ width: "1080", height: "720" }}
          />
        ) : (
          <p>Trailer not available.</p>
        )}
        <FontAwesomeIcon
          className="close_trailer"
          icon={faXmark}
          onClick={onClosePopup}
        />
      </div>
    </div>
  );
};

export default VideoPopup;
