import React from 'react';

function ProductItem (props) {
    return (
        <div className='card'>
            <h2>{props.product.name}</h2>
            <h3 className='price'>{props.product.price.toLocaleString("en-US", {style: "currency", currency: 'NGN'})}</h3>
            <p>{props.product.description}</p>
        </div>
    )
}

export default ProductItem;