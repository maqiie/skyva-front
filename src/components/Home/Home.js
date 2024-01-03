
// import React, { Component } from "react";
// import "./Home.css";
// import img from "../../assets/shopping.jpg";
// import image1 from "../../assets/image1.jpg";
// import image2 from "../../assets/image2.jpg";
// import image3 from "../../assets/image3.jpg";

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
//           <div className="card-container">
//             <div className="card">
//               <img src={image1} alt="Product 1" />
//               <p>Product 1 Description</p>
//             </div>
//             <div className="card">
//               <img src={image2} alt="Product 2" />
//               <p>Product 2 Description</p>
//             </div>
//             <div className="card">
//               <img src={image3} alt="Product 3" />
//               <p>Product 3 Description</p>
//             </div>
//           </div>
//         </section>
        
//         <button className="cta-button">
//           <a className="a1" href="#">
//             <span>Shop Now</span>
//           </a>
//         </button>
//       </div>
//     );
//   }
// }

// export default Home;

// Home.js
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
            <div className="card1">
              <img src={image1} alt="Product 1" />
              <p>Product 1 Description</p>
            </div>
            <div className="card1">
              <img src={image2} alt="Product 2" />
              <p>Product 2 Description</p>
            </div>
            <div className="card1">
              <img src={image3} alt="Product 3" />
              <p>Product 3 Description</p>
            </div>
          </div>
        </section>
        <section className="hero-section">
          <div className="card-grid">
            <a className="card" href="#">
              <div
                className="card__background"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"
                }}
              ></div>
              <div className="card__content">
                <p className="card__category">Category</p>
                <h3 className="card__heading">Cosmetics</h3>
              </div>
            </a>
            <a className="card" href="#">
              <div
                className="card__background"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"
                }}
              ></div>
              <div className="card__content">
                <p className="card__category">Category</p>
                <h3 className="card__heading">Shoes</h3>
              </div>
            </a>
            <a className="card" href="#">
              <div
                className="card__background"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"
                }}
              ></div>
              <div className="card__content">
                <p className="card__category">Category</p>
                <h3 className="card__heading">Lingeries</h3>
              </div>
            </a>
            <a className="card" href="#">
              <div
                className="card__background"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"
                }}
              ></div>
              <div className="card__content">
                <p className="card__category">Category</p>
                <h3 className="card__heading">Dresses</h3>
              </div>
            </a>
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
