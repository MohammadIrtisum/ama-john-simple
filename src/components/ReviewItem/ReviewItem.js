import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price,id} = props.product || {};
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle} className="product-review">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>${props.product.price}</small></p>
            <br />
            <button 
                className="main-button"
                onClick={()=>props.removeProduct(id)}
            >Remove</button>
            
        </div>
    );
};

export default ReviewItem;