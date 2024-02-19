import React, { useState, useEffect } from "react";
import axios from "axios";

const Cosmetics = ({ categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products/by_category/${categoryId}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products by category:", error);
      }
    };

    fetchProductsByCategory();
  }, [categoryId]);

  return (
    <div>
      <h2>Products in Category {categoryId}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cosmetics;
