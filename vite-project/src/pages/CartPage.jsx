/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoBagRemove } from "react-icons/io5";
import EmptyCartImage from "../assets/About/empty.png"; // Ensure this path is correct
import { IoMdAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";

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
    <div className="container mx-auto p-4 mt-20 sm:p-6 lg:p-8 font-welcome">
      <h2 className="text-3xl font-bold text-center font-welcome mb-6">
        Your Cart
      </h2>
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
        <div className="bg-white rounded-lg  shadow-md">
          {/* Horizontal and vertical scroll for max-sm, fixed layout for larger screens */}
          <div className="overflow-x-auto   sm:overflow-visible max-h-96 sm:max-h-none">
            <div className="min-w-[600px] overflow-y-auto border-b">
              <div className="flex justify-evenly grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 bg-rose-100 text-2xl font-welcome p-4">
                <span className="col-span-2 font-semibold">Product</span>
                <span className="font-semibold hidden md:block ml-[80px]">
                  Price
                </span>
                <span className="col-span-1 font-semibold ml-8  max-sm:ml-[75px] text-center">
                  Quantity
                </span>
                <span className="font-semibold hidden ml-8 lg:block">
                  Total
                </span>
                <span className="font-semibold text-right">Actions</span>
              </div>
            </div>
            <div>
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="flex justify-evenly grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 items-center p-4 border-b hover:bg-rose-50 duration-75 hover:duration-200 min-w-[600px]"
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
                      className=" rounded-full px-2 py-1 mr-2"
                      onClick={() => decreaseQuantity(index)}
                    >
                      <IoIosRemoveCircle size={20} className="text-red-400" />
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      className=" rounded-full px-2 py-1 ml-2 "
                      onClick={() => increaseQuantity(index)}
                    >
                      <IoMdAddCircle size={20} className="text-green-400" />
                    </button>
                  </div>
                  <span className="font-medium hidden lg:block">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className="text-right text-red-600 hover:text-red-800  px-2 font-semibold"
                    onClick={() => removeItem(index)}
                  >
                    <IoBagRemove size={25} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 flex justify-between bg-rose-100 font-semibold">
            <h3 className="text-xl">Grand Total:</h3>
            <span className="text-xl">₹{calculateTotal().toFixed(2)}</span>
          </div>
          <div className="p-4 bg-rose-50">
            <button className="bg-green-500 rounded-tr-2xl rounded-bl-2xl text-white rounded px-4 py-2 hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
