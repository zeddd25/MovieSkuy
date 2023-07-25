import React, { useEffect, useState } from "react";
import "../UpComing/UpComing.css";
import { Link, NavLink, useParams } from "react-router-dom";

const UpComing = () => {
  const [upComing, setUpcoming] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "upcoming"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setUpcoming(data.results));
  };
  return (
    <div className="warp_upComing">
      {/* Judl Card */}
      <div className="Judul_warp">
        <h1 className="text_judul">UPCOMING</h1>
      </div>
      {/*  */}
      <Link to={"/Home"} className="warp_card_upcoming">
        {upComing.map((Up) => (
          <div className="warp_Upcoming">
            {/* Gambar */}
            <div className="posterImage__titleHome">
              <img
                className="posterImage__titleHome_chill"
                src={`https://image.tmdb.org/t/p/original${
                  Up && Up.poster_path
                }`}
              />
            </div>
            {/* Warp Judul & Tanggal */}
            <div className="warp_jdl_tgl">
              {/* Judul */}
              <p className="judul_upcoming1">{Up?.original_title}</p>
              {/* tangal tayang */}
              <p className="tanggal_tayang1">{Up?.release_date}</p>
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default UpComing;
