import React, { useEffect } from "react";
import paymentImg from "assets/images/paymentImg.png";
import { useLocation, useNavigate } from "react-router-dom";
import httpService from "services/HttpService";
import { useDispatch, useSelector } from "react-redux";
import { getShowCartProducts, handleSyncStorage } from "store/slices/cart";
import routes from "routes/routes";

const Payment = () => {
  const { showCartProducts, cartProducts } = useSelector((state) => state.cart);
  const {
    lastname: lastName,
    firstname: firstName,
    address: billingAddress,
    date,
    phone,
  } = useLocation().state;
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
  
  //   if (showCartProducts) {
  //     return (
  //       <div className="bg-gray-100">
  //         <img src={paymentImg} />
  //         <div className="flex flex-row-reverse justify-center space-x-5 space-x-reverse py-8">
  //           <button
  //             className="bg-submit py-2 px-20 rounded-full text-gray-50"
  //             onClick={handlePayment}
  //           >
  //             پرداخت
  //           </button>
  //           <button
  //             className="bg-amber-400 py-2 px-10 rounded-full text-gray-50"
  //             onClick={handleCancle}
  //           >
  //             انصراف
  //           </button>
  //         </div>
  //       </div>
  //     );
  //   }
};

export default Payment;
