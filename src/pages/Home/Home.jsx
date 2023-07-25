import "../Home/Home.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../Home/HeroBanner/HeroBanner";
import Carousel_home from "./Carousel/Carousel_home";
import Card_popular from "./Popular/Card_popular";
import UpComing from "./UpComing/UpComing";
import Footer from "./Footer/Footer";
import CardHomeNew from "../../components/CardHome/CardHomeNew";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <div className="Home_warp_max">
        {/* <Card_popular /> */}
        <Carousel_home />
        <Card_popular />
        {/* <CardHomeNew /> */}
        <UpComing />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
