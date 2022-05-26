import React, { useEffect, useState } from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import Sidebar from "./components/Sidebar";
import Filter from "./components/Filter/Filter";
import Card from "components/Card/Card";
import httpService from "services/HttpService";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import { imageUrl } from "utils";

const Productslist = () => {
  const location = useLocation();
  const { id } = location.state;
  //   const [activeCategory, setActiveCategory] = useState(id);
  const [products, setProducts] = useState([]);
  const [categoris, setCategories] = useState();
  const [sizes, setSizes] = useState();
  const [colors, setColors] = useState();
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;

  //   const handleAcitveCategory = (catId) => {
  //     setActiveCategory(catId)
  //   }

  const handleRequestProducts = async () => {
    const catId = id ? `categoryId=${id}&`: ""
    await httpService
      .get(`products?${catId}&_sort=id&_order=desc`)
      .then((res) => setProducts(res.data));
  };

  const handleRequestCategoris = async () => {
    await httpService.get("category").then((res) => setCategories(res.data));
  };

  const handleRequestSize = async () => {
    await httpService.get("size").then((res) => setSizes(res.data));
  };

  const handleRequestColor = async () => {
    await httpService.get("color").then((res) => setColors(res.data));
  };

  useEffect(() => {
    handleRequestProducts();
    handleRequestCategoris();
    handleRequestSize();
    handleRequestColor();
  }, [id]);

  //   useEffect(() => {
  //     handleRequestProducts();
  //   }, [activeCategory]);

  return (
    <div className="container flex flex-row-reverse justify-between items-start mt-8">
      <Sidebar
        activeCategory={id}
        categoris={categoris}
        colors={colors}
        sizes={sizes}
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
                  imgSrc={imageUrl(pro.image)}
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
