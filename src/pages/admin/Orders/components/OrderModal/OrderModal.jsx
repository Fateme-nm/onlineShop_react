import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCheckId } from "store/slices/checkId";
import { jalaliDate } from "utils";
import TrTbody from "../Table/components/Tr.Tbody";
import ThThead from "../Table/components/Th.Thead";
import { updateOrder } from "store/slices/orders";

const OrderModal = () => {
  const dispatch = useDispatch();
  const { check_id } = useSelector((state) => state.checkId);
  const { orders } = useSelector((state) => state.orders);
  const [checkOrder, setCheckOrder] = useState(null);

  const handleClose = () => {
    dispatch(clearCheckId());
  };

  const handleClickDelivery = () => {
      const date = new Date()
      setCheckOrder({...checkOrder, deliveredAt: date})
      dispatch(updateOrder(checkOrder))
  }

  const handleDelivery = () => {
    if (checkOrder && checkOrder.deliveredAt) {
        return <p>{jalaliDate(checkOrder.deliveredAt)} : زمان تحویل</p>
    }
    else if (checkOrder && !checkOrder.deliveredAt) {
        return (
            <button 
                type="submit" 
                className="bg-submit rounded-md py-2 px-4" 
                onClick={handleClickDelivery}
            >
                تحویل شد
            </button>
        )
    }
  }

  const getSelectedOrder = (id) => {
    return orders.find((order) => order.id == id);
  };

  useEffect(() => {
    setCheckOrder(getSelectedOrder(check_id));
  }, [check_id]);

  return (
    <div className="bg-zinc-200 opacity-80 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-6 px-8 border-4 border-primary rounded-xl overflow-hidden">
          <div className="flex text-md justify-between items-center w-full">
            <button onClick={handleClose}>
              <i className="fa fa-close bg-primary rounded px-2 py-1"></i>
            </button>
            <p>نمایش سفارش</p>
          </div>
          <div className="shadow-lg p-4 my-5 rounded-md divide-y divide-neutral-200">
            <div className="flex justify-between flex-row-reverse mb-2 text-sm">
              <p className="font-medium">: نام مشتری</p>
              <p>{checkOrder && checkOrder.customerDetail.firstName +
                    " " + checkOrder.customerDetail.lastName}
              </p>
            </div>
            <div className="flex justify-between flex-row-reverse mb-2 text-sm">
              <p className="font-medium">: آدرس</p>
              <p>{checkOrder && checkOrder.customerDetail.billingAddress}</p>
            </div>
            <div className="flex justify-between flex-row-reverse mb-2 text-sm">
              <p className="font-medium">: تلفن</p>
              <p>{checkOrder && checkOrder.customerDetail.phone}</p>
            </div>
            <div className="flex justify-between flex-row-reverse mb-2 text-sm">
              <p className="font-medium">: زمان تحویل</p>
              <p>{checkOrder && jalaliDate(checkOrder.delivery)}</p>
            </div>
            <div className="flex justify-between flex-row-reverse mb-2 text-sm">
              <p className="font-medium">: زمان سفارش</p>
              <p>{checkOrder && jalaliDate(checkOrder.orderDate)}</p>
            </div>
          </div>
          <div className="overflow-y-scroll w-96 max-h-40 mb-4">
            <table className="w-full">
                <thead>
                    <ThThead>تعداد</ThThead>
                    <ThThead>قیمت</ThThead>
                    <ThThead>کالا</ThThead>
                </thead>
                <tbody>
                    {checkOrder && checkOrder.orderItems.map(item => {
                        return <TrTbody orderItem={item} key={item.id}/>
                    })}
                </tbody>
            </table>
          </div>
          <div>
              {handleDelivery()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
