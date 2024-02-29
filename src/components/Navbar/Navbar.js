// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios"; // Import axios for making HTTP requests
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [cartItemCount, setCartItemCount] = useState(0); // State to store the cart count
//   const location = useLocation();

//   useEffect(() => {
//     setIsLoggedIn(!!userName);
//   }, [userName]);

//   useEffect(() => {
//     fetchUserData();
//     fetchCartItemCount(); // Fetch cart count when component mounts or location changes
//   }, [location.pathname]); // Include location.pathname in the dependency array

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

//   const fetchCartItemCount = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3001/carts/item_count"
//       );
//       const itemCount = response.data.itemCount;
//       console.log("Cart item count:", itemCount); // Log the cart item count
//       setCartItemCount(itemCount); // Set the cart count from the response
//     } catch (error) {
//       console.error("Error fetching cart item count:", error);
//     }
//   };

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

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [cartItemCount, setCartItemCount] = useState(0);
//   const [showMenu, setShowMenu] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setIsLoggedIn(!!userName);
//   }, [userName]);

//   useEffect(() => {
//     fetchUserData();
//     fetchCartItemCount();
//   }, [location.pathname]);

//   const fetchUserData = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3001/auth/validate_token"
//       );
//       const userData = response.data.data;
//       const name = userData.name;
//       setUserName(name);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   const fetchCartItemCount = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3001/carts/item_count"
//       );
//       const itemCount = response.data.itemCount;
//       setCartItemCount(itemCount);
//     } catch (error) {
//       console.error("Error fetching cart item count:", error);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     setUserName("");
//     showToast("Logged out successfully");
//   };

//   const showToast = (message) => {
//     console.log("Toast message:", message);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
//             <div className="flex-shrink-0">
//               <Link to="/" className="text-cyan-500 font-bold text-lg">
//                 <strong>Skyva</strong>
//               </Link>
//             </div>
//             <div className="hidden sm:block sm:ml-6">
//               <div className="flex space-x-4">
//                 <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   About
//                 </Link>
//                 <Link to="/product" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   Services
//                 </Link>
//                 <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                   Contact
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <Link to="/cart" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//               <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
//               {cartItemCount > 0 && (
//                 <span className="bg-red-500 text-white px-2 py-1 rounded-full ml-1">
//                   {cartItemCount}
//                 </span>
//               )}
//             </Link>
//             {isLoggedIn ? (
//               <div className="ml-4 flex items-center">
//                 <span className="text-gray-300">Welcome, {userName}</span>
//                 <button onClick={handleLogout} className="ml-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-medium">
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <Link to="/login" className="ml-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                 <FontAwesomeIcon icon={faUser} className="text-xl" />
//               </Link>
//             )}
//           </div>
//           <div className="flex sm:hidden">
//             <button onClick={() => setShowMenu(!showMenu)} className="text-gray-300 hover:text-white focus:outline-none">
//               <FontAwesomeIcon icon={faBars} className="text-xl" />
//             </button>
//           </div>
//         </div>
//       </div>
//       {showMenu && (
//         <div className="sm:hidden bg-gray-800">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link to="/about" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
//               About
//             </Link>
//             <Link to="/services" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
//               Services
//             </Link>
//             <Link to="/contact" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faShoppingCart,
//   faUser,
//   faBars,
// } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import "./Navbar.css";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [cartItemCount, setCartItemCount] = useState(0);
//   const [showMenu, setShowMenu] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setIsLoggedIn(!!userName);
//   }, [userName]);

//   useEffect(() => {
//     fetchUserData();
//     fetchCartItemCount();
//   }, [location.pathname]);

//   const fetchUserData = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3001/auth/validate_token"
//       );
//       const userData = response.data.data;
//       const name = userData.name;
//       setUserName(name);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   const fetchCartItemCount = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3001/carts/item_count"
//       );
//       const itemCount = response.data.itemCount;
//       setCartItemCount(itemCount);
//     } catch (error) {
//       console.error("Error fetching cart item count:", error);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     setUserName("");
//     showToast("Logged out successfully");
//   };

//   const showToast = (message) => {
//     console.log("Toast message:", message);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           <div className="flex items-center justify-between w-full">
//             <div className="flex-shrink-0">

