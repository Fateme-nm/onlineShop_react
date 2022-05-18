import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCheckId } from "store/slices/checkId";

const OrderModal = () => {
  const dispatch = useDispatch();
  const { check_id } = useSelector((state) => state.checkId);
  const { orders } = useSelector((state) => state.orders);
  const [checkOrder, setCheckOrder] = useState(null);

  const handleClose = () => {
    dispatch(clearCheckId());
  };

  const getSelectedOrder = (id) => {
    return orders.find((order) => order.id == id);
  };

  useEffect(() => {
    setCheckOrder(getSelectedOrder(check_id));
  }, [check_id]);

  return (
    <div className="bg-zinc-200 opacity-80 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-6 px-8 border-4 border-primary rounded-xl">
          <div className="flex text-md justify-between items-center w-full">
            <button onClick={handleClose}>
              <i className="fa fa-close bg-primary rounded px-2 py-1"></i>
            </button>
            <p>نمایش سفارش</p>
          </div>
          <div className="flex justify-around flex-row-reverse">
            <p>: نام مشتری</p>
            <p>
              {checkOrder &&
                checkOrder.customerDetail.firstName +
                  " " +
                  checkOrder.customerDetail.lastName}
            </p>
          </div>
          <button type="submit" className="bg-submit rounded-md py-2 px-4">
            ذخیره
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
