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
                    "url(https://images.unsplash.com/photo-1580326939256-bd950d90b81a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvc21ldGljc3xlbnwwfDB8MHx8fDA%3D)",
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
                    "url(https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNob2VzfGVufDB8MHwwfHx8MA%3D%3D)",
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
                    "url(https://images.unsplash.com/photo-1561526116-e2460f4d40a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhzfGVufDB8MHwwfHx8MA%3D%3D)",
                }}
              ></div>
              <div className="card__content">
                <p className="card__category">Category</p>
                <h3 className="card__heading">Clothes</h3>
              </div>
            </a>
            <a className="card" href="#">
              <div
                className="card__background"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1699570048416-464809789279?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJlc3MlMjBzZXdpbmd8ZW58MHwwfDB8fHww)",
                }}
              ></div>
              <div className="card__content">
                <p className="card__category">Category</p>
                <h3 className="card__heading">Dresses</h3>
              </div>
            </a>
          </div>
          
          
        </section>
        <section className="hero-section">
        <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.621694221964!2d39.22974799535693!3d-6.776292510759074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4ffd9443848f%3A0x177d30c63cc6adc6!2sC!5e0!3m2!1sen!2stz!4v1704468258544!5m2!1sen!2stz"
              width="1500"
              height="550"
              // margin-bottom ="20px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
