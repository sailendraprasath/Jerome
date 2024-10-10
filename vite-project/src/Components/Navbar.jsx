/* eslint-disable react/prop-types */
import { FaSearch, FaHome, FaHeart, FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdContacts } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { useState } from "react";
import { FcAbout } from "react-icons/fc";
import { IoIosArrowUp } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import Logo from "../assets/Logo.webp"; // Adjust the path if needed
import WhishCount from "../Components/WhishCount";
import CartCount from "../Components/CartCount";

const Navbar = ({ cartCount, whishCount }) => {
  const [Msearch, SetMsearch] = useState(false);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  // Logout function
  const handleLogout = () => {
    localStorage.clear(); // Clear local storage
    navigate("/"); // Navigate to the login page
  };

  return (
    <>
      <div className="fixed top-0 w-full bg-white z-50 shadow-md">
        <div className="container mx-auto px-3">
          <div className="flex p-4 justify-between items-center">
            {/* Logo */}
            <div>
              <img src={Logo} alt="Logo" className="w-[60px]" />
            </div>

            {/* Search menu */}
            <div className="max-sm:hidden">
              <div className="items-center flex gap-2">
                <input
                  type="text"
                  className="border-2 border-black outline-none rounded-lg w-[250px] px-2"
                  placeholder="Search..."
                />
                <div className="bg-black text-white rounded-lg cursor-pointer p-2">
                  <FaSearch size={25} />
                </div>
              </div>
            </div>

            {/* Mobile search icon */}
            <div className="max-sm:block hidden">
              <div
                onClick={() => SetMsearch(!Msearch)}
                className="icon_wrapper hover:text-black hover:bg-white"
              >
                <FaSearch className="cursor-pointer duration-700 ml-1.5 mt-1 transition hover:duration-300" />
              </div>
            </div>

            {/* Hamburger menu */}
            <div>
              <div
                onClick={() => setNav(!nav)}
                className="icon_wrapper hover:text-black hover:bg-white"
              >
                <GiHamburgerMenu
                  size={30}
                  className="cursor-pointer duration-700 rotate-180 scale-90 transition hover:scale-125 hover:-rotate-180 hover:duration-300"
                />

                {nav && (
                  <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
                )}
                <div
                  className={`fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 ${
                    nav ? "translate-x-0" : "-translate-x-full"
                  }`}
                >
                  <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className="absolute right-4 top-6 cursor-pointer duration-700 rotate-180 scale-90 transition hover:scale-110 hover:-rotate-180 hover:duration-300"
                  />
                  <h2 className="text-2xl p-4">
                    <span className="font-bold">Sailesh </span>
                  </h2>
                  <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                      <li className="text-xl py-4 flex">
                        <FaHome size={28} className="mr-4" />
                        <Link to="/home">Home</Link>
                      </li>
                      <li className="text-xl py-4 flex">
                        <AiFillProduct size={28} className="mr-4" />
                        <Link to="/MerchandisePage">Products</Link>
                      </li>
                      <li className="text-xl py-4 flex">
                        <FcAbout size={28} className="mr-4" />
                        <Link to="/AboutPage">About</Link>
                      </li>
                      <li className="text-xl py-4 flex">
                        <MdContacts size={28} className="mr-4" />
                        <Link to="/Contactpage">Contact</Link>
                      </li>

                      {/* Cart and Wishlist */}
                      <div className="flex flex-row space-x-3 pt-3">
                        <div className="icon_wrapper relative hover:text-black hover:bg-white">
                          <FaShoppingCart className="-ml-2 cursor-pointer scale-110" />
                          <CartCount
                            count={cartCount}
                            className="w-[25px] h-[25px]"
                          />
                        </div>
                        <div>
                          <Link to="/Cartpage">Cart</Link>
                        </div>
                      </div>

                      <div className="flex flex-row space-x-3 pt-6">
                        <div className="icon_wrapper relative hover:text-black hover:bg-white">
                          <FaHeart className="-ml-2 cursor-pointer scale-110" />
                          <WhishCount
                            count={whishCount}
                            className="w-[25px] h-[25px]"
                          />
                        </div>
                        <div>
                          <Link to={"/WhishlistPage"}>WhishList</Link>
                        </div>
                      </div>

                      <li className="text-xl py-4 flex">
                        <TbTruckDelivery size={28} className="mr-4" />
                        Orders
                      </li>
                      <li className="text-xl py-4 flex">
                        <IoMdPerson size={28} className="mr-4" />
                        <Link to="/profile">Profile</Link>
                      </li>

                      {/* Logout Button */}
                      <li className="text-xl py-4 flex">
                        <button
                          onClick={handleLogout}
                          className="flex items-center text-red-500 hover:text-red-700"
                        >
                          <AiOutlineClose size={28} className="mr-4" />
                          Logout
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile search menu */}
        {Msearch && (
          <div className="max-sm:block hidden">
            <div className="flex items-center -mt-[100px]">
              <input
                type="text"
                placeholder="Search products"
                className="p-2 border-4 border-Title mt-[100px] w-full"
              />
              <IoIosArrowUp
                onClick={() => SetMsearch(!Msearch)}
                size={30}
                className="absolute right-2 mt-[100px] cursor-pointer duration-700 border-2 rounded-full border-black scale-90 transition hover:scale-110 hover:-rotate-180 hover:duration-300"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
