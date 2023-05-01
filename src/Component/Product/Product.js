import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, seller, img, ratings } = props.product
    console.log(props.product)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h6 className='product-title'>{name}</h6>
                <p>Price: ${price} </p>
                <p>Manufacturer: {seller} </p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;