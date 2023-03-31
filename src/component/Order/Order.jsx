import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../products/Product';
import './Order.css'
const product = () => {
    const [products, setProducts] = useState([]);
    //cart handler
    const [cart, setCart] = useState([]);


    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart)
    },[]);

    //add to cart handler
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='order-container'>
            <div className="shop-container">
                {
                    products.map(product => <Product
                    key= {product.id}
                    product= {product}
                    handleAddToCart= {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default product;