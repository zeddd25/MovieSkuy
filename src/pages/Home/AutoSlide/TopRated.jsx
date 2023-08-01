import React, { useEffect, useRef, useState } from "react";
import "../AutoSlide/TopRated.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TopRated = () => {
  const [topRatedData, setTopRatedData] = useState([]);
  const { type } = useParams();
  const imageRef = useRef(null);

  const getRandomColor = () => {
    // Fungsi untuk menghasilkan warna acak dalam format rgb
    const randomColor = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 256)
    );
    return `rgb(${randomColor.join(",")})`;
  };

  const getAverageColor = (imageElement, ratio) => {
    const canvas = document.createElement("canvas");

    let height = (canvas.height = imageElement.naturalHeight);
    let width = (canvas.width = imageElement.naturalWidth);

    const context = canvas.getContext("2d");
    context.drawImage(imageElement, 0, 0);

    let data, length;
    let i = 0,
      count = 0;

    try {
      data = context.getImageData(0, 0, width, height);
      length = data.data.length;
    } catch (err) {
      console.log(err);
      return {
        R: 0,
        G: 0,
        B: 0,
      };
    }

    let R = 0,
      G = 0,
      B = 0;

    while ((i += ratio * 4) < length) {
      ++count;
      R += data.data[i];
      G += data.data[i + 1];
      B += data.data[i + 2];
    }

    R = ~~(R / count);
    G = ~~(G / count);
    B = ~~(B / count);

    return {
      R,
      G,
      B,
    };
  };

  //   useEffect(() => {
  //     if (imageRef.current) {
  //       const { R, G, B } = getAverageColor(imageRef.current, 10); // Cobalah rasio 10 atau 20
  //       const randomColorSpan = document.querySelector(".randomColor");
  //       randomColorSpan.style.backgroundImage = `linear-gradient(to top, rgb(${R},${G},${B}),white`;
  //     }
  //   }, [topRatedData]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGIxMDAyNzM5Y2IzMWFmZDAwOGY0MTA1NTEyNTNiMCIsInN1YiI6IjY0YTc4MzU4ZjA1NmQ1MDBhZDA5MzkyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9qDKCWHQ99OyUM2h-BRPsbQeCrf1IxXbVO0rQvIfEko",
      },
    };

    fetch("https://api.themoviedb.org/3/movie/top_rated?page=3", options)
      .then((response) => response.json())
      .then((data) => setTopRatedData(data.results));
  }, []);

  return (
    <>
      <>
        <div className="warp_All_TopRated">
          {/* JUDUL */}
          <div></div>
          {/* WARP CARD */}
          <div className="warp_card_TopRated">
            {topRatedData.map((Up) => (
              <div className="card_TopRated" key={Up.id}>
                <div className="titile_top">
                  <p>{Up.title}</p>
                </div>
                <div
                  className="randomColor"
                  style={{
                    backgroundImage: `linear-gradient(to top,${getRandomColor()},transparent)`,
                  }}
                ></div>
                <div className="posterImage__titleHome2">
                  {/* Gunakan ref untuk mengambil referensi elemen img */}
                  <img
                    ref={imageRef}
                    className="posterImage__titleHome_chill2"
                    src={`https://image.tmdb.org/t/p/original${
                      Up && Up.backdrop_path
                    }`}
                    alt="poster"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default TopRated;
