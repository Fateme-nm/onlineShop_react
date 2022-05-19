import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import WithLayoutpages from "hoc/WithLayoutPages";
import userService from "services/user.service";
import Gallery from "./components/Gallery/Gallery";
import Features from "./components/Features/Features";
import { Link } from "react-router-dom";
import routes from "routes/routes";

const Productdetails = () => {
  // const { name } = useParams();
  const location = useLocation();
  const { id } = location.state;
  const [product, setProduct] = useState();

  const handleRequest = async () => {
    try {
      const res = await userService.getProducts(`?id=${id}`);
      setProduct(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleRequest();
  }, []);

  if (product) {
    return (
      <div>
        <div class="container pb-6 flex flex-row-reverse justify-between space-x-32 space-x-reverse items-center">
          <Gallery mainImg={product.image} images={product.images} />
          <div className="w-full">
            <Features product={product} />
            <div className="flex gap-3 pb-5 mt-6">
              <Link
                to={routes.CART.path}
                className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded 
                      hover:bg-transparent hover:text-primary transition text-sm flex items-center"
              >
                <span className="mr-2">
                  <i className="fas fa-shopping-bag"></i>
                </span>{" "}
                افزودن به سبد خرید
              </Link>
              <Link
                to={routes.CART.path}
                className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded 
                      hover:bg-transparent hover:text-primary transition text-sm"
              >
                <span className="mr-2">
                  <i className="far fa-heart"></i>
                </span>{" "}
                ذخیره محصول
              </Link>
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
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6"></div>
        </div>
      </div>
    );
  }
};

export default WithLayoutpages(Productdetails);
