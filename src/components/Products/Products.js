// import React, { Component } from "react";
// import "./Products.css";

// class Producst extends Component {
//   render() {
//     return (
//       <div>

//         {/* section for cards */}

//         <section className="py-8 sm:py-12 bg-white">
//           <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
//             <div class="mx-auto max-w-screen-xl px-4 w-full">
//               <h2 class="mb-4 font-bold text-xl text-gray-900">Trending</h2>
//               <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
//                 <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
//                   <a
//                     href=""
//                     class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       class="w-6 h-6"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
//                       />
//                     </svg>
//                   </a>

//                   <div class="h-auto overflow-hidden">
//                     <div class="h-44 overflow-hidden relative">
//                       <img
//                         src="https://cdn.pixabay.com/photo/2023/10/16/05/01/dress-8318436_640.jpg"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                   <div class="bg-white py-4 px-3">
//                     <div class="flex justify-between items-center">
//                       <button class="CartBtn">
//                         <span class="IconContainer">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             height="1em"
//                             viewBox="0 0 576 512"
//                             fill="rgb(17, 17, 17)"
//                             class="cart"
//                           >
//                             <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
//                           </svg>
//                         </span>
//                         <p class="text">Add to Cart</p>
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
//                   <a
//                     href=""
//                     class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       class="w-6 h-6"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
//                       />
//                     </svg>
//                   </a>

//                   <div class="h-auto overflow-hidden">
//                     <div class="h-44 overflow-hidden relative">
//                       <img
//                         src="https://images.unsplash.com/photo-1589565944201-d5ee383f28fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3NzfGVufDB8MHwwfHx8MA%3D%3D"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                   <div class="bg-white py-4 px-3">
//                     <div class="flex justify-between items-center">
//                       <button class="CartBtn">
//                         <span class="IconContainer">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             height="1em"
//                             viewBox="0 0 576 512"
//                             fill="rgb(17, 17, 17)"
//                             class="cart"
//                           >
//                             <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
//                           </svg>
//                         </span>
//                         <p class="text">Add to Cart</p>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
//                   <a
//                     href=""
//                     class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       class="w-6 h-6"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
//                       />
//                     </svg>
//                   </a>

//                   <div class="h-auto overflow-hidden">
//                     <div class="h-44 overflow-hidden relative">
//                       <img
//                         src="https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlwc3RpY2t8ZW58MHwwfDB8fHww"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                   <div class="bg-white py-4 px-3">
//                     <div class="flex justify-between items-center">
//                       <button class="CartBtn">
//                         <span class="IconContainer">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             height="1em"
//                             viewBox="0 0 576 512"
//                             fill="rgb(17, 17, 17)"
//                             class="cart"
//                           >
//                             <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
//                           </svg>
//                         </span>
//                         <p class="text">Add to Cart</p>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
//                   <a
//                     href=""
//                     class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       class="w-6 h-6"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
//                       />
//                     </svg>
//                   </a>/ // Products.js

// import React, { Component } from "react";
// import axios from "axios"; // Import Axios
// import "./Products.css";

// class Products extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [], // Initialize products state
//       loading: true, // Optional loading state
//       favorites: {}, // Keep track of favorite products
//     };
//   }

//   componentDidMount() {
//     // Fetch products when the component mounts
//     axios
//       .get("http://localhost:3001/products")
//       .then((response) => {
//         this.setState({
//           products: response.data,
//           loading: false,
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         this.setState({ loading: false });
//       });
//   }

//   toggleFavorite = (productId) => {
//     this.setState((prevState) => ({
//       favorites: {
//         ...prevState.favorites,
//         [productId]: !prevState.favorites[productId],
//       },
//     }), () => {
//       // Call backend API to add/remove product from favorites
//       // You can use axios here to make a POST request to your backend API
//       // Pass the productId and the current favorite status to your API
//     });
//   };

//   render() {
//     const { products, loading, favorites } = this.state;

//     return (
//       <div>
//         {loading ? (
//           <div>Loading...</div>
//         ) : (
//           <section className="py-8 sm:py-12 bg-white">
//             <div className="mx-auto max-w-screen-xl px-4 w-full">
//               <h2 className="mb-4 font-bold text-xl text-gray-900">Trending</h2>
//               <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                   <div
//                     key={product.id}
//                     className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm"
//                   >
//                     <div className="h-44 overflow-hidden relative">
//                       <a href="#">
//                         <img
//                           src={`http://localhost:3001${product.image_url}`}
//                           alt={product.name}
//                           className="h-full w-full object-cover rounded-t-xl"
//                           onError={(e) => {
//                             console.error("Error loading image:", e);
//                           }}
//                         />
//                       </a>
                   
//                     </div>

