import React, { useEffect, useState } from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import CartItem from "./components/CartItem/CartItem";
import { getShowCartProducts, checkingCount } from "store/slices/cart";
import { useDispatch, useSelector } from "react-redux";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import RemoveModal from "./components/RemoveModal/RemoveModal";

const Cart = () => {
  const [openModal, setOpenModal] = useState(false);
  const { cartProducts, showCartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkingCount())
  }, [])

  useEffect(() => {
    dispatch(getShowCartProducts());
  }, [cartProducts]);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10 flex-row-reverse">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8 flex-row-reverse">
            <h2 className="font-semibold text-xl">سبد خرید شما</h2>
            <div
              className="flex items-center flex-row-reverse space-x-2 space-x-reverse cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              <h3>حذف همه</h3>
              <i className="fa fa-trash text-primary"></i>
            </div>
          </div>
          <div className="flex mt-10 mb-5 flex-row-reverse">
            <h3 className="font-semibold text-gray-600 text-xs w-2/5">
              جزئیات محصول
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs w-1/5">
              تعداد
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs w-1/5 ">
              قیمت
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs w-1/5 ">
              قیمت کل
            </h3>
          </div>
          <ul className="divide-y divide-dashed divide-gray-300">
            {showCartProducts.products.map((pro) => (
              <li>
                <CartItem pro={pro} />
              </li>
            ))}
          </ul>
        </div>
        <OrderSummary />
      </div>
      {openModal && <RemoveModal setOpenModal={setOpenModal} />}
    </div>
  );
};

export default WithLayoutpages(Cart);
