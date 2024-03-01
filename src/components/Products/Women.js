import React, { Component } from 'react';
import axios from 'axios';

class Women extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        try {
            const categoryId = 5; // Category ID for "Women"
            const response = await axios.get(`http://localhost:3001/products/by_category/${categoryId}`);
            this.setState({ products: response.data });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    render() {
        const { products } = this.state;

        return (
            <div>
                <h2>Products in Category 5 (Women)</h2>
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
    }
}

export default Women;
