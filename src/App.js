

import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Navbar/Login/Login";
import MapComponent from "./components/Maps/MapComponent";
import AboutUs from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Producst from "./components/Products/Products";
import Admin from "./components/Admin/Admin";
import Contact from "./components/About/Contact";
import ChatComponent from "./components/Chat/ChatComponent";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // State for storing user data

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/carts/:id/get_cart"
      );
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    axios.interceptors.request.use((config) => {
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    });

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/auth/validate_token"
        );
        const userData = response.data.data;
        setCurrentUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const storedToken = localStorage.getItem("authToken");
    const isLoggedIn = !!storedToken;

    if (isLoggedIn) {
      fetchUserData();
    }
  }, []);

  const cartItemCount = cartItems.length;

  return (
    <div>
      <BrowserRouter>
      <Navbar cartItemCount={cartItemCount} currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<MapComponent />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/* <Route path="/cart/:id?" element={<Cart currentUser={currentUser} />} /> */}
          {/* <Route path="/cart/:id?" element={<Cart currentUser={currentUser} />} /> */}
          <Route path="/cart/:id?" element={<Cart currentUser={currentUser} />} />

          <Route path="/product" element={<Producst />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<ChatComponent />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
