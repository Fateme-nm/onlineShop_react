import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getShowCartProducts, handleSyncStorage } from "store/slices/cart";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl, persinaDigit } from "utils";

const NavIcon = ({ icon, number, href, children, cart }) => {
  const { cartProducts, showCartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleSyncStorage())
  }, [])

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
          className="invisible absolute left-0 top-full w-72 rounded-sm flex flex-col
        opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed overflow-auto bg-white p-5 shadow-md max-h-96"
        >
          {showCartProducts.map((pro) => {
            return (
              <div className="felx py-5">
                <div>
                  <img
                    src={imageUrl(pro.image)}
                    alt="image"
                    className="w-16"
                  />
                  <p>
                    <span>تعداد: </span>
                    <span>{persinaDigit(pro.quantity)}</span>
                  </p>
                </div>
                <div>
                  <p>{persinaDigit(pro.name)}</p>
                  <p>
                    <span>رنگ: </span>
                    <span>{pro.color}</span>
                  </p>
                  <p>
                    <span>سایز: </span>
                    <span>{persinaDigit(pro.size)}</span>
                  </p>
                  <p>
                    <span>{persinaDigit(pro.price)}</span>
                    <span>تومان</span>
                  </p>
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
