import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/dataBaseManager';
import fakeData from '../../fakeData/products.json';
import ReviewItem from '../ReviewItem/ReviewItem';
import orderPlace from '../../images/giphy.gif';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);


    const removeProduct = (productKey) => {  
        const newCart = cart.filter(pd => pd.id !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    };

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        // console.log('Order placed');

        processOrder();
        // // ✅ Clear cart data from local storage
        // localStorage.removeItem('amajohn/carts/user');

        // // ✅ Clear cart data from state
        // setCart([]);

        // // ✅ Show a thank you message
        alert('Order placed successfully!');


    }



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

    let thankYou;
    if (orderPlaced) {
        thankYou = <img src={orderPlace} alt="" />;
    }

    return (
        <div className="shop-container">
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        removeProduct={removeProduct}
                        product={product}></ReviewItem>)
                }
                {thankYou}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
            </div>
        </div>
    );
};

export default Review;
