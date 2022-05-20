import React from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import Sidebar from "./components/Sidebar";
import Filter from "./components/Filter/Filter";
import Card from "components/Card/Card";

const Productslist = () => {
  return (
    <div className="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
      <Sidebar />
      <Filter />
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
        <Card />
      </div>
    </div>
  );
};

export default WithLayoutpages(Productslist);
