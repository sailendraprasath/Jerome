const Sidebar = () => {
  return (
    <div className="lg:w-1/4 w-full h-[650px] max-sm:h-[300px] overflow-y-auto mt-[-150px] max-sm:mt-0 bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        <li className="cursor-pointer p-2 bg-white rounded hover:bg-gray-100">
          Vegetables
        </li>
        <li className="cursor-pointer p-2 bg-white rounded hover:bg-gray-100">
          Fruits
        </li>
        <li className="cursor-pointer p-2 bg-white rounded hover:bg-gray-100">
          Dairy
        </li>

        <li className="cursor-pointer p-2 bg-white rounded hover:bg-gray-100">
          Snacks
        </li>
        <li className="cursor-pointer p-2 bg-white rounded hover:bg-gray-100">
          Grains
        </li>
        <li className="cursor-pointer p-2 bg-white rounded hover:bg-gray-100">
          Oils
        </li>
        <li className="cursor-pointer p-2 bg-white rounded hover:bg-gray-100">
          Sweets
        </li>
        <li className="cursor-pointer p-2 bg-white rounded hover:bg-gray-100">
          Vegetables
        </li>
        <li className="cursor-pointer p-2 bg-white rounded hover:bg-gray-100">
          Fruits
        </li>
        <li className="cursor-pointer p-2 bg-white rounded hover:bg-gray-100">
          Dairy
        </li>

        <li className="cursor-pointer p-2 bg-white rounded hover:bg-gray-100">
          Oils
        </li>
        <li className="cursor-pointer p-2 bg-white rounded hover:bg-gray-100">
          Sweets
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
