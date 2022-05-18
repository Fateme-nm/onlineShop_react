import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imgSrc, name, price, id }) => {
  return (
    <Link
      to={`/product/${name}`}
      state={{ id }}
      className="rounded bg-white shadow overflow-hidden w-80"
    >
      <div className="relative">
        <img src={imgSrc} className="w-full" />
      </div>
      <div className="pt-4 pb-3 px-4">
        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
          {name}
        </h4>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-roboto font-semibold">
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
