import React from 'react';
import './Product.css';
const Product = (props) => {
    const {img, name, seller, ratings, price, } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='products'>
                <h5 className='product-name'>{name}</h5>
                <p className='product-price'>price: ${price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings} star</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;