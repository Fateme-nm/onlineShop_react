import React from "react";
import { imageUrl, persinaDigit, separate } from "utils";
import { handleRemoveFromCart, handleUpdateQuantity } from "store/slices/cart";
import { useDispatch } from "react-redux";
import Count from "components/Count/Count";

const CartItem = ({ pro }) => {
  const dispatch = useDispatch();

  const handleChangeQuntity = (num) => {
    dispatch(handleUpdateQuantity({num, proId: pro.productId}))
  }

  return (
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-8 flex-row-reverse">
      <div class="flex w-2/5 flex-row-reverse space-x-10 space-x-reverse">
        <div class="border border-gray-200 w-28">
          <img class="h-28 w-28" src={imageUrl(pro.image)} alt="img" />
        </div>
        <div class="flex flex-col justify-center ml-4 w-44">
          <span class="font-medium text-sm">{persinaDigit(pro.name)}</span>
          <div className="flex justify-end">
            <i
              className="fa fa-trash text-primary cursor-pointer mt-4 mr-5 text-lg"
              onClick={() => dispatch(handleRemoveFromCart(pro.productId))}
            ></i>
            <div className="mt-4 flex justify-start items-center flex-row-reverse mr-5 text-sm">
              <h3 className="text-gray-800 ml-1">رنگ</h3>
              <button
                className={
                  "border border-gray-200 rounded-sm h-5 w-5 shadow-sm"
                }
                style={{ backgroundColor: `${pro.color}` }}
              ></button>
            </div>
            <div className="mt-4 flex justify-start items-center flex-row-reverse text-sm">
              <h3 className="text-gray-800 ml-1">سایز</h3>
              <span>{persinaDigit(pro.size)}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-1/5">
        <Count
          quantity={pro.quantity}
          maxQuantity={pro.count}
          setQuantity={(num) => handleChangeQuntity(num)}
        />
      </div>
      <span class="text-center w-1/5 font-medium text-sm">
        {persinaDigit(separate(pro.price))}
      </span>
      <span class="text-center w-1/5 font-medium text-sm">
        {persinaDigit(separate(pro.price * pro.quantity))}
      </span>
    </div>
  );
};

export default CartItem;
