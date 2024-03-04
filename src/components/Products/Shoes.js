
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
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-cyan-900 mb-4 text-center">Products in Category Shoes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg" key={product.id}>
            <div className="relative">
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold text-black mb-2">{product.name}</p>
              <p className="text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-bold text-black">${product.price}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
