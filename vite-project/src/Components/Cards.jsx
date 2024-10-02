/* eslint-disable react/prop-types */
import { useState } from "react";
import Vegetables from "../assets/vegitables.png";

const Cards = ({ addToCart }) => {
  const [selectData, setSelectData] = useState({}); // Track selected amount for each card
  const [addedItems, setAddedItems] = useState({}); // Track which items have been added

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

  const cards = [
    {
      id: 1,
      title: "Apple",
      img: Vegetables,
      h1: "Fresh and Crunchy Apples",
      para: "Enjoy the crisp taste of freshly picked apples, perfect for snacking.",
      price: 500, // Add price for calculations
    },
    {
      id: 2,
      title: "Banana",
      img: Vegetables,
      h1: "Sweet and Soft Bananas",
      para: "A great source of energy, bananas are perfect for on-the-go snacking.",
      price: 250, // Add price for calculations
    },
    {
      id: 3,
      title: "Orange",
      img: Vegetables,
      h1: "Juicy Oranges",
      para: "Citrusy and refreshing, oranges are rich in vitamin C.",
      price: 125, // Add price for calculations
    },
    {
      id: 4,
      title: "Grapes",
      img: Vegetables,
      h1: "Sweet and Succulent Grapes",
      para: "Enjoy a handful of grapes for a burst of sweetness.",
      price: 250, // Add price for calculations
    },
    {
      id: 5,
      title: "Strawberries",
      img: Vegetables,
      h1: "Delicious Strawberries",
      para: "Perfect for desserts or snacking, these berries are a favorite!",
      price: 300, // Add price for calculations
    },
    {
      id: 6,
      title: "Watermelon",
      img: Vegetables,
      h1: "Refreshing Watermelon",
      para: "Stay hydrated with the juicy sweetness of fresh watermelon.",
      price: 450, // Add price for calculations
    },
    {
      id: 7,
      title: "Pineapple",
      img: Vegetables,
      h1: "Tropical Pineapple",
      para: "Enjoy the sweet and tangy flavor of ripe pineapple.",
      price: 600, // Add price for calculations
    },
    {
      id: 8,
      title: "Mango",
      img: Vegetables,
      h1: "Ripe and Sweet Mango",
      para: "Indulge in the tropical sweetness of fresh mangoes.",
      price: 700, // Add price for calculations
    },
  ];

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

  return (
    <div className="p-4 -mt-20 max-sm:-mt-0">
      <h1 className="text-2xl text-center font-bold mb-4">Fruits</h1>

      {/* Scrollable Cards */}
      <div className="flex overflow-x-scroll space-x-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-[250px] max-w-[250px] bg-rose-50 border rounded-lg shadow-lg p-4"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[250px] object-cover rounded-md"
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
              <button className="bg-rose-400 text-white px-3 py-1 rounded hover:bg-rose-500">
                Wish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
