import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { persinaDigit, separate } from "utils";
import routes from "routes/routes";

const OrderSummary = () => {
  const { totalQuantity, totalPrice } = useSelector(
    (state) => state.cart.showCartProducts
  );
  return (
    <div className="w-1/4 px-8 py-10 border-r border-gray-200">
      <h3 className="font-semibold text-xl border-b border-gray-200 pb-8">
        خلاصه فاکتور
      </h3>
      <div className="flex justify-between mb-5 flex-row-reverse pt-9">
        <span className="font-semibold text-sm">تعداد کالا ها</span>
        <span className="font-semibold text-sm">
          {persinaDigit(totalQuantity)}
        </span>
      </div>
      <div className="flex justify-between mb-5 flex-row-reverse">
        <span className="font-semibold text-sm">جمع سبد خرید</span>
        <span className="font-semibold text-sm">
          {persinaDigit(separate(totalPrice))}
        </span>
      </div>
      <div>
        <p className="text-sm text-gray-500">
          هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از
          سبد حذف می‌شوند
        </p>
      </div>
      <div className="border-t mt-8">
        <Link to={routes.FINALIZE_PURCHASE.path}>
          <button className="bg-primary font-semibold hover:bg-transparent hover:text-primary border border-primary transition-all py-3 text-sm text-white w-full mt-8 text-center rounded-md">
            نهایی کردن سبد خرید
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
