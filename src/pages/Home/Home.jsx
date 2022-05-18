import React from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import Banner from "./components/Banner/Banner";
import CardsGroup from "./components/CardsGroup/CardsGroup";

const Home = () => {
  return (
    <div>
      <Banner />
      <CardsGroup />
    </div>
  );
};

export default WithLayoutpages(Home);
