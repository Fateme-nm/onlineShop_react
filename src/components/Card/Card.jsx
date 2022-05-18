import React from "react";

const Card = ({imgSrc, name, price, id}) => {
  return (
    <div class="rounded bg-white shadow overflow-hidden">
      <div class="relative">
        <img src={`https://localhost:3002${imgSrc}`} class="w-full" />
        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          
    </div>
  );
};

export default Card;
