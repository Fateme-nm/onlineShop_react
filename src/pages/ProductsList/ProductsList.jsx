import React, { useEffect, useState } from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import Sidebar from "./components/Sidebar";
import Filter from "./components/Filter/Filter";
import Card from "components/Card/Card";
import httpService from "services/HttpService";
import ReactPaginate from "react-paginate";

const Productslist = () => {
  const [products, setProducts] = useState([])
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;

  const handleRequestProducts = () => {
      await httpService
        .get('products')
        .then(res => setProducts(res.data.reverse()))
  };

  useEffect(() => {
    handleRequestProducts();
  }, []);
  return (
    <div className="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
        {/* <Card /> */}
        <ReactPaginate
            previousLabel={<i className="	fa fa-chevron-left text-primary"></i>}
            nextLabel={<i className="	fa fa-chevron-right text-primary"></i>}
            pageCount={Math.ceil(showProducts.length / productsPerPage)}
            onPageChange={({ selected }) => setPageNumber(selected)}
            containerClassName={"flex space-x-5"}
            activeClassName={"text-primary"}
          />
      </div>
      <Filter />
      <Sidebar />
    </div>
  );
};

export default WithLayoutpages(Productslist);
