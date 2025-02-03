import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/dataBaseManager';
import fakeData from '../../fakeData/products.json';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

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
        <div className="shop-container">
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        removeProduct={removeProduct}
                        product={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;
