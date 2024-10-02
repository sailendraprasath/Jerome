/* eslint-disable react/prop-types */
import Slidebar from "../Components/Slidebar";
import Cards from "../Components/Cards";

const SlideCard = ({ addToCart }) => {
  return (
    <>
      <div className="flex flex-col mt-[200px] max-sm:mt-0 lg:flex-row h-screen">
        {/* Sidebar */}
        <Slidebar />

        {/* Scrollable Cards */}
        <div className="lg:w-3/4 w-full p-4">
          <Cards addToCart={addToCart} />
        </div>
      </div>
    </>
  );
};

export default SlideCard;
