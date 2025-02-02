import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/dataBaseManager';
import fakeData from '../../fakeData/products.json';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key=>{
            const product = fakeData.find(pd=>pd.id === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }
    ,[]);

    return (
        <div>
            <h1>Cart Items : {cart.length}</h1>
            {
                cart.map(pd=><ReviewItem key={pd.id} product={pd}></ReviewItem>)
            }

        </div>
    );
};

export default Review;