//                     <div className="bg-white py-4 px-3">
//                       <div className="flex justify-between items-center">
//                         <button className="CartBtn">
//                           <span className="IconContainer">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               height="1em"
//                               viewBox="0 0 576 512"
//                               fill="rgb(17, 17, 17)"
//                               className="cart"
//                             >
//                               <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
//                             </svg>
//                           </span>
//                           <p className="text">Add to Cart</p>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}
//       </div>
//     );
//   }
// }

// export default Products;
// import React, { Component } from "react";
// import axios from "axios"; // Import Axios
// import "./Products.css";

// class Products extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [], // Initialize products state
//       loading: true, // Optional loading state
//       favorites: {}, // Keep track of favorite products
//     };
//   }

//   componentDidMount() {
//     // Fetch products when the component mounts
//     axios
//       .get("http://localhost:3001/products")
//       .then((response) => {
//         this.setState({
//           products: response.data,
//           loading: false,
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         this.setState({ loading: false });
//       });
//   }

//   toggleFavorite = (productId) => {
//     this.setState((prevState) => ({
//       favorites: {
//         ...prevState.favorites,
//         [productId]: !prevState.favorites[productId],
//       },
//     }), () => {
//       // Call backend API to add/remove product from favorites
//       // You can use axios here to make a POST request to your backend API
//       // Pass the productId and the current favorite status to your API
//     });
//   };

//   render() {
//     const { products, loading, favorites } = this.state;

//     return (
//       <div>
//         {loading ? (
//           <div>Loading...</div>
//         ) : (
//           <section className="py-8 sm:py-12 bg-white">
//             <div className="mx-auto max-w-screen-xl px-4 w-full">
//               <h2 className="mb-4 font-bold text-xl text-gray-900">Trending</h2>
//               <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                   <div
//                     key={product.id}
//                     className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm"
//                   >
//                     <div className="h-44 overflow-hidden relative">
//                       <a href="#">
//                         <img
//                           src={`http://localhost:3001${product.image_url}`}
//                           alt={product.name}
//                           className="h-full w-full object-cover rounded-t-xl"
//                           onError={(e) => {
//                             console.error("Error loading image:", e);
//                           }}
//                         />
//                       </a>
//                     </div>

//                     {/* Product details */}
//                     <div className="bg-white py-4 px-3">
//                       <div className="flex justify-between items-center">
//                         {/* Product name */}
//                         <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
//                         {/* Product price */}
//                         <p className="text-gray-700">${product.price}</p>
//                       </div>
                      
//                       {/* Add to Cart button */}
//                       <div className="flex justify-between items-center mt-2">
//                         <button className="CartBtn">
//                           <span className="IconContainer">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               height="1em"
//                               viewBox="0 0 576 512"
//                               fill="rgb(17, 17, 17)"
//                               className="cart"
//                             >
//                               {/* SVG path */}
//                             </svg>
//                           </span>
//                           <p className="text">Add to Cart</p>
//                         </button>
//                         {/* Love icon for adding to favorites */}
//                         <div className="love">
//                           <input
//                             id={`switch-${product.id}`}
//                             type="checkbox"
//                             checked={favorites[product.id]}
//                             onChange={() => this.toggleFavorite(product.id)}
//                           />
//                           <label className="love-heart" htmlFor={`switch-${product.id}`}>
//                             <i className="left"></i>
//                             <i className="right"></i>
//                             <i className="bottom"></i>
//                             <div className="round"></div>
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}
//       </div>
//     );
//   }
// }

// export default Products;
// Products.js

//                   <div class="h-auto overflow-hidden">
//                     <div class="h-44 overflow-hidden relative">
//                       <img
//                         src="https://images.unsplash.com/photo-1454793781512-0fafb38dce83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                   <div class="bg-white py-4 px-3">
//                     <div class="flex justify-between items-center">
//                       <button class="CartBtn">
//                         <span class="IconContainer">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             height="1em"
//                             viewBox="0 0 576 512"
//                             fill="rgb(17, 17, 17)"
//                             class="cart"
//                           >
//                             <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
//                           </svg>
//                         </span>
//                         <p class="text">Add to Cart</p>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
//                   <a
//                     href=""
//                     class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       class="w-6 h-6"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
//                       />
//                     </svg>
//                   </a>

//                   <div class="h-auto overflow-hidden">
//                     <div class="h-44 overflow-hidden relative">
//                       <img
//                         src="https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVlbHN8ZW58MHx8MHx8fDA%3D"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                   <div class="bg-white py-4 px-3">
//                     <div class="flex justify-between items-center">
//                       <button class="CartBtn">
//                         <span class="IconContainer">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             height="1em"
//                             viewBox="0 0 576 512"
//                             fill="rgb(17, 17, 17)"
//                             class="cart"
//                           >
//                             <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
//                           </svg>
//                         </span>
//                         <p class="text">Add to Cart</p>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
//                   <a
//                     href=""
//                     class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       class="w-6 h-6"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
//                       />
//                     </svg>
//                   </a>

