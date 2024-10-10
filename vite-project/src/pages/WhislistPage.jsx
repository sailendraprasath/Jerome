/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoBagRemove } from "react-icons/io5";
import EmptyCartImage from "../assets/About/empty.png"; // Ensure this path is correct

const WishlistPage = ({ whishItems, addToCart, removeFromWhish }) => {
  const [items, setItems] = useState(whishItems);

  // Move a single item to the cart and remove from wishlist
  const moveToCart = (index) => {
    const item = items[index];
    addToCart(item); // Add to cart
    removeFromWhish(item.id); // Remove from wishlist (external state)

    // Update local state to reflect removal
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Remove a single item from the wishlist
  const removeItem = (id) => {
    removeFromWhish(id); // Remove from wishlist (external state)

    // Update local state to reflect removal
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  // Move all items to the cart
  const moveAllToCart = () => {
    items.forEach((item) => addToCart(item)); // Add all items to cart
    setItems([]); // Clear local items state
    items.forEach((item) => removeFromWhish(item.id)); // Remove all items from wishlist
  };

  return (
    <div className="container mx-auto mt-20 font-welcome p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Your Wishlist
      </h2>
      {items.length === 0 ? (
        <div className="text-center text-gray-500 ">
          <img
            src={EmptyCartImage}
            alt="Empty Wishlist"
            className="mx-auto mb-4 w-1/3 "
          />
          <p>Your wishlist is empty.</p>
        </div>
      ) : (
        <div className="">
          <div className="bg-rose-50 rounded-lg shadow-md  ">
            {/* Move all items to cart button */}
            <div className="p-4 flex flex-col sm:flex-row justify-between items-center sm:items-start">
              <p className="text-lg font-semibold mb-4 sm:mb-0">
                You have {items.length} items.
              </p>
              <button
                className="bg-green-500 text-white rounded-tr-2xl rounded-bl-2xl px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
                onClick={moveAllToCart}
              >
                Move All to Cart
              </button>
            </div>

            {/* Scrollable wishlist container */}
            <div className="max-h-96 overflow-y-auto">
              {" "}
              {/* <-- Scrollable container */}
              <div className="min-w-full border-b">
                <div className="flex justify-evenly grid-cols-3 sm:grid-cols-5 font-welcome text-3xl max-sm:text-2xl lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-4 bg-rose-200 p-4">
                  <span className="col-span-2 font-semibold">Product</span>
                  <span className="font-semibold hidden lg:block">Price</span>
                  <span className="col-span-1 sm:col-span-2 lg:col-span-1 font-semibold text-right">
                    Actions
                  </span>
                </div>
              </div>
              {/* bottom table */}
              <div className="">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex justify-evenly grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-4 items-center p-4 border-b hover:bg-rose-100 duration-75 hover:duration-200"
                  >
                    {/* Product Image and Title */}
                    <div className="col-span-2 flex  items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md mr-2 sm:mr-4"
                      />
                      <span className="text-sm sm:text-base font-medium">
                        {item.title}
                      </span>
                    </div>

                    {/* Price (Hidden on small screens, shown on large screens) */}
                    <span className="font-medium text-gray-700 hidden lg:block">
                      ₹{item.price.toFixed(2)}
                    </span>

                    {/* Actions: Move to Cart and Remove buttons */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex justify-end space-x-2 gap-9 max-sm:gap-3 sm:space-x-4 lg:space-x-2">
                      {/* Move to Cart Button */}
                      <button
                        className="bg-green-500 shadow-sm shadow-black rounded-tr-2xl rounded-bl-2xl  duration-0 hover:duration-200  text-white text-xs sm:text-sm px-3 max-sm:px-2 py-1 rounded  transition "
                        onClick={() => moveToCart(index)}
                      >
                        Move to Cart
                      </button>

                      {/* Remove from Wishlist Button */}
                      <button
                        className="text-red-600  hover:text-red-800 text-xs sm:text-sm font-semibold"
                        onClick={() => removeItem(item.id)}
                      >
                        <IoBagRemove size={25} className="" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
