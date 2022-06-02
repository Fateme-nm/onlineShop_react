import React from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import React, { useEffect } from "react";
import paymentImg from "assets/images/paymentImg.png";
import { useLocation, useNavigate } from "react-router-dom";
import httpService from "services/HttpService";
import { useDispatch, useSelector } from "react-redux";
import { getShowCartProducts, handleSyncStorage } from "store/slices/cart";
import routes from "routes/routes";

const Paymentresult = () => {
  const { showCartProducts, cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(handleSyncStorage());
  }, []);

  useEffect(() => {
    dispatch(getShowCartProducts());
  }, [cartProducts]);

  const handlePayment = () => {
    httpService
      .post("orders", {
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
      })
      .then(() =>
        navigate(routes.PAYMENT_RESULT.path, {
          replace: true,
          state: { successful: true },
        })
      );
  };

  const handleCancle = () => {
    navigate(routes.PAYMENT_RESULT.path, {
      replace: true,
      state: { successful: false },
    });
  };
  return <div>PaymentResult</div>;
};

export default WithLayoutpages(Paymentresult);
