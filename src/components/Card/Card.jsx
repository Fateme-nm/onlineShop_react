import React from "react";
import { Link } from "react-router-dom";

const Card = ({ imgSrc, name, price, id }) => {
  return (
    <div class="rounded bg-white shadow overflow-hidden">
      <div class="relative">
        <img src={`https://localhost:3002${imgSrc}`} class="w-full" />
      </div>
      <div class="pt-4 pb-3 px-4">
        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
          {name}
        </h4>
        <div class="flex items-baseline mb-1 space-x-2">
          <p class="text-xl text-primary font-roboto font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
