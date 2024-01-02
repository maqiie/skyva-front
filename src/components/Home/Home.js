
// import React, { Component } from "react";
// import img from "../../assets/shopping.jpg"; // Adjust the path based on your project structure
// import "./Home.css";

// class Home extends Component {
//   render() {
//     return (
//       <div className="home-container">
//         <div className="image-container">
//           <img src={img} alt="Shopping" className="centered-image" />
//           <div className="center">
//             New Outwear <br /> Collection
//           </div>
//         </div>
//         <section className="new">
//           <h2>Newest Products</h2>

//           <div className="card">
            
//           </div>
//         </section>
//         <button className="cta-button">
//           <a href="#">
//             <span>Shop Now</span>
//           </a>
//         </button>
//       </div>
//     );
//   }
// }

// export default Home;
import React, { Component } from "react";
import "./Home.css";
import img from "../../assets/shopping.jpg";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

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
        <section className="new">
          <h2>Newest Products</h2>
          <div className="card-container">
            <div className="card">
              <img src={image1} alt="Product 1" />
              <p>Product 1 Description</p>
            </div>
            <div className="card">
              <img src={image2} alt="Product 2" />
              <p>Product 2 Description</p>
            </div>
            <div className="card">
              <img src={image3} alt="Product 3" />
              <p>Product 3 Description</p>
            </div>
          </div>
        </section>
        <button className="cta-button">
          <a className="a1" href="#">
            <span>Shop Now</span>
          </a>
        </button>
      </div>
    );
  }
}

export default Home;

