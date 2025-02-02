import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/dataBaseManager';
import fakeData from '../../fakeData/products.json';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProduct = (productKey) => {  
        const newCart = cart.filter(pd => pd.id !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    };

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.id === key);
            if (product) {  // ✅ Fix: Avoid undefined product
                product.quantity = savedCart[key];
                return product;
            }
            return null;
        }).filter(product => product !== null); // ✅ Remove null products

        setCart(cartProducts);
    }, []);

    return (
        <div>
            <h1>Cart Items: {cart.length}</h1>
            {
                cart.map(pd => (
                    <ReviewItem 
                        key={pd.id} 
                        product={pd} 
                        removeProduct={removeProduct} // ✅ Pass correctly
                    />
                ))
            }
        </div>
    );
};

export default Review;
