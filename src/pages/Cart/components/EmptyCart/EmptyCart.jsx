import React from 'react';
import emptyCart from 'assets/images/empty-cart.svg'

const EmptyCart = () => {
    return (
        <div>
            <img src={emptyCart} alt="" />
            <h3>سبد خرید شما خالی است !</h3>
        </div>
    );
}

export default EmptyCart;
