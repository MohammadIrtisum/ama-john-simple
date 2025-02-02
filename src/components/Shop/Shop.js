import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { flushSync } from 'react-dom';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProduct] =useState(first10);
    const [cart,setCart] = useState([]);
    
    const handleAddProduct = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className='product-container'>
             {/* <h3>{products.length}</h3>  */}
                {
                products.map(
                    product=><Product
                    showToCart={true}
                    handleAddProduct={handleAddProduct} 
                    product={product}></Product>
                )
                }
        </div>
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Shop;