/* eslint-disable react/prop-types */
import { useState } from "react";
import { AllcardsData } from "../data";
import { useNavigate } from "react-router-dom";

const Cards = ({ addToCart, addToWhish, selectedCategory }) => {
  const [selectData, setSelectData] = useState({}); // Track selected amount for each card
  const [addedItems, setAddedItems] = useState({}); // Track which items have been added
  const [addedWhsih, setAddedWhish] = useState({}); // Track which items have been added

  //i do here navigate the card details in other page
  const navigate = useNavigate();
  const handleCardClick = (card) => {
    navigate(`/card/${card.id}`, { state: { card } }); // Navigate to the CardShow page with card data
  };

  const handleSelectData = (e, cardId) => {
    const { value } = e.target;
    setSelectData((prevData) => ({
      ...prevData,
      [cardId]: value, // Store the selected amount using card ID
    }));

    // Reset the added state when a new selection is made
    if (addedItems[cardId]) {
      setAddedItems((prev) => ({
        ...prev,
        [cardId]: false, // Reset added state if the selection changes
      }));
    }
  };

  const handleAddToCart = (card) => {
    const selectedAmount = selectData[card.id];
    if (selectedAmount) {
      const pricePerUnit = card.price; // Get price per unit
      const quantity =
        selectedAmount === "₹500"
          ? 1
          : selectedAmount === "₹250"
          ? 0.5
          : selectedAmount === "₹125"
          ? 0.25
          : selectedAmount === "₹600"
          ? 5
          : 0;

      const itemToAdd = {
        id: card.id,
        title: card.title,
        image: card.img,
        price: pricePerUnit * quantity,
        quantity: quantity,
      };

      addToCart(itemToAdd); // Call addToCart with the item data
      setAddedItems((prev) => ({
        ...prev,
        [card.id]: true, // Mark this card as added
      }));
    } else {
      alert("Please select an amount to add to the cart.");
    }
  };
  const handleAddToWhish = (card) => {
    const selectedAmount = selectData[card.id];
    if (selectedAmount) {
      const pricePerUnit = card.price; // Get price per unit
      const quantity =
        selectedAmount === "₹500"
          ? 1
          : selectedAmount === "₹250"
          ? 0.5
          : selectedAmount === "₹125"
          ? 0.25
          : selectedAmount === "₹600"
          ? 5
          : 0;

      const itemToWhish = {
        id: card.id,
        title: card.title,
        image: card.img,
        price: pricePerUnit * quantity,
        quantity: quantity,
      };

      addToWhish(itemToWhish);
      // Call whishToCart with the item data
      setAddedWhish((prev) => ({
        ...prev,
        [card.id]: true, // Mark this card as added
      }));
    } else {
      alert("Please select an amount to add to the whish.");
    }
  };

  // Filter cards based on the selected category
  const filteredCards = AllcardsData.filter(
    (card) => card.category === selectedCategory
  );

  return (
    <div className="p-4 -mt-20 max-sm:-mt-0">
      <h1 className="text-2xl text-center font-bold mb-4">
        {selectedCategory}
      </h1>

      {/* Scrollable Cards */}
      <div className="flex overflow-x-scroll space-x-4">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="min-w-[250px] max-w-[250px] bg-rose-50 border rounded-lg shadow-lg p-4"
          >
            <img
              onClick={() => handleCardClick(card)}
              src={card.img}
              alt={card.title}
              className="w-full cursor-pointer h-[250px] object-cover rounded-md"
            />
            <div className="flex space-x-[60px] mt-4">
              <select
                name="amount"
                id="amount"
                value={selectData[card.id] || ""} // Use card ID to get selected value
                onChange={(e) => handleSelectData(e, card.id)} // Pass card ID
                className="bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300 transition ease-in-out duration-200"
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="₹500">1 kg</option>
                <option value="₹250">500 g</option>
                <option value="₹125">250 g</option>
                <option value="₹2500">5 kg</option>
              </select>
              <div>
                <p className="mt-2">{selectData[card.id] || "None"}</p>
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
                onClick={() => handleAddToCart(card)} // Add click handler
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                {addedItems[card.id] ? "Added" : "Add to Cart"}
              </button>
              <button
                onClick={() => handleAddToWhish(card)}
                className="bg-rose-400 text-white px-3 py-1 rounded hover:bg-rose-500"
              >
                {addedWhsih[card.id] ? "Done" : "Whish"}{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
