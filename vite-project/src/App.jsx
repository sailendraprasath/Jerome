import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FooterShop from "./Components/FooterShop";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
// import Cards from "./Components/Cards";
import Home from "./pages/Home";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/Aboutpage" element={<AboutPage />} />
        <Route path="/Contactpage" element={<ContactPage />} />
        <Route path="/Cartpage" element={<CartPage cartItems={cartItems} />} />
      </Routes>
      <FooterShop />
    </Router>
  );
};

export default App;
