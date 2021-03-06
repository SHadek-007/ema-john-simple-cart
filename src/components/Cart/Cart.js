import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    // console.log(props.children);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping= shipping + product.shipping;
    };
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <p>Selected Product: {quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax:${tax} </p>
            <h4>Grand Total:${grandTotal}</h4>
            {props.children}
        </div>
    );
};

export default Cart;