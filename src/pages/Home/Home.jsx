import React, { useEffect } from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import Banner from "./components/Banner/Banner";
import CardsGroup from "./components/CardsGroup/CardsGroup";
import { useSelector } from "react-redux";

const Home = () => {
  const { categories } = useSelector((state) => state.products);

  return (
    <div>
      <Banner />
      <div className="divide-dashed divide-y-2">
        {categories.map((cat) => {
          return <CardsGroup title={cat.name} id={cat.id} key={cat.id} />;
        })}
      </div>
    </div>
  );
};

export default WithLayoutpages(Home);
