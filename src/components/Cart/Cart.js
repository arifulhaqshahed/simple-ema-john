import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { cart } = props;
    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    // using reduce method to count total

    /* const total = cart.reduce((previous, product) => previous + product.price * product.quantity, 0); */

    /* const totalQuantity = cart.reduce((previous, product) => previous + product.quantity, 0); */


    const shipping = total > 0 ? 15 : 0;
    const totalBeforeTax = total + shipping;
    const tax = total * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Order summary</h3>
            <h4 style={{ textAlign: 'center' }}>Items ordered: {totalQuantity}</h4>
            <div className='cart-details'>
                <div className='cartDetails-heading'>
                    <p>Items :</p>
                    <p>Shipping & Handling :</p>
                    <p>Total before tax :</p>
                    <p>Estimated tax :</p>
                    <h3>Order total :</h3>
                </div>
                <div>
                    <p>$ <span>{total.toFixed(2)}</span></p>
                    <p>$ <span>{shipping.toFixed(2)}</span></p>
                    <p>$ <span>{totalBeforeTax.toFixed(2)}</span></p>
                    <p>$ <span>{tax.toFixed(2)}</span></p>
                    <p>$ <span>{grandTotal.toFixed(2)}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Cart;