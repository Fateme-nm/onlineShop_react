import React, { useState, useEffect } from "react";
import ThThead from "./components/Th.Thead";
import TrTbody from "./components/Tr.Tbody";
import ReactPaginate from "react-paginate";

const Table = ({ products, category }) => {
  // const [showProducts, setShowProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 4;
  const pagesVisited = pageNumber * productsPerPage;

  const handleFiltering = (e) => {
    const categoryId = e.target.value;
    console.log(categoryId);
    if (categoryId !== "all") {
      const newShow = products.filter(
        (product) => product.categoryId == categoryId
      );
      setShowProducts(newShow);
    } else setShowProducts(products);
  };

  const getCategory = (categoryId) => {
    const cat = category.find((cat) => cat.id == categoryId);
    return cat ? cat.name : null;
  };

  // useEffect(() => {
  //   setShowProducts(products);
  // }, [products]);

  return (
    <div className="flex flex-col mt-8 container">
      <div className="py-2 -my-2 flex flex-col justify-center items-center space-y-8">
        <div className="inline-block w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="w-full text-right">
            <thead>
              <tr>
                <ThThead>حذف</ThThead>
                <ThThead>ویرایش</ThThead>
                <ThThead category={category} handleFiltering={handleFiltering}>
                  دسته بندی
                </ThThead>
                <ThThead>نام کالا</ThThead>
                <ThThead>تصویر</ThThead>
              </tr>
            </thead>
            <tbody className="bg-white">
              {showProducts
                .slice(pagesVisited, pagesVisited + productsPerPage)
                .map((product) => {
                  return (
                    <TrTbody
                      imgSrc={`http://localhost:3002/files/${product.thumbnail}`}
                      name={product.name}
                      category={getCategory(product.categoryId)}
                      key={product.id}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
        <ReactPaginate
            previousLabel={<i className="	fa fa-chevron-left text-primary"></i>}
            nextLabel={<i className="	fa fa-chevron-right text-primary"></i>}
            pageCount={Math.ceil(showProducts.length / productsPerPage)}
            onPageChange={({ selected }) => setPageNumber(selected)}
            containerClassName={"flex space-x-5"}
            activeClassName={"text-primary"}
          />
      </div>
    </div>
  );
};

export default Table;
