import React from "react";
import { Link } from "react-router-dom";
import { imageUrl, persinaDigit } from "utils";
import { handleRemoveFromCart, handleUpdateQuantity } from "store/slices/cart";
import { useDispatch } from "react-redux";
import Count from "components/Count/Count";

const NavIcon = ({ icon, number, href, children, cart }) => {
  const dispatch = useDispatch();

  const handleChangeQuntity = (num, pro) => {
    dispatch(handleUpdateQuantity({ num, proId: pro.productId }));
  };

  return (
    <div className="group relative">
      <Link
        to={href}
        class="text-center text-gray-700 hover:text-primary transition relative"
      >
        {number && number > 0 ? (
          <span class="absolute right-1 top-0 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            {persinaDigit(number)}
          </span>
        ) : null}
        <div class="text-2xl text-center">{icon}</div>
        <div class="text-xs leading-3">{children}</div>
      </Link>
      {cart && number > 0 && (
        <div
          className="invisible opacity-0 absolute left-0 top-full w-80 rounded-sm flex flex-col
         group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed overflow-auto bg-white p-5 shadow-md max-h-96"
        >
          {cart.map((pro) => {
            return (
              <div className="py-5 flex justify-between flex-row-reverse w-full h-fit text-sm">
                <div className="w-28 ml-5 flex flex-col items-center">
                  <img
                    src={imageUrl(pro.image)}
                    alt="image"
                    className="w-28 border-gray-200 border mb-3"
                  />
                  <Count
                    quantity={pro.quantity}
                    maxQuantity={pro.count}
                    setQuantity={(num) => handleChangeQuntity(num, pro)}
                  />
                </div>
                <div className="w-1/2">
                  <p className="mb-2 text-md font-medium">
                    {persinaDigit(pro.name)}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center flex-row-reverse text-xs">
                      <h3 className="text-gray-800 ml-2">رنگ</h3>
                      <button
                        className={
                          "text-xs border border-gray-200 rounded-sm h-5 w-5 shadow-sm"
                        }
                        style={{ backgroundColor: `${pro.color}` }}
                      ></button>
                    </div>
                    <div className="flex justify-start items-center flex-row-reverse text-xs">
                      <h3 className="text-gray-800 ml-2">سایز</h3>
                      <span>{persinaDigit(pro.size)}</span>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse justify-between items-center">
                    <p className="flex flex-row-reverse text-sm mt-4">
                      <span className="pl-1">{persinaDigit(pro.price)}</span>
                      <span>تومان</span>
                    </p>
                    <i
                      className="fa fa-trash text-primary cursor-pointer mt-4 mr-5 text-lg"
                      onClick={() =>
                        dispatch(handleRemoveFromCart(pro.productId))
                      }
                    ></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NavIcon;
