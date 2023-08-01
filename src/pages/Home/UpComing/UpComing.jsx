import React, { useEffect, useState } from "react";
import "../UpComing/UpComing.css";
import { Link, NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCalendarDays,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const UpComing = () => {
  const [upComing, setUpcoming] = useState([]);
  const { type } = useParams();

  const getRandomColor = () => {
    // Fungsi untuk menghasilkan warna acak dalam format rgb
    const randomColor = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 256)
    );
    return `rgb(${randomColor.join(",")})`;
  };

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
    <div className="warp_upComing_c">
      {/* Judl Card */}
      {/* <hr /> */}
      <div className="warp_hr_judul1">
        <hr className="garis" />
        <div className="Judul_warp_Up">
          <div className="text_judul">UPCOMING </div>
          <div className="gradient"></div>
        </div>
        <hr className="garis" />
      </div>
      {/*  */}
      <Link
        to={"/Home"}
        style={{ textDecoration: "none", color: "white" }}
        // INI CLASSS NYA
        className="warp_card_upcoming"
      >
        {upComing.map((Up, i) => (
          <div className="warp_Upcoming" key={i}>
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
              <div>
                <p className="judul_upcoming1">{Up?.title}</p>
              </div>
              <div className="warp_up_Info">
                {/* tangal tayang */}
                <div className="warp_up_subInfo">
                  <FontAwesomeIcon icon={faStar} id="icons" />
                  <p className="tanggal_tayang1">Rating :</p>
                  <p className="tanggal_tayang1">{Up?.vote_average}</p>
                </div>
                <div className="warp_up_subInfo">
                  <FontAwesomeIcon icon={faUser} id="icons2" />
                  <p className="tanggal_tayang1">Popularity</p>
                  <p className="tanggal_tayang1">{Up?.popularity}</p>
                </div>
                <div className="warp_up_subInfo">
                  <FontAwesomeIcon icon={faCalendarDays} id="icons2" />
                  <p className="tanggal_tayang1">Release Date</p>
                  <p className="tanggal_tayang1">{Up?.release_date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default UpComing;