//               <Link
//                 to="/"
//                 className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-200"
//               >
//                 <span className="text-4xl font-bold">Skyva</span>
//               </Link>
//             </div>
//             <div className="hidden sm:block sm:ml-6">
//               <div className="flex space-x-4">
//                 <Link
//                   to="/about"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   About
//                 </Link>
//                 <Link
//                   to="/services"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Services
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Contact
//                 </Link>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <Link
//                 to="/cart"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
//                 {cartItemCount > 0 && (
//                   <span className="bg-red-500 text-white px-2 py-1 rounded-full ml-1">
//                     {cartItemCount}
//                   </span>
//                 )}
//               </Link>
//               <div className="hidden sm:block">
//                 {!isLoggedIn ? (
//                   <Link
//                     to="/login"
//                     className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     <FontAwesomeIcon icon={faUser} className="text-xl" />
//                   </Link>
//                 ) : (
//                   <div className="flex items-center">
//                     <span className="text-gray-300">Welcome, {userName}</span>
//                     <button
//                       onClick={handleLogout}
//                       className="ml-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-medium"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center sm:hidden">
//             <button
//               onClick={() => setShowMenu(!showMenu)}
//               className="text-gray-300 hover:text-white focus:outline-none"
//             >
//               <FontAwesomeIcon icon={faBars} className="text-xl" />
//             </button>
//           </div>
//         </div>
//       </div>
//       {showMenu && (
//         <div className="sm:hidden bg-gray-800">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link
//               to="/about"
//               className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
//             >
//               About
//             </Link>
//             <Link
//               to="/services"
//               className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
//             >
//               Services
//             </Link>
//             <Link
//               to="/contact"
//               className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
//             >
//               Contact
//             </Link>
//             {!isLoggedIn ? (
//               <Link
//                 to="/login"
//                 className="block w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Login
//               </Link>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="block w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faBars,
  faSignOutAlt,
  faTimes, // Add the faTimes icon
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [cartItemCount, setCartItemCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(!!userName);
  }, [userName]);

  useEffect(() => {
    fetchUserData();
    fetchCartItemCount();
  }, [location.pathname]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        // "http://localhost:3001/auth/validate_token"
      );
      const userData = response.data.data;
      const name = userData.name;
      setUserName(name);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchCartItemCount = async () => {
    try {
      const response = await axios.get(
        // "http://localhost:3001/carts/item_count"
      );
      const itemCount = response.data.itemCount;
      setCartItemCount(itemCount);
    } catch (error) {
      console.error("Error fetching cart item count:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUserName("");
    showToast("Logged out successfully");
  };

  const showToast = (message) => {
    console.log("Toast message:", message);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-200"
              >
                <span className="text-4xl font-bold">Skyva</span>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link
                to="/cart"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
                {cartItemCount > 0 && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full ml-1">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              <div className="hidden sm:block">
                {!isLoggedIn ? (
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <FontAwesomeIcon icon={faUser} className="text-xl" />
                  </Link>
                ) : (
                  // <div className="flex items-center">
                  //   <span className="text-gray-300">Welcome, {userName}</span>
                  //   <button
                  //     onClick={handleLogout}
                  //     className="ml-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-medium flex items-center"
                  //   >
                  //     <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />
                  //     Logout
                  //   </button>
                  // </div>
                  <div className="flex items-center">
                    <span className="text-gray-300 mr-4">Welcome,</span>
                    <span className="text-cyan-300 text-lg">{userName}</span>
                    <button
                      onClick={handleLogout}
                      className="ml-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-medium flex items-center"
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      {/* {showMenu && (
        <div className="sm:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/about"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/product"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="block w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="block w-full text-left text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )} */}
      {showMenu && (
  <div className="sm:hidden bg-gray-900">
    <div className="px-4 py-3">
      {isLoggedIn && (
        <div className="flex items-center justify-between mb-3">
          <p className="text-gray-300 text-lg">Welcome, <span className="text-cyan-300">{userName}</span></p>
          <button
            onClick={() => setShowMenu(false)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} className="text-lg" />
          </button>
        </div>
      )}
    </div>
    <div className="border-t border-gray-800">
      <nav className="mt-3">
        <Link
          to="/about"
          className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          About
        </Link>
        <Link
          to="/product"
          className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          Contact
        </Link>
        {!isLoggedIn ? (
          <Link
            to="/login"
            className="block py-2 px-4 mt-4 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="block py-2 px-4 mt-4 text-gray-300 hover:bg-gray-800 hover:text-white flex items-center"
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
          </button>
        )}
      </nav>
    </div>
  </div>
)}


    </nav>
  );
};

export default Navbar;
