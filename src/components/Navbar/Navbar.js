// import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

// import "./Navbar.css";

// const Navbar = ({ cartItemCount }) => {
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
//             {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
//           </div>
//         </Link>
//         <Link to="/chat">About</Link>
//         <Link to="/product">Services</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/login">
//           <FontAwesomeIcon icon={faUser} className="user" />
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

// import "./Navbar.css";

// const Navbar = ({ cartItemCount }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const authToken = localStorage.getItem("authToken");
//     setIsLoggedIn((prevIsLoggedIn) => {
//       const newIsLoggedIn = !!authToken;
//       console.log("isLoggedIn:", newIsLoggedIn); // Log the updated value
//       return newIsLoggedIn;
//     });
//   }, [location]);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     setIsLoggedIn(false);
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
//             {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
//           </div>
//         </Link>
//         <Link to="/chat">About</Link>
//         <Link to="/product">Services</Link>
//         <Link to="/contact">Contact</Link>
//         {isLoggedIn ? (
//           <>
//             <Link to="/extra-link">Extra Link</Link> {/* Display extra link if user is logged in */}
//             <Link to="/profile">
//               <FontAwesomeIcon icon={faUser} className="user" />
//             </Link>
//             <button onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <Link to="/login">
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
// import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

// import "./Navbar.css";

// const Navbar = ({ cartItemCount, handleLogout }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const authToken = localStorage.getItem("authorizationToken");
//     setIsLoggedIn(!!authToken); // Update isLoggedIn based on the presence of authToken
//   }, [location]);

//   const logout = () => {
//     // Clear authentication token from local storage
//     localStorage.removeItem("authToken");
//     // Update isLoggedIn state to false
//     setIsLoggedIn(false);
//     // Optionally perform additional cleanup or redirection here
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
//         <Link to="/about">About</Link>
//         <Link to="/product">Services</Link>
//         <Link to="/contact">Contact</Link>
//         {isLoggedIn ? (
//           <>
//             <Link to="/login">
//               <FontAwesomeIcon icon={faUser} className="user" />
//             </Link>
//             <button onClick={logout}>Logout</button>
//           </>
//         ) : (
//           <Link to="/login">
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

import "./Navbar.css";

const Navbar = ({ cartItemCount, currentUser, handleLogout }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(!!currentUser); // Update isLoggedIn based on the presence of currentUser
    console.log("currentUser:", currentUser);
  }, [location, currentUser]);

  const logout = () => {
    // Clear authentication token from local storage or perform logout action
    // handleLogout(); // Call a function to handle logout if needed
    setIsLoggedIn(false);
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
            <span className="user-icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <button onClick={logout}>Logout</button>
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
