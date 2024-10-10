/* eslint-disable react/prop-types */
const Sidebar = ({ setSelectedCategory }) => {
  const categories = [
    "Vegetables",
    "Fruits",
    "Toys",
    "Dairy",
    "Snacks",
    "Grains",
    "Oils",
    "Sweets",
    "Vegetables",
    "Fruits",
    "Dairy",
    "Oils",
    "Sweets",
  ];

  return (
    <div className="lg:w-1/4 w-full h-[650px] font-welcome max-sm:h-[300px] overflow-y-auto mt-[-150px] max-sm:mt-0 bg-rose-200 p-4">
      <h2 className="text-xl font-bold text-center mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => setSelectedCategory(category)}
            className="cursor-pointer text-xl p-2 bg-white rounded hover:bg-gray-100"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
