// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios"; // Import axios for making HTTP requests
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Navbar.css";

// const Navbar = ({ cartItemCount }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");
//   const location = useLocation();

//   useEffect(() => {
//     setIsLoggedIn(!!userName);
//   }, [userName]);

//   const fetchUserData = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3001/auth/validate_token"
//       );
//       console.log("Response from server:", response.data);
//       const userData = response.data.data; // Access the 'data' object within the response
//       const name = userData.name;
//       setUserName(name);
//     } catch (error) {
//       // console.error("Error fetching user data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const handleLogout = () => {
//     // Clear authentication token from local storage
//     localStorage.removeItem("authToken");
//     // Reset user state
//     setUserName("");
//     // Log out user
//     console.log("User logged out");
//     // Show toast notification
//     showToast("Logged out successfully");
//   };

//   const showToast = (message) => {
//     // Implement your toast notification logic here
//     console.log("Toast message:", message);
//     // You can use a library like react-toastify to display toast notifications
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <Link to="/" className="brand">
//           Skyva
//         </Link>
//       </div>
//       <div className="navbar-right">
//         <Link to="/cart">
//           <div className="cart-icon-container">
//             <FontAwesomeIcon icon={faShoppingCart} className="cart1" />
//             {cartItemCount > 0 && (
//               <span className="badge">{cartItemCount}</span>
//             )}
//           </div>
//         </Link>
//         <Link to="/admin">About</Link>
//         <Link to="/product">Services</Link>
//         <Link to="/contact">Contact</Link>
//         {isLoggedIn ? (
//           <>
//             <div className="user-info">
//               <span>Welcome, {userName}</span>

//               <button onClick={handleLogout} className="Btn1">
//                 <br />
//                 <div className="logout">Logout</div>
//               </button>
//             </div>
//           </>
//         ) : (
//           <Link to="/login" className="login-link">
//             <FontAwesomeIcon icon={faUser} className="user" />
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"; // Import axios for making HTTP requests
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [cartItemCount, setCartItemCount] = useState(0); // State to store the cart count
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(!!userName);
  }, [userName]);

  useEffect(() => {
    fetchUserData();
    fetchCartItemCount(); // Fetch cart count when component mounts or location changes
  }, [location.pathname]); // Include location.pathname in the dependency array

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/auth/validate_token"
      );
      console.log("Response from server:", response.data);
      const userData = response.data.data; // Access the 'data' object within the response
      const name = userData.name;
      setUserName(name);
    } catch (error) {
      // console.error("Error fetching user data:", error);
    }
  };

  const fetchCartItemCount = async () => {
    try {
      const response = await axios.get("http://localhost:3001/carts/item_count");
      const itemCount = response.data.itemCount;
      console.log("Cart item count:", itemCount); // Log the cart item count
      setCartItemCount(itemCount); // Set the cart count from the response
    } catch (error) {
      console.error("Error fetching cart item count:", error);
    }
  };
  
  const handleLogout = () => {
    // Clear authentication token from local storage
    localStorage.removeItem("authToken");
    // Reset user state
    setUserName("");
    // Log out user
    console.log("User logged out");
    // Show toast notification
    showToast("Logged out successfully");
  };

  const showToast = (message) => {
    // Implement your toast notification logic here
    console.log("Toast message:", message);
    // You can use a library like react-toastify to display toast notifications
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="brand">
          Skyva
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/cart">
          <div className="cart-icon-container">
            <FontAwesomeIcon icon={faShoppingCart} className="cart1" />
            {cartItemCount > 0 && (
              <span className="badge">{cartItemCount}</span>
            )}
          </div>
        </Link>
        <Link to="/admin">About</Link>
        <Link to="/product">Services</Link>
        <Link to="/contact">Contact</Link>
        {isLoggedIn ? (
          <>
            <div className="user-info">
              <span>Welcome, {userName}</span>

              <button onClick={handleLogout} className="Btn1">
                <br />
                <div className="logout">Logout</div>
              </button>
            </div>
          </>
        ) : (
          <Link to="/login" className="login-link">
            <FontAwesomeIcon icon={faUser} className="user" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
