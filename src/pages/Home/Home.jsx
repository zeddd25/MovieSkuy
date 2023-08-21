import "../Home/Home.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../Home/HeroBanner/HeroBanner";
import Carousel_home from "./Carousel/Carousel_home";
import Card_popular from "./Popular/Card_popular";
import TrendingList from "../../components/TrendingList/TrendingList";
import UpComing from "./UpComing/UpComing";
import Footer from "./Footer/Footer";
import CardHomeNew from "../../components/CardHome/CardHomeNew";
import TopRated from "./AutoSlide/TopRated";
import NavbarTest from "../../components/Navbar/NavbarTest";

const Home = () => {
  return (
    <div>
      <div className="Home_warp_max">
        <div className="content">
      <NavbarTest />
          <HeroBanner />

          <TopRated />

          {/* <Card_popular /> */}
          <hr className="garis1" />
          {/* <Card_popular /> */}
          <Carousel_home />
          <hr className="garis1" />
          <Card_popular />
          {/* <CardHomeNew /> */}
          <UpComing />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
