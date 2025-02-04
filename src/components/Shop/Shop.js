import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/dataBaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const existingProduct = cart.find(pd => pd.id === product.id);
        let newCart;

        if (existingProduct) {
            const updatedCart = cart.map(pd => 
                pd.id === product.id ? { ...pd, quantity: pd.quantity + 1 } : pd
            );
            newCart = updatedCart;
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDatabaseCart(product.id, product.quantity);
    };

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => (
                        <Product 
                            key={product.id}
                            showToCart={true}
                            handleAddProduct={handleAddProduct}
                            product={product}
                        />
                    ))
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;
