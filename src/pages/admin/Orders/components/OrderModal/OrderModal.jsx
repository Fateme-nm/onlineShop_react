import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCheckId } from "store/slices/checkId";
import { jalaliDate } from "utils";
import TrTbody from "../Table/components/Tr.Tbody";
import ThThead from "../Table/components/Th.Thead";
import { updateOrder } from "store/slices/orders";
import ReactDOM from "react-dom";
import { persinaDigit, separate } from "utils";

const OrderModal = () => {
  const dispatch = useDispatch();
  const { check_id } = useSelector((state) => state.checkId);
  const { orders } = useSelector((state) => state.orders);
  const [checkOrder, setCheckOrder] = useState(null);
  let totalPrice = 0;

  const handleClose = () => {
    dispatch(clearCheckId());
  };

  const handleClickDelivery = () => {
    const date = new Date();
    setCheckOrder({ ...checkOrder, deliveredAt: date, orderStatus: 1 });
    dispatch(clearCheckId());
  };

  useEffect(() => {
    if (checkOrder && checkOrder.deliveredAt) {
      dispatch(updateOrder(checkOrder));
    }
  }, [checkOrder]);

  const handleDelivery = () => {
    if (checkOrder && checkOrder.deliveredAt) {
      return (
        <p>{persinaDigit(jalaliDate(checkOrder.deliveredAt))} : زمان تحویل</p>
      );
    } else if (checkOrder && !checkOrder.deliveredAt) {
      return (
        <button
          type="submit"
          className="bg-submit rounded-md py-2 px-4"
          onClick={handleClickDelivery}
        >
          تحویل شد
        </button>
      );
    }
  };

  const getSelectedOrder = (id) => {
    return orders.find((order) => order.id == id);
  };

  useEffect(() => {
    setCheckOrder(getSelectedOrder(check_id));
  }, [check_id]);

  return ReactDOM.createPortal(
    <div className="bg-gray-300/75 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div
          className="flex-col justify-center bg-white py-6 px-8 rounded-xl shadow-2xl w-1/2 overflow-auto"
          style={{ height: "93%" }}
        >
          <div className="flex text-md justify-between items-center w-full pb-4 mb-4 border-b border-b-gray-150">
            <button onClick={handleClose}>
              <i className="fa fa-close rounded px-2 py-1 hover:text-primary"></i>
            </button>
            <p>نمایش سفارش</p>
          </div>
          <div className="shadow-md p-4 my-5 rounded-md bg-gray-50 divide-gray-300 divide-y divide-dashed">
            <div className="flex justify-between flex-row-reverse mb-2 text-sm">
              <p className="font-medium">: نام مشتری</p>
              <p>
                {checkOrder &&
                  checkOrder.customerDetail.firstName +
                    " " +
                    checkOrder.customerDetail.lastName}
              </p>
            </div>
            <div className="flex justify-between flex-row-reverse py-2 text-sm">
              <p className="font-medium">: آدرس</p>
              <p>{checkOrder && checkOrder.customerDetail.billingAddress}</p>
            </div>
            <div className="flex justify-between flex-row-reverse py-2 text-sm">
              <p className="font-medium">: تلفن</p>
              <p>
                {checkOrder && persinaDigit(checkOrder.customerDetail.phone)}
              </p>
            </div>
            <div className="flex justify-between flex-row-reverse py-2 text-sm">
              <p className="font-medium">: زمان تحویل</p>
              <p>
                {checkOrder && persinaDigit(jalaliDate(checkOrder.delivery))}
              </p>
            </div>
            <div className="flex justify-between flex-row-reverse py-2 text-sm">
              <p className="font-medium">: زمان سفارش</p>
              <p>
                {checkOrder && persinaDigit(jalaliDate(checkOrder.orderDate))}
              </p>
            </div>
          </div>
          <div className="w-full py-8">
            <table className="w-full">
              <thead>
                <tr>
                  <ThThead>قیمت کل</ThThead>
                  <ThThead>تعداد</ThThead>
                  <ThThead>(تومان) قیمت</ThThead>
                  <ThThead>کالا</ThThead>
                </tr>
              </thead>
              <tbody>
                {checkOrder &&
                  React.Children.toArray(
                    checkOrder.orderItems.map((item) => {
                      totalPrice = totalPrice + item.price * item.quantity;
                      return <TrTbody orderItem={item} />;
                    })
                  )}
              </tbody>
            </table>
            <div className="bg-primary w-full mt-2 text-gray-50 p-2 text-sm">
              قیمت نهایی: <span>{persinaDigit(separate(totalPrice))}</span> تومان
            </div>
          </div>
          <div>{handleDelivery()}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default OrderModal;
