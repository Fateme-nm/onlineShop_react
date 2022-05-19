import React from "react";
import { useParams } from "react-router-dom";
import WithLayoutpages from "hoc/WithLayoutPages";

const Productdetails = () => {
  const { name } = useParams();
  return <div></div>;
};

export default WithLayoutpages(Productdetails);
