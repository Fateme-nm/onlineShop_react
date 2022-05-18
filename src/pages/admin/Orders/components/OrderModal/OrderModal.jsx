import React from "react";
import { useDispatch } from "react-redux";
import { clearCheckId } from "store/slices/checkId";

const OrderModal = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearCheckId());
  };

  const getSelectedOrder = (id) => {
    return orders.find((order) => order.id == id);
  };

  return (
    <div className="bg-zinc-200 opacity-80 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-6 px-8 border-4 border-primary rounded-xl">
          <div className="flex text-md justify-between items-center w-full">
            <button onClick={handleClose}>
              <i className="fa fa-close bg-primary rounded px-2 py-1"></i>
            </button>
            <p>افزودن/ویرایش کالا</p>
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-submit rounded-md py-2 px-4">
              ذخیره
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
