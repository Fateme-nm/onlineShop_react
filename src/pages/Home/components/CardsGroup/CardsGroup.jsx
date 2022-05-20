import React, { useState, useEffect } from "react";
import Card from "components/Card/Card";
import { Link } from "react-router-dom";
import userService from "services/user.service";

const CardsGroup = ({ title, id }) => {
  const [products, setProducts] = useState([]);

  const handleRequest = async () => {
    try {
      const res = await userService.getProducts(`?_limit=3&&categoryId=${id}`);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleRequest();
  }, []);
  
  return (
    <div className="container py-8">
      <Link
        to={`/products/${title}`}
        state={{id}}
        className="text-2xl font-medium text-gray-800 uppercase mb-8 cursor-pointer hover:text-primary flex justify-end items-center"
      >
        <p>کفش {title}</p>
        <i className="fas fa-caret-left ml-3"></i>
      </Link>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 px-8">
        {React.Children.toArray(
          products.map((pro) => {
            return (
              <Card
                name={pro.name}
                price={pro.price}
                id={pro.id}
                imgSrc={`http://localhost:3002${pro.image}`}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default CardsGroup;
