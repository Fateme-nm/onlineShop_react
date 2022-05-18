import React from "react";
import Card from "components/Card/Card";

const CardsGroup = ({title}) => {
  return (
    <div className="container py-16">
      <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        {title}
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
        <Card name="کفش ورزشی" price={25000} id={2}/>
        <Card name="کفش ورزشی" price={25000} id={2}/>
        <Card name="کفش ورزشی" price={25000} id={2}/>
        <Card name="کفش ورزشی" price={25000} id={2}/>
        <Card name="کفش ورزشی" price={25000} id={2}/>
        <Card name="کفش ورزشی" price={25000} id={2}/>
      </div>
    </div>
  );
};

export default CardsGroup;
