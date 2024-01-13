// import React, { useState } from 'react';
// import "./Cart.css"
// function Cart() {
//   const [items, setItems] = useState([]);
//   const [total, setTotal] = useState(0);

//   const addItem = (item) => {
//     setItems((prevItems) => [...prevItems, item]);
//     setTotal((prevTotal) => prevTotal + item.price);
//   };

//   const removeItem = (index) => {
//     setItems((prevItems) => prevItems.filter((item, i) => i !== index));
//     setTotal((prevTotal) => prevTotal - items[index].price);
//   };

//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             <img src={item.image} alt={item.name} />
//             <p>{item.name}</p>
//             <p>${item.price}</p>
//             <button onClick={() => removeItem(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <p>Total: ${total}</p>
//       <button onClick={() => addItem({ id: 1, name: 'Item 1', price: 10 })}>
//         Add Item 1
//       </button>
//       <button onClick={() => addItem({ id: 2, name: 'Item 2', price: 20 })}>
//         Add Item 2
//       </button>
//     </div>
//   );
// }

// export default Cart;
// Cart.js

// Cart.js

// Cart.js

import React, { useState } from 'react';
import './Cart.css';

function Cart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
    setTotal((prevTotal) => prevTotal + item.price);
  };

  const removeItem = (index) => {
    setItems((prevItems) => prevItems.filter((item, i) => i !== index));
    setTotal((prevTotal) => prevTotal - items[index].price);
  };

  return (
    <div className="cart">
      <button
        className="cursor-pointer duration-200 hover:scale-125 active:scale-100"
        title="Go Back"
        onClick={() => {
          // Add your logic to handle going back here
          // You can use react-router or window.history.back() based on your setup
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-blue-300">
          <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
        </svg>
      </button>

      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <div className="quantity-controls">
              <button onClick={() => removeItem(index)} className="button-remove">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button className="order-now-button">Order Now</button>
    </div>
  );
}

export default Cart;
