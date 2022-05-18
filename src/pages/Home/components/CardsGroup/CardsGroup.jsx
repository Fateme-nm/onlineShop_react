import React, { useState, useEffect } from "react";
import Card from "components/Card/Card";
import axios from "axios";

const CardsGroup = ({ title, id }) => {
  const [products, setProducts] = useState([]);
  const handleRequest = async () => {
    await axios
      .get(`http://localhost:3002/products?_limit=6&&categoryId=${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleRequest();
  }, []);
  return (
    <div className="container py-16">
      <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        {title}
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {React.Children.toArray(
          products.map((pro) => {
              console.log(pro.image)
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
