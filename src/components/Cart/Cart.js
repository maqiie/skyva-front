import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css"; // Import the CSS file for cart styles
import { Link } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      orderItems: [],
    };
  }

  componentDidMount() {
    if (this.props.currentUser) {
      const userId = this.props.currentUser.id;
      const backendEndpoint = `http://localhost:3001/carts/${userId}/get_cart`;

      axios
        .get(backendEndpoint)
        .then((response) => {
          console.log("Cart data response:", response.data);
          const { cart, order_items } = response.data;
          console.log("Cart:", cart);
          console.log("Order Items:", order_items);
          this.setState({ cart, orderItems: order_items });
        })
        .catch((error) => {
          console.error("Error fetching cart data:", error);
        });
    } else {
      console.error("No currentUser found in props.");
    }
  }
  handleQuantityChange = (itemId, newQuantity) => {
    // Check if the new quantity is zero
    if (newQuantity === 0) {
      // Remove the item from the cart
      this.removeItemFromCart(itemId);
    } else {
      // Update the quantity in the state
      this.setState((prevState) => ({
        orderItems: prevState.orderItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        ),
      }));
    }
  };
  
  removeItemFromCart = (orderItemId) => {
    console.log("Removing item with orderItemId:", orderItemId);
    axios
      .delete(
        `http://localhost:3001/carts/${this.props.currentUser.id}/remove_item/${orderItemId}`
      )
      .then((response) => {
        console.log("Item removal response:", response.data);
        // Remove the item from the state after successful removal from the backend
        this.setState((prevState) => ({
          orderItems: prevState.orderItems.filter(
            (item) => item.id !== orderItemId
          ),
        }));
        // Show success toast
        toast.success("Item removed from cart successfully", {
          className: "toast-success",
        });
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
        // Show error toast
        toast.error("Error removing item from cart", {
          className: "toast-error",
        });
      });
  };

  clearCart = () => {
    axios
      .delete(
        `http://localhost:3001/carts/${this.props.currentUser.id}/clear_cart`
      )
      .then((response) => {
        // Clear the cart in the state after successful clearance from the backend
        this.setState({ orderItems: [] });
        // Show success toast
        toast.success("Cart cleared successfully");
      })
      .catch((error) => {
        console.error("Error clearing cart:", error);
        // Show error toast
        toast.error("Error clearing cart");
      });
  };

  calculateTotal = () => {
    return this.state.orderItems.reduce(
      (total, item) => total + parseFloat(item.product.price) * item.quantity,
      0
    );
  };
  
  addQuantity = (orderItemId, quantityChange) => {
    const userId = this.props.currentUser.id; // Assuming you have currentUser available in props
    console.log("User ID:", userId);
    console.log("Order Item ID:", orderItemId);

    axios
      .patch(
        `http://localhost:3001/carts/${userId}/add_quantity/${orderItemId}`,
        {
          quantity: quantityChange, // Pass the quantity change as positive or negative
        }
      )
      .then((response) => {
        console.log("Response:", response.data);
        // Update the state with the new quantity
        const updatedOrderItems = this.state.orderItems.map((item) =>
          item.orderItemId === orderItemId
            ? { ...item, quantity: item.quantity + quantityChange }
            : item
        );
        this.setState({ orderItems: updatedOrderItems });
        // Show success toast
        toast.success("Quantity updated successfully", {
          className: "toast-success",
        });
      })
      .catch((error) => {
        console.error("Error adding quantity:", error);
        // Show error toast
        toast.error("Error adding quantity", {
          className: "toast-error",
        });
      });
  };

  render() {
    const { orderItems } = this.state;

    return (
      <div className="custom-cart">
        {" "}
        {/* Apply cart class */}
        <div className="p-4">
          <h2>Shopping Cart</h2>
          <ul>
            {/* {orderItems.map((item) => (
              <li key={item.id}>
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <p>{item.product.name}</p>
                  <p>${item.product.price}</p>
                </div>
                
                <div className="quantity-controls">
                  <button
                    onClick={() => {
                      const newQuantity = item.quantity - 1; 
                      if (newQuantity >= 0) {
                        // Ensure the quantity doesn't become negative
                        this.handleQuantityChange(item.id, newQuantity);
                        this.addQuantity(item.id, -1); 
                      }
                    }}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => {
                      this.handleQuantityChange(item.id, item.quantity + 1);
                      this.addQuantity(item.id, 1); 
                    }}
                  >
                    +
                  </button>
                </div>

                <button
                  className="button-remove"
                  onClick={() => this.removeItemFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))} */}
            {orderItems.map((item) => (
  <li key={item.id}>
    <img
      src={item.product.image}
      alt={item.product.title}
      className="cart-item-image"
    />
    <div className="cart-item-details">
      <p>{item.product.name}</p>
      <p>${item.product.price}</p>
      <p>Quantity: {item.quantity}</p> {/* Display the quantity of the item */}
    </div>
    <div className="quantity-controls">
      <button
        onClick={() => {
          const newQuantity = item.quantity - 1; // Subtract 1 from the current quantity
          if (newQuantity >= 0) {
            // Ensure the quantity doesn't become negative
            this.handleQuantityChange(item.id, newQuantity);
            this.addQuantity(item.id, -1); // Call addQuantity with a negative value to subtract
          }
        }}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button
        onClick={() => {
          this.handleQuantityChange(item.id, item.quantity + 1);
          this.addQuantity(item.id, 1); // Use item.id instead of item.product.id
        }}
      >
        +
      </button>
    </div>

    <button
      className="button-remove"
      onClick={() => this.removeItemFromCart(item.id)}
    >
      Remove
    </button>
  </li>
))}

          </ul>
          <div className="cart-total">
            <span>Total:</span>
            <span className="font-bold text-black">
              ${this.calculateTotal().toFixed(2)}
            </span>
          </div>
          <button className="order-now-button" onClick={this.clearCart}>
            Checkout
          </button>
          {/* Button to continue shopping */}
          <br></br>
          <Link to="/" className="cart-cta">
            <button1>
              <p>Continue Shopping</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button1>
          </Link>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Cart;
