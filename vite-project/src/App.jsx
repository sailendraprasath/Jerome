import { useState } from "react";
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
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (prevItem) => prevItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((prevItem) =>
          prevItem.id === item.id
            ? {
                ...existingItem,
                quantity: existingItem.quantity + item.quantity,
              }
            : prevItem
        );
      }
      return [...prevItems, { ...item, quantity: item.quantity }];
    });
  };

  // Function to remove items from the wishlist
  const removeFromWhish = (itemId) => {
    setWhisItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} whishCount={whishItems.length} />
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
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
        {/* Use dynamic routing */}
        {/* Contact page */}
        <Route path="/Contactpage" element={<ContactPage />} />
        {/* Cart page */}
        <Route path="/Cartpage" element={<CartPage cartItems={cartItems} />} />
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
      {/* footer  */}
    </Router>
  );
};

export default App;
