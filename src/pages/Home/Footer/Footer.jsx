import React from "react";
import "../Footer/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="warp_footer">
        {/* Footer atas */}
        <div className="max_footer_w">
          <div className="padding_footer">
            <div className="Warp_Desc_weDev">
              {/* logo */}
              <div className="logo">
                <div to={"/"} className="logo_warp">
                  <img
                    className="imge"
                    src="../src/assets/images/MovieSkuys.png"
                    alt="logo"
                  />
                </div>
              </div>
              {/* about */}
              <div className="about">
                <div className="styl_about">About</div>
                <div className="styl_about2">Category</div>
                <div className="styl_about3">Privacy Policy</div>
              </div>
              {/* akun */}
              <div className="akun">
                {/* Contact */}
                <div className="styl_contact">Contact</div>
                {/* icons */}
                <div className="styl_icons">
                  <FontAwesomeIcon icon={faDiscord} />
                  <FontAwesomeIcon icon={faGithub} />
                  <FontAwesomeIcon icon={faTelegram} />
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            </div>
            {/* Footer bawah */}
            <div className="copyRight">
              <p>Copyright &copy; 2023 MovieSkuy. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
