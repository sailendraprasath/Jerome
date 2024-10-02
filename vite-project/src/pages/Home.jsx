/* eslint-disable react/prop-types */
import Welcome from "../Components/Welcome";
import Carousel1 from "../Components/Carousel1";
import SlideCard from "../Components/SlideCard";

const Home = ({ addToCart }) => {
  return (
    <>
      <Welcome />
      <Carousel1 />
      <SlideCard addToCart={addToCart} />
    </>
  );
};

export default Home;
