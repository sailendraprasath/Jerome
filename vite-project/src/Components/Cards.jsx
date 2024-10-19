/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaginationButtons from "./PaginationButtons";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = ({ addToCart, addToWhish, selectedCategory, AllcardsData }) => {
  const [selectData, setSelectData] = useState({});
  const [addedItems, setAddedItems] = useState({});
  const [addedWhish, setAddedWhish] = useState({});
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingWhish, setLoadingWhish] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    navigate(`/card/${card.id}`, { state: { card } });
  };

  const handleSelectData = (e, cardId) => {
    const { value } = e.target;
    setSelectData((prevData) => ({
      ...prevData,
      [cardId]: value,
    }));
    setAddedItems((prev) => ({
      ...prev,
      [cardId]: false,
    }));
  };

  const notify = (message) => toast.error(message);

  const handleAddToCart = async (card) => {
    setLoadingCart(true);

    const selectedQuantity = selectData[card.id]; // Assuming this has something like '₹50'
    const selectedOption = card.options.find(
      (option) => option.price === selectedQuantity
    );

    if (selectedOption) {
      const itemToAdd = {
        id: card.id,
        title: card.title,
        image: card.img,
        price: parseInt(selectedQuantity.replace(/[^\d]/g, "")), // Correct price extraction
        quantity: selectedOption.quantity, // Keep the quantity as it is, e.g., '500g'
        unit: card.unit, // Add the unit to the item, e.g., 'g' or 'pieces'
      };

      addToCart(itemToAdd); // Pass item with both price and proper quantity+unit

      setAddedItems((prev) => ({
        ...prev,
        [card.id]: true,
      }));
    } else {
      notify("Please select an amount to add to the cart.");
    }

    setLoadingCart(false);
  };

  const handleAddToWhish = async (card) => {
    setLoadingWhish(true);
    const selectedQuantity = selectData[card.id];
    const selectedOption = card.options.find(
      (option) => option.price === selectedQuantity
    );

    if (selectedOption) {
      const itemToWhish = {
        id: card.id,
        title: card.title,
        image: card.img,
        price: parseInt(selectedQuantity.replace(/[^\d]/g, "")), // Extract price number
        quantity: parseInt(selectedOption.quantity),
      };
      addToWhish(itemToWhish);
      setAddedWhish((prev) => ({
        ...prev,
        [card.id]: true,
      }));
    } else {
      notify("Please select an amount to add to the wish.");
    }
    setLoadingWhish(false);
  };

  const filteredCards =
    selectedCategory === "All Products"
      ? AllcardsData
      : AllcardsData.filter((card) => card.category === selectedCategory);

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const paginatedCards = filteredCards.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="p-4 caret-transparent select-none -mt-36 max-sm:mt-0">
      <ToastContainer />
      <motion.h1
        className="text-4xl text-center font-welcome font-bold mb-4"
        initial={{ opacity: 0, y: -20 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Animation state
        transition={{ duration: 0.5 }} // Transition duration
      >
        {selectedCategory}
      </motion.h1>
      <motion.h2
        className="text-lg text-center font-semibold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }} // Delayed animation
      >
        Total Items: {filteredCards.length}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedCards.map((card) => (
          <motion.div
            key={card.id}
            className="bg-rose-50 border rounded-lg shadow-lg hover:shadow-2xl hover:duration-500 hover:shadow-black p-4"
            initial={{ opacity: 0, scale: 0.9 }} // Initial state for each card
            animate={{ opacity: 1, scale: 1 }} // Animation state
            exit={{ opacity: 0, scale: 0.9 }} // Exit animation
            transition={{ duration: 0.3 }} // Transition duration for the card
          >
            <img
              onClick={() => handleCardClick(card)}
              src={card.img}
              alt={card.title}
              className="w-full cursor-pointer h-[250px] object-cover rounded-md"
            />
            <div className="flex items-center justify-between mt-4">
              <select
                name="amount"
                value={selectData[card.id] || ""}
                onChange={(e) => handleSelectData(e, card.id)}
                className="bg-white border border-gray-300 rounded-md p-2 w-1/3 sm:w-1/2"
              >
                <option value="" disabled>
                  Select
                </option>
                {Array.isArray(card.options) && card.options.length > 0 ? (
                  card.options.map((option) => (
                    <option
                      key={`${option.quantity}-${option.price}`}
                      value={option.price}
                    >
                      {option.quantity}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No options available
                  </option>
                )}
              </select>
              <div className="text-right w-2/3">
                <p className="mt-1 font-semibold">
                  {selectData[card.id]
                    ? `Price: ₹${parseInt(
                        selectData[card.id].replace(/[^\d]/g, "")
                      )}`
                    : "None"}
                </p>
              </div>
            </div>

            <h2 className="text-lg text-center font-semibold mt-4">
              {card.title}
            </h2>
            <p className="text-[12px] text-center font-semibold mt-2">
              {card.para}
            </p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleAddToCart(card)}
                className={`bg-green-500 text-white px-3 py-1 rounded ${
                  loadingCart ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loadingCart}
              >
                {loadingCart
                  ? "Adding..."
                  : addedItems[card.id]
                  ? "Added"
                  : "Add to Cart"}
              </button>
              <button
                onClick={() => handleAddToWhish(card)}
                className={`bg-rose-400 text-white px-3 py-1 rounded ${
                  loadingWhish ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loadingWhish}
              >
                {loadingWhish
                  ? "Adding..."
                  : addedWhish[card.id]
                  ? "Done"
                  : "Whish"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <PaginationButtons
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Cards;
