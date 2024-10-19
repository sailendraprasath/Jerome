/* eslint-disable react/prop-types */
import { useState } from "react";
import { categories } from "../data"; // Adjust the path as needed

const Sidebar = ({ setSelectedCategory }) => {
  // State to hold currently selected category
  const [selectedCategory, setSelectedCategoryState] = useState(null);

  const handleCategoryClick = (category) => {
    // Only update the state if the clicked category is different
    if (selectedCategory !== category) {
      setSelectedCategoryState(category); // Update selected category
      setSelectedCategory(category); // Call the parent function to update selected category
    }
  };

  return (
    <div className="w-full caret-transparent select-none h-[600px] max-sm:h-[400px] mt-[-20px] max-sm:mt-[-90px] lg:w-1/4 bg-rose-200 p-4">
      <h2 className="text-xl font-welcome font-bold text-black/90 text-center mb-4">
        VARIETIES CATALOG
      </h2>
      <div className="overflow-y-auto h-[500px] max-sm:h-[300px]">
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <div
                onClick={() => handleCategoryClick(category)} // Handle category click
                className={`font-welcome cursor-pointer text-lg p-2 rounded-lg ${
                  selectedCategory === category
                    ? "bg-rose-400 border-4 border-black/55 text-white"
                    : "bg-white"
                }`}
              >
                {category}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Removed Products Section */}
      {/* You can add any additional functionality here if needed */}
    </div>
  );
};

export default Sidebar;
