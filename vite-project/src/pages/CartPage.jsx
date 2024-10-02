/* eslint-disable react/prop-types */
import { useState } from "react";
import EmptyCartImage from "../assets/About/empty.png"; // Ensure this path is correct

const CartPage = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems);

  const increaseQuantity = (index) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  const decreaseQuantity = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity -= 1;
      setItems(newItems);
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>
      {items.length === 0 ? (
        <div className="text-center text-gray-500">
          <img
            src={EmptyCartImage}
            alt="Empty Cart"
            className="mx-auto mb-4 w-1/3"
          />
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md">
          {/* Horizontal and vertical scroll for max-sm, fixed layout for larger screens */}
          <div className="overflow-x-auto overflow-y-auto sm:overflow-visible max-h-96 sm:max-h-none">
            <div className="min-w-[600px] border-b">
              <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 bg-gray-200 p-4">
                <span className="col-span-2 font-semibold">Product</span>
                <span className="font-semibold hidden md:block">Price</span>
                <span className="col-span-1 font-semibold text-center">
                  Quantity
                </span>
                <span className="font-semibold hidden lg:block">Total</span>
                <span className="font-semibold text-right">Actions</span>
              </div>
            </div>
            <div>
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 items-center p-4 border-b hover:bg-gray-50 min-w-[600px]"
                >
                  <div className="col-span-2 flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-md mr-4"
                    />
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <span className="font-medium text-gray-700 hidden md:block">
                    ₹{item.price.toFixed(2)}
                  </span>
                  <div className="col-span-1 flex justify-center items-center">
                    <button
                      className="bg-gray-200 text-gray-600 rounded-full px-2 py-1 mr-2 hover:bg-gray-300"
                      onClick={() => decreaseQuantity(index)}
                    >
                      -
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      className="bg-gray-200 text-gray-600 rounded-full px-2 py-1 ml-2 hover:bg-gray-300"
                      onClick={() => increaseQuantity(index)}
                    >
                      +
                    </button>
                  </div>
                  <span className="font-medium hidden lg:block">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className="text-right text-red-600 hover:text-red-800 font-semibold"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 flex justify-between bg-gray-100 font-semibold">
            <h3 className="text-xl">Grand Total:</h3>
            <span className="text-xl">₹{calculateTotal().toFixed(2)}</span>
          </div>
          <div className="p-4">
            <button className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
