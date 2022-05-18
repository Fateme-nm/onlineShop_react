import React from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import Banner from "./components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default WithLayoutpages(Home);
