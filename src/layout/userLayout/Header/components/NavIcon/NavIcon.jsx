import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getShowCartProducts } from "store/slices/cart";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl, persinaDigit } from "utils";

const NavIcon = ({ icon, number, href, children, cart }) => {
  const { cartProducts, showCartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    cart && number && dispatch(getShowCartProducts());
  }, [cartProducts]);

  return (
    <div className="group relative">
      <Link
        to={href}
        class="text-center text-gray-700 hover:text-primary transition relative"
      >
        {number ? (
          <span class="absolute right-1 top-0 w-4 h-4 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            {number}
          </span>
        ) : null}
        <div class="text-2xl text-center">{icon}</div>
        <div class="text-xs leading-3">{children}</div>
      </Link>
      {cart && number && (
        <div
          className="invisible absolute left-0 top-full w-80 rounded-sm flex flex-col
        opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed overflow-auto bg-white p-5 shadow-md max-h-96"
        >
          {showCartProducts.map((pro) => {
            return (
              <div className="py-5 flex justify-between flex-row-reverse w-full h-fit text-sm">
                <div className="w-1/2 ml-5">
                  <img
                    src={imageUrl(pro.image)}
                    alt="image"
                    className="w-full border-gray-200 border"
                  />
                  <p>
                    <span>تعداد: </span>
                    <span>{persinaDigit(pro.quantity)}</span>
                  </p>
                </div>
                <div className="w-1/2">
                  <p className="mb-2 text-md">{persinaDigit(pro.name)}</p>
                  <p className="flex flex-row-reverse text-xs">
                    <span className="pl-1">{persinaDigit(pro.price)}</span>
                    <span>تومان</span>
                  </p>
                  <div className="flex justify-between">
                    <div className="mt-4 flex justify-start items-center flex-row-reverse">
                      <h3 className="text-gray-800 ml-2">رنگ</h3>
                      <button
                        className={
                          "text-xs border border-gray-200 rounded-sm h-5 w-5 shadow-sm"
                        }
                        style={{ backgroundColor: `${pro.color}` }}
                      ></button>
                    </div>
                    <div className="mt-4 flex justify-start items-center flex-row-reverse">
                      <h3 className="text-gray-800 ml-2">سایز</h3>
                      <span>{persinaDigit(pro.size)}</span>
                    </div>
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
