/* eslint-disable react/prop-types */
import { useState } from "react";
import { useLocation } from "react-router-dom";

const CardShow = ({ addToCart, addToWhish }) => {
  const location = useLocation();
  const { card } = location.state; // Get the card details from state

  const [quantity, setQuantity] = useState(1); // State for managing quantity

  // Function to increase quantity
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrease quantity, with a minimum value of 1
  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Function to handle adding to cart
  const handleAddToCart = () => {
    const item = {
      id: card.id,
      title: card.title,
      image: card.img,
      price: card.price * quantity, // Total price based on quantity
      quantity: quantity,
    };
    addToCart(item); // Call the addToCart function
    alert(`${card.title} added to cart!`);
  };

  // Function to handle adding to wishlist
  const handleAddToWish = () => {
    const item = {
      id: card.id,
      title: card.title,
      image: card.img,
      price: card.price * quantity, // Total price based on quantity
      quantity: quantity,
    };
    addToWhish(item); // Call the addToWhish function
    alert(`${card.title} added to wishlist!`);
  };

  return (
    <div className="max-w-6xl mx-auto  p-6 border mt-[150px] rounded-lg shadow-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <img
          src={card.img}
          alt={card.title}
          className="h-80 w-full object-cover rounded-lg"
        />
      </div>

      {/* Details Section */}
      <div className="md:w-1/2 w-full">
        <h1 className="text-2xl md:text-3xl font-bold mt-4 md:mt-0">
          {card.title}
        </h1>
        <p className="mt-4 text-gray-700">{card.para}</p>
        <p className="mt-4 text-gray-900 font-semibold">Price: ₹{card.price}</p>

        {/* Quantity controls */}
        <div className="mt-4 flex items-center space-x-4">
          <button
            className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400"
            onClick={handleDecrease}
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>

        {/* Add to Cart and Wishlist buttons */}
        <div className="mt-6 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full md:w-auto"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 w-full md:w-auto"
            onClick={handleAddToWish}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardShow;
