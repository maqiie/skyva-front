import React, { Component } from "react";
import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    // Replace the URL below with your actual backend endpoint
    const backendEndpoint = "http://localhost:3001/carts/:id/get_cart";

    axios.get(backendEndpoint)
      .then((response) => {
        this.setState({ cartItems: response.data });
      })
      .catch((error) => {
        console.error("Error fetching cart data:", error);
      });
  }

  handleQuantityChange = (itemId, newQuantity) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ),
    }));
  };

  calculateTotal = () => {
    return this.state.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  render() {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-4 max-w-xl mx-auto mt-16 md:mt-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
            <h1 className="text-lg font-bold">Shopping Cart</h1>
            <span className="text-gray-600">
              ({this.state.cartItems.length} items)
            </span>
          </div>
          <div className="p-4">
            {this.state.cartItems.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center mb-4">
                <img
                  className="h-16 w-16 object-contain rounded-lg md:mr-4 md:mb-0 mb-4"
                  src="https://picsum.photos/200/200"
                  alt={item.title}
                />
                <div className="flex-1">
                  <h2 className="text-lg text-slate-950 font-bold">
                    {item.title}
                  </h2>
                  <span className="text-gray-600">${item.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="w-12 h-8 border border-gray-400 text-center"
                    value={item.quantity}
                    onChange={(e) =>
                      this.handleQuantityChange(item.id, parseInt(e.target.value, 10))
                    }
                  />
                  <button className="text-gray-600 hover:text-red-500">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19 13H5v-2h14v2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 bg-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-bold text-lg">
                ${this.calculateTotal().toFixed(2)}
              </span>
            </div>
            <button className="block w-full mt-4 bg-cyan-300 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
</div>
      
    );
  }
}

export default Cart;

// import React, { Component } from "react";

// class Cart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cartItems: [
//         { id: 1, title: "Product 1", price: 29.99, quantity: 1 },
//         { id: 2, title: "Product 2", price: 19.99, quantity: 1 },
//         { id: 3, title: "Product 3", price: 24.99, quantity: 1 },
//       ],
//     };
//   }

//   handleQuantityChange = (itemId, newQuantity) => {
//     this.setState((prevState) => ({
//       cartItems: prevState.cartItems.map((item) =>
//         item.id === itemId ? { ...item, quantity: newQuantity } : item
//       ),
//     }));
//   };

//   calculateTotal = () => {
//     return this.state.cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   render() {
//     return (
//       <div className="p-4 max-w-xl mx-auto mt-16">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
//             <h1 className="text-lg font-bold">Shopping Cart</h1>
//             <span className="text-gray-600">
//               ({this.state.cartItems.length} items)
//             </span>
//           </div>
//           <div className="p-4">
//             {this.state.cartItems.map((item) => (
//               <div key={item.id} className="flex items-center mb-4">
//                 <img
//                   className="h-16 w-16 object-contain rounded-lg mr-4"
//                   src="https://picsum.photos/200/200"
//                   alt={item.title}
//                 />
//                 <div className="flex-1">
//                   <h2 className="text-lg text-slate-950 font-bold">
//                     {item.title}
//                   </h2>
//                   <span className="text-gray-600">${item.price.toFixed(2)}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <input
//                     type="number"
//                     className="w-12 h-8 border border-gray-400 text-center"
//                     value={item.quantity}
//                     onChange={(e) =>
//                       this.handleQuantityChange(item.id, parseInt(e.target.value, 10))
//                     }
//                   />
//                   <button className="text-gray-600 hover:text-red-500">
//                     <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
//                       <path d="M19 13H5v-2h14v2z" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="px-4 py-3 bg-gray-200">
//             <div className="flex justify-between items-center">
//               <span className="font-bold text-lg">Total:</span>
//               <span className="font-bold text-lg">
//                 ${this.calculateTotal().toFixed(2)}
//               </span>
//             </div>
//             <button className="block w-full mt-4 bg-cyan-300  text-white font-bold py-2 px-4 rounded">
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Cart;
