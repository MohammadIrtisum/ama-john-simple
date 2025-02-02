import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { flushSync } from 'react-dom';
import { addToDatabaseCart } from '../../utilities/dataBaseManager';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProduct] =useState(first10);
    const [cart,setCart] = useState([]);
    
    const handleAddProduct = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd=>pd.id === product.id);
        const count = sameProduct.length
        addToDatabaseCart(product.id,count);
    }

    return (
        <div className="shop-container">
            <div className='product-container'>
             {/* <h3>{products.length}</h3>  */}
                {
                products.map(
                    product=><Product
                    key={product.id}
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