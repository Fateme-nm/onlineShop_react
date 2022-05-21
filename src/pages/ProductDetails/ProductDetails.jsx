import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import WithLayoutpages from "hoc/WithLayoutPages";
import Gallery from "./components/Gallery/Gallery";
import Features from "./components/Features/Features";
import httpService from "services/HttpService";
import Card from "components/Card/Card";
import { persinaDigit, separate } from "utils";
import Button from "./components/Button/Button";
import { useSelector } from "react-redux";
import routes from "routes/routes";

const Productdetails = () => {
  // const { name } = useParams();
  const location = useLocation();
  const { id } = location.state;
  const [product, setProduct] = useState();
  const [products, setProducts] = useState([]);
  const [addToCart, setAddToCart] = useState(false);
  const { cartProducts } = useSelector((state) => state.cart);

  const handleAddToCart = () => setAddToCart(true);

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

  const handleShowButton = () => {
    if (product.count < 1) {
      return (
        <Button classes={"bg-gray-400 border-gray-400"}>اتمام موجودی</Button>
      );
    } else {
      const isExistInCart = cartProducts.find((pro) => pro.ProductId === id);
      if (isExistInCart) {
        return (
          <Link to={routes.CART.path}>
            <Button classes={"border-primary text-gray-500"}>
              موجود در سبد خرید شما
            </Button>
          </Link>
        );
      } else {
        return (
          <Button
            classes={
              "bg-primary border-primary hover:bg-transparent hover:text-primary"
            }
            classIcon={"fas fa-shopping-bag"}
            cartBtn={true}
            handleAddToCart={handleAddToCart}
          >
            افزودن به سبد خرید
          </Button>
        );
      }
    }
  };

  if (product) {
    return (
      <div>
        <div className="container pb-6 flex flex-row-reverse justify-end space-x-32 space-x-reverse items-center">
          <Gallery mainImg={product.image} images={product.images} />
          <div className="w-full">
            <Features product={product} addToCart={addToCart} />
            <div className="flex gap-3 pb-5 mt-6">
              {handleShowButton()}
              <Button
                classes={
                  "border-gray-300 hover:bg-transparent hover:text-primary text-gray-500"
                }
                classIcon={"far fa-heart"}
              >
                ذخیره محصول
              </Button>
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
