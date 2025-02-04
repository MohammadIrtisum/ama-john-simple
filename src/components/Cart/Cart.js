import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total,prd)=>total+prd.price,0)
    let total =0;
    for(let i=0;i<cart.length;i++)
    {
        const product = cart[i];
        total = total+product.price*product.quantity || 1;  // if quantity is not available then set it to 1
    
    }

    let shipping =0;
    if(total>35)
    {
        shipping =0;
    }
    else if(total>15)
    {
        shipping =4.99
    }
    else if(total>0)
    {
        shipping =12.99
    }

    const formatNumber = num =>{
        const precision = num.toFixed(2)
        return precision
    }

    const tax = (total/10).toFixed(2)
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p><small>Product price : {formatNumber(total)}</small></p>
            <p><small>Shipping cost : {shipping}</small></p>
            <p><small>Tax + VAT : {tax}</small></p>
            <p>Total Price : {total+shipping+Number(tax)}</p>
            <br />
            {
                props.children
            }
        </div>
    );
};

export default Cart;