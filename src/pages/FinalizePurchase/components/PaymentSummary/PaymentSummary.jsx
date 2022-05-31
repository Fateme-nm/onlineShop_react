import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { persinaDigit, separate } from "utils";
import routes from "routes/routes";

const PaymentSummary = () => {
  const { totalQuantity, totalPrice } = useSelector(
    (state) => state.cart.showCartProducts
  );
  return (
    <div className="w-1/4 px-8 py-10 border-r border-gray-200">
      <h3 className="font-semibold text-xl border-b border-gray-200 pb-8">
        خلاصه فاکتور
      </h3>
      <div className="flex justify-between mb-5 flex-row-reverse pt-9">
        <span className="font-semibold text-sm">
          قیمت کالاها ({persinaDigit(totalQuantity)})
        </span>
        <span className="font-semibold text-sm">
          {persinaDigit(separate(totalPrice))}
        </span>
      </div>
      <div className="flex justify-between mb-5 flex-row-reverse">
        <div className="flex justify-end space-x-1">
          <div className="text-primary bg-pink-100 rounded-full text-xs font-medium flex justify-end space-x-1 py-1 px-3 items-center">
            <span>مرسوله</span>
            <span>{persinaDigit(totalQuantity)}</span>
          </div>
          <span className="font-semibold text-sm">هزینه ارسال</span>
        </div>
        <span className="font-semibold text-sm">رایگان</span>
      </div>
      <div>
        <p className="text-sm text-gray-500">
           هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه شده است
        </p>
      </div>
      <div className="border-t mt-8">
        <Link to={routes.PAYMENT.path}>
          <button className="bg-primary font-semibold hover:bg-transparent hover:text-primary border border-primary transition-all py-3 text-sm text-white w-full mt-8 text-center rounded-md" type="submit">
            پرداخت
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSummary;
