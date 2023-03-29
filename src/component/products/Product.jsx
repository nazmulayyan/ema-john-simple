import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { img, name, seller, ratings, price, } = props.product;
    //cart handler
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='products'>
                <h5 className='product-name'>{name}</h5>
                <p className='product-price'>price: ${price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} star</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;