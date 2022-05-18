import React from "react";
import { Link } from "react-router-dom";
import { separate } from "utils";

const Card = ({ imgSrc, name, price, id }) => {
  return (
    <Link
      to={`/product/${name}`}
      state={{ id }}
      className="rounded bg-white shadow overflow-hidden w-80 hover:-translate-y-4 transition-all duration-500"
    >
      <div className="relative">
        <img src={imgSrc} className="w-full" />
      </div>
      <div className="pt-4 pb-3 px-4">
        <h4 className="font-medium text-lg mb-2 text-gray-800 hover:text-primary transition">
          {name}
        </h4>
        <div className="flex items-baseline mb-1 space-x-2 flex-row-reverse text-gray-600">
          <p className="pl-2">
            {separate(price)} 
          </p>
          <span>تومان</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
