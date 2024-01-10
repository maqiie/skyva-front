
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from  "@fortawesome/free-solid-svg-icons" 

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
        <FontAwesomeIcon icon={faShoppingCart} className="cart" />
        <Link to="/map">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">
        <FontAwesomeIcon icon ={faUser} className="user" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
