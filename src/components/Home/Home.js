import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

import img from "../../assets/shopping.jpg";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const swiperImages = [image1, image2, image3]; // Add more image URLs as needed

class Home extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className="home-container">
        <div
          className="relative image-container overflow-hidden rounded-md mt-12 sm:mt-16 md:mt-20"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          {/* Image */}
          <img
            src={img}
            alt="Shopping"
            className="w-full h-auto mt-4 sm:mt-8 md:mt-12"
          />

          {/* Text Container */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 sm:p-6 md:p-8">
            <div
              className="center animated"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4">
                New Outwear
                <br /> Collection
              </h2>

              <div
                className="button-container"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <button className=" text-white py-2 px-3 sm:px-4 rounded-full font-semibold text-xs sm:text-sm md:text-base transition duration-300 ">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <section className="new" data-aos="fade-up" data-aos-delay="400">
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
        </section> */}
        <section className="new" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-3xl text-black font-bold mb-8 text-center">
            Newest Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="card1 bg-white p-4 rounded-md shadow-md">
              <img
                src={image1}
                alt="Product 1"
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <p className="text-lg font-semibold mb-2">
                Product 1 Description
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold text-sm transition duration-300 hover:bg-blue-600">
                Buy Now
              </button>
            </div>

            <div className="card1 bg-white p-4 rounded-md shadow-md">
              <img
                src={image2}
                alt="Product 2"
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <p className="text-lg font-semibold mb-2">
                Product 2 Description
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold text-sm transition duration-300 hover:bg-blue-600">
                Buy Now
              </button>
            </div>
            <div className="card1 bg-white p-4 rounded-md shadow-md">
              <img
                src={image2}
                alt="Product 2"
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <p className="text-lg font-semibold mb-2">
                Product 2 Description
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold text-sm transition duration-300 hover:bg-blue-600">
                Buy Now
              </button>
            </div>

            <div className="card1 bg-white p-4 rounded-md shadow-md">
              <img
                src={image3}
                alt="Product 3"
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <p className="text-lg font-semibold mb-2">
                Product 3 Description
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold text-sm transition duration-300 hover:bg-blue-600">
                Buy Now
              </button>
            </div>
          </div>
        </section>

        <section
          className="hero-section"
          data-aos="fade-up"
          data-aos-delay="600"
        >
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
        <section className="py-8">
          <h3 className="text-3xl font-bold text-black text-center mb-6">
            Special Offers
          </h3>

          <div className="flex flex-wrap justify-center gap-4 p-4">
            <div className="flex justify-center items-center border h-32 w-48 bg-blue-100 rounded-md shadow-md">
              <span className="text-lg font-semibold">1</span>
            </div>

            <div className="flex justify-center items-center border h-32 w-48 bg-blue-100 rounded-md shadow-md">
              <span className="text-lg font-semibold">2</span>
            </div>

            <div className="flex justify-center items-center border h-32 w-48 bg-blue-100 rounded-md shadow-md">
              <span className="text-lg font-semibold">3</span>
            </div>

            <div className="flex justify-center items-center border h-32 w-48 bg-blue-100 rounded-md shadow-md">
              <span className="text-lg font-semibold">4</span>
            </div>

            <div className="flex justify-center items-center border h-32 w-48 bg-blue-100 rounded-md shadow-md">
              <span className="text-lg font-semibold">5</span>
            </div>

            <div className="flex justify-center items-center border h-32 w-48 bg-blue-100 rounded-md shadow-md">
              <span className="text-lg font-semibold">6</span>
            </div>
          </div>
        </section>

        <section className="hero-section">
          <div className="maps" data-aos="fade-up" data-aos-delay="800">
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
      </div>
    );
  }
}

export default Home;
