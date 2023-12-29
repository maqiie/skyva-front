import React, { Component } from "react";
import img from "../../assets/shopping.jpg"; // Adjust the path based on your project structure
import "./Home.css";

class Home extends Component {
  render() {
    return (
    <div className="home-container">
      <div className="image-container">
        <img src={img} alt="Shopping" className="centered-image" />
        <div className="center">
          New Outwear <br /> Collection
        </div>
      </div>
      <button className="cta-button">
        <a href="#">
          <span>Button</span>
        </a>
      </button>
    </div>
    );
  }
}

export default Home;
