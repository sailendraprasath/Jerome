/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoBagRemove } from "react-icons/io5";
import EmptyCartImage from "../assets/About/empty.png";
import { Link } from "react-router-dom";

const CartPage = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems);

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const formatQuantity = (item) => {
    if (item.unit === "g") {
      return item.quantity.toString().includes("g")
        ? item.quantity
        : `${item.quantity}g`;
    } else if (item.unit === "kg") {
      return `${item.quantity}`;
    } else if (item.unit === "liter") {
      return `${item.quantity} liter`;
    } else if (item.unit === "pieces") {
      return `${item.quantity} piece${item.quantity > 1 ? "s" : ""}`;
    }
    return `${item.quantity}`;
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      total += item.price;
      return total;
    }, 0);
  };

  return (
    <>
      {items.length !== 0 ? (
        <div className="bg-rose-300 p-4 px-10 caret-transparent select-none shadow-sm shadow-black/90 mt-[110px] rounded-tr-[80px] max-sm:rounded-md rounded-bl-[50px] text-left">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
            YOUR CART HERE!!
          </h1>
          <p className="text-white flex justify-start space-x-2 text-sm md:text-base lg:text-lg mt-2">
            <Link className="cursor-pointer" to={"/"}>
              HOME
            </Link>
            <Link className="cursor-pointer" to={"/MerchandisePage"}>
              / PRODUCTS
            </Link>
            <span>/ YOUR CART</span>
          </p>
        </div>
      ) : null}
      <div className="container mx-auto p-4 mt-[150px] sm:p-6 lg:p-8 font-welcome">
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
            <h2 className="text-3xl mt-[-135px] font-bold text-center font-welcome mb-6">
              Your Cart
            </h2>
            <div className="bg-white rounded-lg shadow-md">
              <div className="overflow-x-auto sm:overflow-visible max-h-96 sm:max-h-none">
                <div className="min-w-[600px] overflow-y-auto border-b">
                  <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 bg-rose-100 text-2xl font-welcome p-4 text-center">
                    <span className="col-span-2 font-semibold">Product</span>
                    <span className="font-semibold hidden md:block">Price</span>
                    <span className="col-span-1 font-semibold">Quantity</span>
                    <span className="font-semibold hidden lg:block">Total</span>
                    <span className="font-semibold text-right">Actions</span>
                  </div>
                </div>
                <div>
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 items-center p-4 border-b hover:bg-rose-50 duration-75"
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
                        ₹{item.price.toFixed(2)}{" "}
                        {/* Show price with two decimals */}
                      </span>
                      <div className="col-span-1 flex justify-center items-center">
                        <span className="font-medium">
                          {formatQuantity(item)}{" "}
                          {/* Show formatted quantity with unit */}
                        </span>
                      </div>
                      <span className="font-medium hidden lg:block">
                        ₹{item.total.toFixed(2)} {/* Show total price */}
                      </span>
                      <button
                        className="text-right text-red-600 hover:text-red-800 px-2 font-semibold"
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
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
