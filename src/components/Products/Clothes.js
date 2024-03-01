
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Clothes = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProductsByCategory = async () => {
//       try {
//         const categoryId = 1; // Hardcoded category ID for clothes
//         const response = await axios.get(
//           `http://localhost:3001/categories/${categoryId}/products`
//         );
//         console.log("Products fetched successfully:", response.data);
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products by category:", error);
//       }
//     };

//     fetchProductsByCategory();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-xl font-bold">Products in Category 4</h2>
//       <div className="grid grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1"
//           >
//             <div className="duration-500 contrast-50 h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600 hover:contrast-100"></div>
//             <div className="flex flex-col gap-4">
//               <div className="flex flex-row justify-between">
//                 <div className="flex flex-col">
//                   <span className="text-xl font-bold">{product.name}</span>
//                   <p className="text-xs text-gray-700">ID: {product.id}</p>
//                 </div>
//                 <span className="font-bold text-red-600">${product.price}</span>
//               </div>
//               <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2">Add to cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Clothes;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Clothes = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProductsByCategory = async () => {
//       try {
//         const categoryId = 1; // Hardcoded category ID for clothes
//         const response = await axios.get(
//           `http://localhost:3001/categories/${categoryId}/products`
//         );
//         console.log("Products fetched successfully:", response.data);
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products by category:", error);
//       }
//     };

//     fetchProductsByCategory();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-xl font-bold">Products in Category 4</h2>
//       <div className="grid grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div class="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
//           <div class="w-52 h-40 bg-sky-300 rounded-2xl"></div>
//           <div class="">
//               <p class="font-extrabold">Card title</p>
//               <p class="">4 popular types of cards in UI design.</p>
//           </div>
//           <button class="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
//         </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Clothes;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Clothes = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProductsByCategory = async () => {
//       try {
//         const categoryId = 1; // Hardcoded category ID for clothes
//         const response = await axios.get(
//           `http://localhost:3001/categories/${categoryId}/products`
//         );
//         console.log("Products fetched successfully:", response.data);
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products by category:", error);
//       }
//     };

//     fetchProductsByCategory();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-xl font-bold">Products in Category 4</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//         {products.map((product, index) => (
//           <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
//             {product.image_url && (
//               <img
//                 src={`http://localhost:3001${product.image_url}`}
//                 alt={product.name}
//                 className="w-full h-full object-cover rounded-md"
//                 style={{ aspectRatio: "16/10" }} // Adjust the aspect ratio as needed
//               />
//             )}
//             <div className="p-4">
//               <p className="text-lg font-semibold mb-2 text-neutral-900">{product.name}</p>
//               <p className="text-neutral-700">{product.description}</p>
//             </div>
//             <div className="flex justify-center pb-4">
//               <button className="bg-sky-700 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded-full transition-colors">See More</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Clothes;
import React, { useState, useEffect } from "react";
import axios from "axios";

const Clothes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const categoryId = 1; // Hardcoded category ID for clothes
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
      <h2 className="text-xl font-bold">Products in Category 4</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
            {product.image_url && (
              <img
                src={`http://localhost:3001${product.image_url}`}
                alt={product.name}
                className="w-full h-full object-cover rounded-md"
                style={{ aspectRatio: "16/10" }} // Adjust the aspect ratio as needed
              />
            )}
            <div className="p-4">
              <p className="text-lg font-semibold mb-2 text-neutral-900">{product.name}</p>
              <p className="text-neutral-700">{product.description}</p>
            </div>
            <div className="flex justify-center pb-4">
              <button className="bg-sky-700 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded-full transition-colors">See More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothes;
