import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Selected Product: {cart.length}</p>
        </div>
    );
};

export default Cart;