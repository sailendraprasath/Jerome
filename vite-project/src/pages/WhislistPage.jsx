/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoBagRemove } from "react-icons/io5";
import EmptyCartImage from "../assets/About/empty.png";
import { Link } from "react-router-dom";

const WishlistPage = ({ whishItems, addToCart, removeFromWhish }) => {
  const [items, setItems] = useState(whishItems);

  const moveToCart = (index) => {
    const item = items[index];
    addToCart(item);
    removeFromWhish(item.id);
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    removeFromWhish(id);
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const moveAllToCart = () => {
    items.forEach((item) => addToCart(item));
    setItems([]);
    items.forEach((item) => removeFromWhish(item.id));
  };

  const formatQuantity = (item) => {
    // console.log("Formatting quantity for item:", item);
    // console.log(`Item Quantity: ${item.quantity}, Unit: ${item.unit}`); // Debugging line
    if (item.unit === "g") {
      return `${item.quantity}`;
    } else if (item.unit === "kg") {
      return `${item.quantity}kg`;
    } else if (item.unit === "liter") {
      return `${item.quantity} liters`;
    } else if (item.unit === "pieces") {
      return `${item.quantity} piece${item.quantity > 1 ? "s" : ""}`;
    }
    return `${item.quantity}`;
  };

  return (
    <>
      {items.length !== 0 ? (
        <div className="bg-rose-300 p-4 px-10 caret-transparent select-none shadow-sm shadow-black/90 mt-[110px] rounded-tr-[80px] max-sm:rounded-md rounded-bl-[50px] text-left">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
            YOUR WHISHLIST HERE!!
          </h1>
          <p className="text-white flex justify-start space-x-2 text-sm md:text-base lg:text-lg mt-2">
            <Link className="cursor-pointer" to={"/"}>
              HOME
            </Link>
            <Link className="cursor-pointer" to={"/MerchandisePage"}>
              / PRODUCTS
            </Link>
            <span>/ YOUR WHISHLIST</span>
          </p>
        </div>
      ) : null}

      <div className="container mx-auto mt-20 font-welcome p-4 sm:p-6 lg:p-8">
        {items.length === 0 ? (
          <div className="text-center text-gray-500">
            <h2 className="text-4xl font-bold text-center font-welcome mb-6">
              Your Cart
            </h2>
            <img
              src={EmptyCartImage}
              alt="Empty Cart"
              className="mx-auto mb-4 w-1/3"
            />
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl mt-[-80px] font-bold text-center font-welcome mb-6">
              Your wishlist
            </h2>
            <div className="bg-rose-50 rounded-lg shadow-md">
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

              <div className="max-h-96 overflow-y-auto">
                <div className="min-w-full border-b">
                  <div className="flex justify-evenly grid-cols-3 sm:grid-cols-6 lg:grid-cols-7 gap-2 sm:gap-4 bg-rose-200 p-4">
                    <span className="col-span-2 font-semibold">Product</span>
                    <span className="font-semibold hidden lg:block">Price</span>
                    <span className="font-semibold hidden lg:block">
                      Quantity
                    </span>
                    <span className="col-span-1 sm:col-span-2 lg:col-span-1 font-semibold text-right">
                      Actions
                    </span>
                  </div>
                </div>
                <div>
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex justify-evenly grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-4 items-center p-4 border-b hover:bg-rose-100 duration-75 hover:duration-200"
                    >
                      <div className="col-span-2 flex items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-md mr-2 sm:mr-4"
                        />
                        <span className="text-sm sm:text-base font-medium">
                          {item.title}
                        </span>
                      </div>

                      <span className="font-medium text-gray-700 hidden lg:block">
                        ₹{item.price.toFixed(2)}
                      </span>
                      <span className="font-medium text-gray-700 hidden lg:block">
                        {formatQuantity(item)}
                      </span>

                      <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex justify-end space-x-2 gap-9 max-sm:gap-3 sm:space-x-4 lg:space-x-2">
                        <button
                          className="bg-green-500 shadow-sm shadow-black rounded-tr-2xl rounded-bl-2xl duration-0 hover:duration-200 text-white text-xs sm:text-sm px-3 max-sm:px-2 py-1 rounded transition"
                          onClick={() => moveToCart(index)}
                        >
                          Move to Cart
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800 text-xs sm:text-sm font-semibold"
                          onClick={() => removeItem(item.id)}
                        >
                          <IoBagRemove size={25} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default WishlistPage;
