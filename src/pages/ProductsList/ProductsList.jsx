import React, { useEffect, useState } from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import Sidebar from "./components/Sidebar";
import Filter from "./components/Filter/Filter";
import Card from "components/Card/Card";
import httpService from "services/HttpService";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";

const Productslist = () => {
  const location = useLocation();
  const {id} = location.state
//   const [activeCategory, setActiveCategory] = useState(id);
  const [products, setProducts] = useState([]);
  const [categoris, setCategories] = useState();
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;

//   const handleAcitveCategory = (catId) => {
//     setActiveCategory(catId)
//   }

  const handleRequestProducts = async () => {
    await httpService
      .get(`products?categoryId=${id}&_sort=id&_order=desc`)
      .then((res) => setProducts(res.data));
  };

  const handleRequestCategoris = async () => {
    await httpService.get("category").then((res) => setCategories(res.data));
  };

  useEffect(() => {
    handleRequestProducts();
    handleRequestCategoris();
  }, []);

//   useEffect(() => {
//     handleRequestProducts();
//   }, [activeCategory]);

  return (
    <div className="container flex flex-row-reverse justify-between items-start mt-8">
        {console.log(products, categoris)}
      <Sidebar
        activeCategory={id}
        categoris={categoris}
        // handleAcitveCategory={(catId) => handleAcitveCategory(catId)}
      />
      <div className="w-full flex flex-col lg:mr-10 xl:mr-20">
        <Filter />
        <div className="flex justify-center md:justify-between flex-wrap">
          {products
            .slice(pagesVisited, pagesVisited + productsPerPage)
            .map((pro) => {
              return (
                <Card
                  imgSrc={`http://localhost:3002${pro.image}`}
                  name={pro.name}
                  price={pro.price}
                  id={pro.id}
                  key={pro.id}
                />
              );
            })}
        </div>
        <div className="w-full flex justify-center my-8">
          <ReactPaginate
            previousLabel={<i className="	fa fa-chevron-left text-primary"></i>}
            nextLabel={<i className="	fa fa-chevron-right text-primary"></i>}
            pageCount={Math.ceil(products.length / productsPerPage)}
            onPageChange={({ selected }) => setPageNumber(selected)}
            containerClassName={"flex space-x-5"}
            activeClassName={"text-primary"}
          />
        </div>
      </div>
    </div>
  );
};

export default WithLayoutpages(Productslist);
