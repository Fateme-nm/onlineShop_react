import React, { useEffect } from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import { useParams } from "react-router-dom";
import httpService from "services/HttpService";
import { useDispatch, useSelector } from "react-redux";
import { getShowCartProducts, handleSyncStorage } from "store/slices/cart";

const Paymentresult = () => {
  const { status } = useParams();
  const { showCartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let flag = 0

  useEffect(() => {
    dispatch(handleSyncStorage());
    dispatch(getShowCartProducts());
    flag === 0 && status === "success" && handlePayment();
    return () => {
      localStorage.removeItem("order");
    };
  }, []);

  const handlePayment = async () => {
    if (showCartProducts.products.length > 0) {
      const { lastName, firstName, phone, billingAddress, date } = JSON.parse(
        localStorage.getItem("order")
      );
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
      flag ++
    }
  };

  return (
    <div className="container">
      {status === "success" ? (
        <p>
          با تشکر از پرداخت شما، سفارش شما ثبت شده و جهت هماهنگی ارسال با شما
          تماس گرفته خواهد شد
        </p>
      ) : (
        <p>پرداخت موفقیت آمیز نبود، سفارش شما در انتظار پرداخت است</p>
      )}
    </div>
  );
};

export default WithLayoutpages(Paymentresult);
