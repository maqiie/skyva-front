
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
        <Link to="/" className="brand" >
          Skyva 
        </Link>
      </div>
      <div className="navbar-right">
      {/* <Link to="/cart"> */}
          <FontAwesomeIcon icon={faShoppingCart} className="cart1" />
        {/* </Link> */}
    
        <Link to="/aboutus">About</Link>
        <Link to="/product">Services</Link>
        <Link to="/admin
        ">Contact</Link>
        <Link to="/login">
        <FontAwesomeIcon icon ={faUser} className="user" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