//                   <div class="h-auto overflow-hidden">
//                     <div class="h-44 overflow-hidden relative">
//                       <img
//                         src="https://plus.unsplash.com/premium_photo-1664478180158-6bcc5527661f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwdG9wc3xlbnwwfHwwfHx8MA%3D%3D"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                   <div class="bg-white py-4 px-3">
//                     <div class="flex justify-between items-center">
//                       <button class="CartBtn">
//                         <span class="IconContainer">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             height="1em"
//                             viewBox="0 0 576 512"
//                             fill="rgb(17, 17, 17)"
//                             class="cart"
//                           >
//                             <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
//                           </svg>
//                         </span>
//                         <p class="text">Add to Cart</p>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
//                   <a
//                     href=""
//                     class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       class="w-6 h-6"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
//                       />
//                     </svg>
//                   </a>

//                   <div class="h-auto overflow-hidden">
//                     <div class="h-44 overflow-hidden relative">
//                       <img
//                         src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29zbWV0aWNzfGVufDB8fDB8fHww"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                   <div class="bg-white py-4 px-3">
//                     <div class="flex justify-between items-center">
//                       <button class="CartBtn">
//                         <span class="IconContainer">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             height="1em"
//                             viewBox="0 0 576 512"
//                             fill="rgb(17, 17, 17)"
//                             class="cart"
//                           >
//                             <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
//                           </svg>
//                         </span>
//                         <p class="text">Add to Cart</p>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
//                   <a
//                     href=""
//                     class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke-width="1.5"
//                       stroke="currentColor"
//                       class="w-6 h-6"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
//                       />
//                     </svg>
//                   </a>

//                   <div class="h-auto overflow-hidden">
//                     <div class="h-44 overflow-hidden relative">
//                       <img
//                         src="https://images.unsplash.com/photo-1684255869384-4d3a23e58569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGplYW5zJTIwbXVtbXl8ZW58MHx8MHx8fDA%3D"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                   <div class="bg-white py-4 px-3">
//                     <div class="flex justify-between items-center">
//                       <button class="CartBtn">
//                         <span class="IconContainer">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             height="1em"
//                             viewBox="0 0 576 512"
//                             fill="rgb(17, 17, 17)"
//                             class="cart"
//                           >
//                             <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
//                           </svg>
//                         </span>
//                         <p class="text">Add to Cart</p>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

// export default Producst;


import React, { Component } from "react";
import axios from "axios"; // Import Axios
import "./Products.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [], // Initialize products state
      loading: true, // Optional loading state
      favorites: {}, // Keep track of favorite products
    };
  }

  componentDidMount() {
    // Fetch products when the component mounts
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        this.setState({
          products: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        this.setState({ loading: false });
      });
  }

  toggleFavorite = (productId) => {
    this.setState((prevState) => ({
      favorites: {
        ...prevState.favorites,
        [productId]: !prevState.favorites[productId],
      },
    }), () => {
      // Call backend API to add/remove product from favorites
      // You can use axios here to make a POST request to your backend API
      // Pass the productId and the current favorite status to your API
    });
  };

  render() {
    const { products, loading, favorites } = this.state;

    return (
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <section className="py-8 sm:py-12 bg-white">
            <div className="mx-auto max-w-screen-xl px-4 w-full">
              <h2 className="mb-4 font-bold text-xl text-gray-900">Trending</h2>
              <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm"
                  >
                    <div className="h-44 overflow-hidden relative">
                      <a href="#">
                        <img
                          src={`http://localhost:3001${product.image_url}`}
                          alt={product.name}
                          className="h-full w-full object-cover rounded-t-xl"
                          onError={(e) => {
                            console.error("Error loading image:", e);
                          }}
                        />
                      </a>
                      {/* Love icon for adding to favorites */}
                      <div className="love">
                        <input
                          id={`switch-${product.id}`}
                          type="checkbox"
                          checked={favorites[product.id]}
                          onChange={() => this.toggleFavorite(product.id)}
                        />
                        <label className="love-heart" htmlFor={`switch-${product.id}`}>
                          <i className="left"></i>
                          <i className="right"></i>
                          <i className="bottom"></i>
                          <div className="round"></div>
                        </label>
                      </div>
                    </div>

                    <div className="bg-white py-4 px-3">
                      <div className="flex justify-between items-center">
                        <button className="CartBtn">
                          <span className="IconContainer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 576 512"
                              fill="rgb(17, 17, 17)"
                              className="cart"
                            >
                              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                            </svg>
                          </span>
                          <p className="text">Add to Cart</p>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default Products;
