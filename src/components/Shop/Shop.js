import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { flushSync } from 'react-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/dataBaseManager';
import { use } from 'react';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProduct] =useState(first10);
    const [cart,setCart] = useState([]);

    useEffect(()=>{     
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey=>{
            const product = fakeData.find(pd=>pd.id === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    },[])


    
    const handleAddProduct = (product)=>{
        // const newCart = [...cart,product];
        // setCart(newCart);
        // const sameProduct = newCart.filter(pd=>pd.id === product.id);
        // const count = sameProduct.length
        const someproduct = cart.find(pd=>pd.id === product.id);
        let count =1;
        let newCart;
        if(someproduct)
        {
            count = someproduct.quantity+1;
            someproduct.quantity = count;
            const others = cart.filter(pd=>pd.id !== product.id);
            newCart = [...others,someproduct];
        }
        else{
            product.quantity =1;
            newCart = [...cart,product];
        }
        
        setCart(newCart);

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