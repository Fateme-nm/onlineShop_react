import React from "react";

const CardsGroup = ({title}) => {
  return (
    <div className="container pb-16">
      <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        {title}
      </h2>
    </div>
  );
};

export default CardsGroup;
