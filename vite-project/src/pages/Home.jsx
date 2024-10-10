import Welcome from "../Components/Welcome";
import Carousel1 from "../Components/Carousel1";
import CardCarousel from "../Components/CardCarousel";

const Home = () => {
  const user = localStorage.getItem("user");
  console.log(user);

  return (
    <>
      <Welcome />
      <Carousel1 />
      <CardCarousel />
    </>
  );
};

export default Home;
