import React from "react";
import { useSelector } from "react-redux";
import { persinaDigit, separate } from "utils";

const OrderSummary = () => {
  const { totalQuantity, totalPrice } = useSelector(
    (state) => state.cart.showCartProducts
  );
  return (
    <div class="w-1/4 px-8 py-10 border-r border-gray-200">
      <div class="flex justify-between mb-5 flex-row-reverse">
        <span class="font-semibold text-sm">تعداد کالا ها</span>
        <span class="font-semibold text-sm">{persinaDigit(totalQuantity)}</span>
      </div>
      <div class="flex justify-between mb-5 flex-row-reverse">
        <span class="font-semibold text-sm">جمع سبد خرید</span>
        <span class="font-semibold text-sm">{persinaDigit(separate(totalPrice))}</span>
      </div>
      <div>
        <p className="text-sm text-gray-500">
          هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از
          سبد حذف می‌شوند
        </p>
      </div>
      <div class="border-t mt-8">
        <button class="bg-primary font-semibold hover:bg-transparent hover:text-primary border border-primary transition-all py-3 text-sm text-white uppercase w-full mt-8 text-center rounded-md">
          نهایی کردن سبد خرید
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
