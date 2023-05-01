import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products , setProduct] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h5 className='cart-title'>Order Summary</h5>
                <p>Selected Items:</p>
                <p>Total Price:</p>
                <p>Total Shopping Charge:</p>
                <p>Tax:</p>
                <h6>Grand Total:</h6>
            </div>
        </div>
    );
};

export default Shop;