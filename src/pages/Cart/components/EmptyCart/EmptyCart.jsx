import React from "react";
import emptyCart from "assets/images/empty-cart.svg";

const EmptyCart = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10 flex-row-reverse">
        <div className="w-full bg-white px-10 pt-14 pb-20 flex flex-col items-center justify-center">
          <img src={emptyCart} />
          <h2 className="font-semibold text-lg mt-2 text-gray-700">! سبد خرید شما خالی است</h2>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
