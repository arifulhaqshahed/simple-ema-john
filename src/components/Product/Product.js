import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product);
    const { img, name, seller, price, stock, star } = props.product;
    const cartIcon = <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faShoppingCart} />;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4>{name}</h4>
                <p>By: {seller}</p><br />
                <p>${price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <Rating initialRating={star} emptySymbol="far fa-star icon"
                    fullSymbol="fas fa-star icon" readonly></Rating><br />
                <button onClick={() => props.handleAddToCart(props.product)}>{cartIcon}add to cart</button>
            </div>
        </div>
    );
};

export default Product;