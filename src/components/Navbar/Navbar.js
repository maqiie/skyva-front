// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <Link to="/" className="brand">Skyva</Link>
//       </div>
//       <div className="navbar-right">
//         <Link to="/about">About</Link>
//         <Link to="/services">Services</Link>
//         <Link to="/contact">Contact</Link>
//         <FontAwesomeIcon icon="fa-thin fa-cart-shopping" />
//         <Link to="/">Home</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="brand">
          Skyva
        </Link>
      </div>
      <div className="navbar-right">
      <FontAwesomeIcon icon={faShoppingCart} className="cart" />{" "}

        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        {/* Use the correct icon class */}
      </div>
    </nav>
  );
};

export default Navbar;
