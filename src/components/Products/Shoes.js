// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Shoes = () => {
//   const [products, setProducts] = useState([]);
//   const categoryId = 2; // Hardcoded category ID, replace with the desired ID

//   useEffect(() => {
//     const fetchProductsByCategory = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3001/categories/${categoryId}/products`
//         );
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products by category:", error);
//       }
//     };

//     fetchProductsByCategory();
//   }, [categoryId]);

//   return (
//     <div>
//       <h2>Products in Category {categoryId}</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <p>Name: {product.name}</p>
//             <p>Description: {product.description}</p>
//             <p>Price: ${product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Shoes;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Shoes = () => {
//   const [products, setProducts] = useState([]);
//   const categoryId = 2; // Hardcoded category ID, replace with the desired ID

//   useEffect(() => {
//     const fetchProductsByCategory = async () => {
//       try {
//         const categoryId = 1; // Hardcoded category ID for clothes
//         const response = await axios.get(
//           `http://localhost:3001/categories/${categoryId}/products`
//         );
//         console.log("Products fetched successfully:", response.data);
        
//         // Extracting image URLs from the response data
//         const productsWithImages = response.data.map(product => ({
//           ...product,
//           imageUrl: product.image_url ? `http://localhost:3001${product.image_url}` : null
//         }));
  
//         // Log the products with image URLs
//         console.log("Products with image URLs:", productsWithImages);
  
//         // Set the state with the fetched product data
//         setProducts(productsWithImages);
//       } catch (error) {
//         console.error("Error fetching products by category:", error);
//       }
//     };
  
//     fetchProductsByCategory();
//   }, []);
  

//   return (
//     <div>
//       <h2>Products in Category {categoryId}</h2>
//       <div className="card-container">
//         {products.map((product) => (
//           <div className="card" key={product.id}>
//             <div className="card-img"></div>
//             {product.image_url && (
//               <img
//                 src={`http://localhost:3001${product.image_url}`}
//                 alt={product.name}
//                 className="w-full h-full object-cover rounded-md"
//                 style={{ aspectRatio: "16/10" }} // Adjust the aspect ratio as needed
//               />
//             )}
//             <div className="card-info">
//               <p className="text-title">{product.name}</p>
//               <p className="text-body">{product.description}</p>
//             </div>
//             <div className="card-footer">
//               <span className="text-title">${product.price}</span>
//               <div className="card-button">
//                 <svg className="svg-icon" viewBox="0 0 20 20">
//                   {/* SVG path for button icon */}
//                 </svg>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shoes;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Shoes = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProductsByCategory = async () => {
//       try {
//         const categoryId = 1; // Hardcoded category ID for shoes
//         const response = await axios.get(
//           `http://localhost:3001/categories/${categoryId}/products`
//         );
//         console.log("Products fetched successfully:", response.data);
        
//         // Extracting image URLs from the response data
//         const productsWithImages = response.data.map(product => ({
//           ...product,
//           imageUrl: product.image_url ? `http://localhost:3001${product.image_url}` : null
//         }));
  
//         // Log the products with image URLs
//         console.log("Products with image URLs:", productsWithImages);
  
//         // Set the state with the fetched product data
//         setProducts(productsWithImages);
//       } catch (error) {
//         console.error("Error fetching products by category:", error);
//       }
//     };
  
//     fetchProductsByCategory();
//   }, []);

//   return (
//     <div>
//       <h2>Products in Category Shoes</h2>
//       <div className="card-container">
//         {products.map((product) => (
//           <div className="card" key={product.id}>
//             <div className="card-img"></div>
//             {product.imageUrl && (
//               <img
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="w-full h-full object-cover rounded-md"
//                 style={{ aspectRatio: "16/10" }} // Adjust the aspect ratio as needed
//               />
//             )}
//             <div className="card-info">
//               <p className="text-title">{product.name}</p>
//               <p className="text-body">{product.description}</p>
//             </div>
//             <div className="card-footer">
//               <span className="text-title">${product.price}</span>
//               <div className="card-button">
//                 <svg className="svg-icon" viewBox="0 0 20 20">
//                   {/* SVG path for button icon */}
//                 </svg>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shoes;
import React, { useState, useEffect } from "react";
import axios from "axios";

const Shoes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const categoryId = 1; // Hardcoded category ID for shoes
        const response = await axios.get(
          `http://localhost:3001/categories/${categoryId}/products`
        );
        console.log("Products fetched successfully:", response.data);
        
        // Extracting image URLs from the response data
        const productsWithImages = response.data.map(product => ({
          ...product,
          imageUrl: product.image_url ? `http://localhost:3001${product.image_url}` : null
        }));
  
        // Log the products with image URLs
        console.log("Products with image URLs:", productsWithImages);
  
        // Set the state with the fetched product data
        setProducts(productsWithImages);
      } catch (error) {
        console.error("Error fetching products by category:", error);
      }
    };
  
    fetchProductsByCategory();
  }, []);

  return (
    <div>
      <h2>Products in Category Shoes</h2>
      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="card-img">
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-t-md"
                  style={{ aspectRatio: "16/10" }} // Adjust the aspect ratio as needed
                />
              )}
            </div>
            <div className="card-details">
              <div className="card-info">
                <p className="text-title">{product.name}</p>
                <p className="text-body">{product.description}</p>
              </div>
              <div className="card-footer">
                <span className="text-title">${product.price}</span>
                <button className="card-button">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoes;

