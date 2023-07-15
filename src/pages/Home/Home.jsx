import "../Home/Home.css";
import Navbar from "../../components/Navbar/Navbar";
import HeroBanner from "../Home/HeroBanner/HeroBanner";
import Carousel_home from "./Carousel/Carousel_home";
import Card_popular from "./Popular/Card_popular";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Carousel_home />
      <Card_popular />
    </div>
  );
};

export default Home;
