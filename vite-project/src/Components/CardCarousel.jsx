import { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing the icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cardsCarouselData } from "../data";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WelcomeMotion = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const CardCarousel = () => {
  const sliderRef = useRef(null); // Create a reference for the slider
  const navigate = useNavigate(); // Call useNavigate here

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 cards on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 cards on small screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Show 1 card on extra small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container font-welcome mx-auto p-6">
      <motion.div
        variants={WelcomeMotion(0)}
        initial="hidden"
        animate="visible"
        className="flex mx-auto items-center mb-10 flex-col container font-welcome space-x-6  font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-600"
      >
        <h1 className="text-4xl max-sm:text-2xl ">Explore Our Offerings</h1>
      </motion.div>
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {cardsCarouselData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center cursor-pointer" // Add cursor-pointer class for indication
              onClick={() => navigate("/MerchandisePage")} // Update the navigation path here
            >
              <div className="flex justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[200px] h-[200px] border-4 border-rose-300 rounded-full object-cover" // Added object-cover for proper image scaling
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-center">
                {card.title}
              </h3>
            </div>
          ))}
        </Slider>
        {/* Custom Navigation Buttons */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-3xl p-2 shadow-lg duration-100 hover:duration-300 hover:border-black/40 hover:border hover:bg-rose-200"
        >
          <FaChevronLeft size={24} className="text-black" />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-3xl p-2 shadow-lg duration-100 hover:duration-300 hover:border-black/40 hover:border  hover:bg-rose-200"
        >
          <FaChevronRight size={24} className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
