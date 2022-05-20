import React from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import Sidebar from "./components/Sidebar";

const Productslist = () => {
  return (
    <div className="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
      <Sidebar />
    </div>
  );
};

export default WithLayoutpages(Productslist);
