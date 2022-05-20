import React from "react";
import { Link } from "react-router-dom";
import { separate, persinaDigit } from "utils";
import routes from "routes/routes";

const Card = ({ imgSrc, name, price, id }) => {
  return (
    <Link
      to={`/product/${name}`}
      state={{ id }}
      className="rounded bg-white shadow-md overflow-hidden w-80 hover:-translate-y-4 transition-all duration-500 relative"
    >
      <div className="relative border-b border-b-gray-200">
        <img src={imgSrc} className="w-full" />
      </div>
      <div className="pt-4 pb-3 px-4">
        <h4 className="font-medium text-lg mb-2 text-gray-800 hover:text-primary transition">
          {name}
        </h4>
        <div className="flex items-baseline mb-1 space-x-2 flex-row-reverse text-gray-600">
          <p className="pl-2 pb-10">{persinaDigit(separate(price))}</p>
          <span>تومان</span>
        </div>
      </div>
      <Link
        to={routes.CART.path}
        className="absolute bottom-0 block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        <i className="fas fa-shopping-bag pr-2"></i>
        افزودن به سبد خرید
      </Link>
    </Link>
  );
};

export default Card;
