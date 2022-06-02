import React from "react";
import paymentImg from "assets/images/paymentImg.png";

const Payment = () => {
  return (
    <div className="bg-gray-100">
      <img src={paymentImg} />
      <div className="flex flex-row-reverse justify-center space-x-5 space-x-reverse py-8">
        <button className="bg-submit py-2 px-20 rounded-full text-gray-50">
          پرداخت
        </button>
        <button className="bg-amber-400 py-2 px-10 rounded-full text-gray-50">
          انصراف
        </button>
      </div>
    </div>
  );
};

export default Payment;
