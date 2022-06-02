import React from 'react';
import paymentImg from 'assets/images/paymentImg.png'

const Payment = () => {
    return (
        <div className='bg-gray-100'>
            <img src={paymentImg} />
            <div className='flex flex-row-reverse justify-center space-x-5 space-x-reverse py-8'>
                <button>پرداخت</button>
                <button>انصراف</button>
            </div>
        </div>
    );
}

export default Payment;
