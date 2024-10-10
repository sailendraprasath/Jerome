/* eslint-disable react/prop-types */

import { useState } from "react";
import Sidebar from "../Components/Slidebar";
import Cards from "../Components/Cards";

const SlideCard = ({ addToCart, addToWhish }) => {
  const [selectedCategory, setSelectedCategory] = useState("Fruits"); // Default category

  return (
    <>
      <div className="flex flex-col mt-[300px] max-sm:mt-0 lg:flex-row h-screen">
        {/* Sidebar */}
        <Sidebar setSelectedCategory={setSelectedCategory} />

        {/* Pass handler to Sidebar */}
        {/* Scrollable Cards */}
        <div className="lg:w-3/4 w-full mt-[-150px] max-sm:mt-0 p-4">
          <Cards
            addToCart={addToCart}
            addToWhish={addToWhish}
            selectedCategory={selectedCategory} // Pass selected category to Cards
          />
        </div>
      </div>
    </>
  );
};

export default SlideCard;
