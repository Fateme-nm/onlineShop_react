import React, { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import WithLayoutpages from "hoc/WithLayoutPages";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const response = await axios
      .get("http://localhost:3002/orders")
      .then((res) => res.data)
      .catch((err) => console.log(err));
    setOrders(response);
  };
  
  useEffect(() => {
    getOrders()
  }, []);
  
  return (
    
  );
};

export default WithLayoutpages(Orders, "admin");
