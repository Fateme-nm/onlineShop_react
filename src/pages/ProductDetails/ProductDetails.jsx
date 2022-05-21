import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import WithLayoutpages from "hoc/WithLayoutPages";
import Gallery from "./components/Gallery/Gallery";
import Features from "./components/Features/Features";
import httpService from "services/HttpService";
import Card from "components/Card/Card";
import { persinaDigit, separate } from "utils";

const Productdetails = () => {
  // const { name } = useParams();
  const location = useLocation();
  const { id } = location.state;
  const [product, setProduct] = useState();
  const [products, setProducts] = useState([]);

  const handleRequestSimilarProducts = () => {
    httpService
      .get(`products?categoryId=${product.categoryId}&&_limit=3`)
      .then((res) => setProducts(res.data));
  };

  const handleRequestProduct = () => {
    httpService.get(`products?id=${id}`).then((res) => setProduct(res.data[0]));
  };

  useEffect(() => {
    handleRequestProduct();
  }, []);

  useEffect(() => {
    product && handleRequestSimilarProducts();
  }, [product]);

  if (product) {
    return (
      <div>
        <div className="container pb-6 flex flex-row-reverse justify-end space-x-32 space-x-reverse items-center">
          <Gallery mainImg={product.image} images={product.images} />
          <div className="w-full">
            <Features product={product} />
            <div className="flex gap-3 pb-5 mt-6">
              {product.count >= 1 ? (
                <button className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded hover:bg-transparent hover:text-primary transition text-sm flex items-center">
                  <span className="mr-2">
                    <i className="fas fa-shopping-bag"></i>
                  </span>{" "}
                  افزودن به سبد خرید
                </button>
              ) : (
                <button className="bg-gray-400 border border-gray-400 text-white px-8 py-2 font-medium rounded transition text-sm flex items-center">
                  <span className="mr-2">
                    <i className="fas fa-shopping-bag"></i>
                  </span>{" "}
                  اتمام موجودی
                </button>
              )}
              <button
                className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded 
                      hover:bg-transparent hover:text-primary transition text-sm"
              >
                <span className="mr-2">
                  <i className="far fa-heart"></i>
                </span>{" "}
                ذخیره محصول
              </button>
            </div>
          </div>
        </div>

        <div className="container pb-16">
          <h3 className="border-b border-gray-200 text-gray-800 pb-3 font-medium">
            توضیحات محصول
          </h3>
          <div className="space-y-3 text-gray-600 pt-3">
            <p>{product.description}</p>
          </div>
        </div>

        <div className="container pb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
            محصولات مشابه
          </h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {React.Children.toArray(
              products.map((pro) => {
                return (
                  <Card
                    imgSrc={`http://localhost:3002${pro.image}`}
                    name={pro.name}
                    price={persinaDigit(separate(pro.price))}
                    id={pro.id}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default WithLayoutpages(Productdetails);
