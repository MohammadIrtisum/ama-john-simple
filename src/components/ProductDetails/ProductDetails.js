import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productId} = useParams();
    const product = fakeData.find(pd => pd.id === productId);
    console.log(product);
    
    return (
        <div>
            <Product showToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;