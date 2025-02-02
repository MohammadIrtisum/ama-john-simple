import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props);
  const { img, name, seller, price, stock,id } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-name">
        <h4><Link to={'/product/'+id}>{name}</Link></h4>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock - order soon</small>
        </p>
         { props.showToCart && <button className="main-button" onClick={()=>{
            props.handleAddProduct(props.product)
          }}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
     
    
        
      </div>
    </div>
  );
};

export default Product;
