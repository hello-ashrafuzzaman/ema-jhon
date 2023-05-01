import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products , setProduct] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const [cart , setCart] = useState([])
    const handleToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleToCart={handleToCart}
                    ></Product>)
                }
            </div>
            {/* Cart-Container Codding */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;