import React, { Component } from "react";
import img from "../../assets/shopping.jpg"; // Adjust the path based on your project structure
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <img src={img} alt="Shopping" className="centered-image" />
        <div class="center">
          New Outwear <br /> collection
        </div>
        <button>
          <a href="#">
            <span>Button</span>
          </a>
        </button>
      </div>
    );
  }
}

export default Home;
