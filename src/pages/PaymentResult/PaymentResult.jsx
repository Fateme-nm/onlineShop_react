import React, { useEffect } from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import { useSearchParams } from "react-router-dom";
import httpService from "services/HttpService";
import { useDispatch, useSelector } from "react-redux";
import { getShowCartProducts, handleSyncStorage } from "store/slices/cart";

const Paymentresult = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { showCartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleSyncStorage());
    dispatch(getShowCartProducts());
    return () => {
      localStorage.removeItem("order");
    };
  }, []);

  useEffect(() => {
    searchParams.get("status") === "success" && handlePayment();
  }, [showCartProducts]);

  const handlePayment = async () => {
    if (showCartProducts.products.length > 0) {
      const { lastName, firstName, phone, billingAddress, date } = JSON.parse(
        localStorage.getItem("order")
      );
      localStorage.removeItem("order");
      localStorage.removeItem("cart");
      dispatch(handleSyncStorage())

      await httpService.post("orders", {
        customerDetail: { lastName, firstName, phone, billingAddress },
        purchaseTotal: showCartProducts.totalPrice,
        orderStatus: 3,
        orderDate: new Date().getTime(),
        delivery: date,
        deliveredAt: null,
        orderItems: showCartProducts.products.map((pro) => {
          const { name, image, price, quantity } = pro;
          return { name, thumbnail: image, price, quantity };
        }),
      });
    }
  };

  return (
    <div className="container py-24 px-20 my-10 shadow-lg">
      <h2 className="text-2xl font-medium mb-10">نتیجه پرداخت</h2>
      {searchParams.get("status") === "success" ? (
        <div className="flex justify-start items-center flex-row-reverse">
          <i className="fa fa-check text-3xl text-submit ml-5"></i>
          <p>
            با تشکر از پرداخت شما، سفارش شما ثبت شده و جهت هماهنگی ارسال با شما
            تماس گرفته خواهد شد
          </p>
        </div>
      ) : (
        <div className="flex justify-start items-center flex-row-reverse">
          <i className="fa fa-close text-3xl text-red-600 ml-5"></i>
          <p>پرداخت موفقیت آمیز نبود، سفارش شما در انتظار پرداخت است</p>
        </div>
      )}
    </div>
  );
};

export default WithLayoutpages(Paymentresult);
