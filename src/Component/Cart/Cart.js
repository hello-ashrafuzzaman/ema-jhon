import React from 'react';
import './Cart.css';
const Cart = (props) => {
    // const cart = props.cart; //Option 1
    const { cart } = props;  //Option 2

    let totalAmount = 0;
    let totalShippingCost = 0;
    for (const product of cart) {
        totalAmount += product.price;
        totalShippingCost += product.shipping;
    }
    
    const taxes = totalAmount * 7 / 100;
    const grandTotal = totalAmount + taxes + totalShippingCost;
  
    return (
        <div className='cart'>
            <h5 className='cart-title'>Order Summary</h5>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalAmount} </p>
            <p>Total Shopping Charge: ${totalShippingCost} </p>
            <p>Tax: ${taxes.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;