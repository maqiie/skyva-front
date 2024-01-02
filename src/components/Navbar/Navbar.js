// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to install 'react-router-dom' if not already installed
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className="brand">Skyva</Link>
      </div>
    </nav>
  );
};

export default Navbar;
