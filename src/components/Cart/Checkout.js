// import React, { Component } from 'react';

// class Checkout extends Component {
//     render() {
//         return (
//             <div>
//                 <div class="bg-gray-100 dark:bg-gray-900">
//     <div class="w-full max-w-3xl mx-auto p-8">
//         <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
//             <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">Checkout</h1>

//             {/* <!-- Shipping Address --> */}
//             <div class="mb-6">
//                 <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Shipping Address</h2>
//                 <div class="grid grid-cols-2 gap-4">
//                     <div>
//                         <label for="first_name" class="block text-gray-700 dark:text-white mb-1">First Name</label>
//                         <input type="text" id="first_name" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
//                     </div>
//                     <div>
//                         {/* <label for "last_name" class="block text-gray-700 dark:text-white mb-1">Last Name</label> */}
//                         <input type="text" id="last_name" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
//                     </div>
//                 </div>

//                 <div class="mt-4">
//                     <label for="address" class="block text-gray-700 dark:text-white mb-1">Address</label>
//                     <input type="text" id="address" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
//                 </div>

//                 <div class="mt-4">
//                     <label for="city" class="block text-gray-700 dark:text-white mb-1">City</label>
//                     <input type="text" id="city" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
//                 </div>

//                 <div class="grid grid-cols-2 gap-4 mt-4">
//                     <div>
//                         <label for="state" class="block text-gray-700 dark:text-white mb-1">State</label>
//                         <input type="text" id="state" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
//                     </div>
//                     <div>
//                         <label for="zip" class="block text-gray-700 dark:text-white mb-1">ZIP Code</label>
//                         <input type="text" id="zip" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
//                     </div>
//                 </div>
//             </div>

//             {/* <!-- Payment Information --> */}
//             <div>
//                 <h2 class="text-xl font-semibold text-gray-700 dark:text-white mb-2">Payment Information</h2>
//                 <div class="mt-4">
//                     <label for="card_number" class="block text-gray-700 dark:text-white mb-1">Card Number</label>
//                     <input type="text" id="card_number" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
//                 </div>

//                 <div class="grid grid-cols-2 gap-4 mt-4">
//                     <div>
//                         <label for="exp_date" class="block text-gray-700 dark:text-white mb-1">Expiration Date</label>
//                         <input type="text" id="exp_date" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
//                     </div>
//                     <div>
//                         <label for="cvv" class="block text-gray-700 dark:text-white mb-1">CVV</label>
//                         <input type="text" id="cvv" class="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
//                     </div>
//                 </div>
//             </div>

//             <div class="mt-8 flex justify-end">
//                 <button class="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Place Order</button>
//             </div>
//         </div>
//     </div>
// </div>

                
//             </div>
//         );
//     }
// }

// export default Checkout;
import React, { Component } from 'react';
import { loadStripe } from '@stripe/stripe-js';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0,
        };
    }

    componentDidMount() {
        // Calculate total price when component mounts
        const { order } = this.props;
        if (order && order.items) {
            let totalPrice = 0;
            order.items.forEach(item => {
                totalPrice += item.price * item.quantity;
            });
            this.setState({ totalPrice });
        }
    }

    handlePlaceOrder = async () => {
        try {
            // Collect shipping address details and order details
            const formData = {
                // Shipping address details
                firstName: document.getElementById('first_name').value,
                lastName: document.getElementById('last_name').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                state: document.getElementById('state').value,
                zipCode: document.getElementById('zip').value,
                
                // Payment information
                cardNumber: document.getElementById('card_number').value,
                expirationDate: document.getElementById('exp_date').value,
                cvv: document.getElementById('cvv').value,
                
                // Order details received as props
                order: this.props.order,
            };

            // Send POST request to place order
            const response = await fetch('http://localhost:3001/place-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success response (e.g., redirect to confirmation page)
                // For Stripe integration, you will redirect to Stripe checkout here
                const stripe = await loadStripe('your_stripe_public_key');
                const { error } = await stripe.redirectToCheckout({
                    items: this.props.order.items.map(item => ({
                        price: item.price,
                        quantity: item.quantity,
                    })),
                    successUrl: 'your_success_url',
                    cancelUrl: 'your_cancel_url',
                });
                if (error) {
                    console.error('Error redirecting to Stripe checkout:', error);
                }
            } else {
                // Handle error response
                console.error('Failed to place order');
            }
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    render() {
        // Assuming order details are passed as props
        const { order } = this.props;
        const { totalPrice } = this.state;

        return (
            <div className="bg-gray-100 dark:bg-gray-900 h-screen flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Checkout</h2>

                    {/* Shipping Address */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Shipping Address</h3>
                        {/* Shipping address fields */}
                        {/* ... */}
                    </div>

                    {/* Payment Information */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Payment Information</h3>
                        <div className="mt-4 space-y-4">
                            <div>
                                <label htmlFor="card_number" className="block text-gray-700 dark:text-white mb-1">Card Number</label>
                                <input type="text" id="card_number" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="exp_date" className="block text-gray-700 dark:text-white mb-1">Expiration Date</label>
                                    <input type="text" id="exp_date" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                </div>
                                <div>
                                    <label htmlFor="cvv" className="block text-gray-700 dark:text-white mb-1">CVV</label>
                                    <input type="text" id="cvv" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end">
                        <button
                            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900"
                            onClick={this.handlePlaceOrder}
                        >
                            Place Order
                        </button>
                    </div>

                    {/* Order Details */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Order Details</h3>
                        <div className="space-y-2">
                            {order && order.items ? (
                                order.items.map((item, index) => (
                                    <p key={index} className="text-gray-600 dark:text-gray-400">{item.name}: ${item.price} x {item.quantity}</p>
                                ))
                            ) : (
                                <p className="text-gray-600 dark:text-gray-400">No order details available</p>
                            )}
                            <p className="text-xl font-semibold text-gray-800 dark:text-white">Total Price: ${totalPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;
