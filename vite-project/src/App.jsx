import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import WhishlistPage from "./pages/WhislistPage";
import Merchandise from "./pages/Merchandise";
import CardShow from "./pages/CardShow";
import Login from "./pages/Loginpage";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [whishItems, setWhisItems] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate loading time
  const simulateLoading = () => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }); // Simulate a 1-second loading time
  };

  // Call simulateLoading when the component mounts or when route changes
  useEffect(() => {
    simulateLoading();
  }, []); // Empty array ensures this runs once on mount

  // Function to add items to the wishlist
  const addToWhish = (item) => {
    setWhisItems((pastwhish) => {
      const existWhish = pastwhish.find(
        (pastwhish) => pastwhish.id === item.id
      );
      if (existWhish) {
        return pastwhish.map((pastwhish) =>
          pastwhish.id === item.id
            ? { ...existWhish, quantity: existWhish.quantity + item.quantity }
            : pastwhish
        );
      }
      return [...pastwhish, { ...item, quantity: item.quantity }];
    });
  };

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [
      ...prevItems,
      {
        ...item,
        quantity: item.quantity, // Ensure quantity already includes unit like '500g'
        total: item.price, // Store the given price
      },
    ]);
  };

  //function to remove all items in the cart
  // const removefromcart = (itemId) => {
  //   setCartItems((prevItem) => prevItem.filter((item) => item.id !== itemId));
  // };
  // Function to remove items from the wishlist
  const removeFromWhish = (itemId) => {
    setWhisItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Loading spinner or message
  const LoadingIndicator = () => (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
      <style>
        {`
          .loader {
            border: 8px solid rgba(255, 255, 255, 0.2);
            border-left: 8px solid #ffffff;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );

  return (
    <Router>
      <Navbar cartCount={cartItems.length} whishCount={whishItems.length} />
      {loading ? (
        <LoadingIndicator /> // Show loading indicator if loading
      ) : (
        <Routes>
          {/* Home page */}
          <Route path="/home" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
          {/* Merchandise page */}
          <Route
            path="/MerchandisePage"
            element={
              <Merchandise addToCart={addToCart} addToWhish={addToWhish} />
            }
          />
          {/* About page */}
          <Route path="/Aboutpage" element={<AboutPage />} />
          {/* Card show page for displaying card details */}
          <Route
            path="/card/:id"
            element={<CardShow addToCart={addToCart} addToWhish={addToWhish} />}
          />
          {/* Contact page */}
          <Route path="/Contactpage" element={<ContactPage />} />
          {/* Cart page */}
          <Route
            path="/Cartpage"
            element={<CartPage cartItems={cartItems} />}
          />
          {/* Wishlist page */}
          <Route
            path="/Whishlistpage"
            element={
              <WhishlistPage
                whishItems={whishItems}
                removeFromWhish={removeFromWhish}
                addToCart={addToCart}
              />
            }
          />
        </Routes>
      )}
      {/* footer */}
    </Router>
  );
};

export default App;
