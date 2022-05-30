import React, { useState, useEffect } from "react";
import { separate, persinaDigit } from "utils";
import httpService from "services/HttpService";
import { useDispatch } from "react-redux";
import { handleAddToCart } from "store/slices/cart";
import Count from "components/Count/Count";

const Features = ({ product, addToCart }) => {
  const {
    name,
    categoryId,
    price,
    sizeId,
    colorId,
    count: maxQuantity,
  } = product;
  const [quantity, setQuantity] = useState(1); //quantity selected
  const [category, setCategory] = useState(); //category obj of product selected
  const [color, setColor] = useState(); //color obj of product selected
  const [sizes, setSizes] = useState(); //sizes array of product selected
  const [selectedSize, setSelectedSize] = useState(sizeId[0]); // selected size of product

  const dispatch = useDispatch();

  const handleRequestCategory = () => {
    httpService
      .get(`category?id=${categoryId}`)
      .then((res) => setCategory(res.data[0]));
  };

  const handleRequestColor = () => {
    httpService.get(`color?id=${colorId}`).then((res) => setColor(res.data[0]));
  };

  const handleRequestSize = async () => {
    const responses = await Promise.all(
      sizeId.map((sizeId) => {
        return httpService.get(`size?id=${sizeId}`).then((res) => res.data[0]);
      })
    );
    setSizes(responses);
  };

  useEffect(() => {
    handleRequestCategory();
    handleRequestColor();
    sizeId && handleRequestSize();
  }, []);

  useEffect(() => {
    addToCart &&
      dispatch(
        handleAddToCart({
          productId: product.id,
          colorId,
          sizeId: selectedSize,
          quantity,
        })
      );
  }, [addToCart]);

  return (
    <>
      <h2 className="md:text-3xl text-xl font-medium mb-4">{name}</h2>
      <div className="flex flex-row-reverse items-center">
        <span className="text-gray-800 ml-2"> دسته بندی</span>
        <span className="text-gray-600">{category && category.name}</span>
      </div>
      <div className="mt-4 space-x-2 flex flex-row-reverse">
        <span className="text-xl">{persinaDigit(separate(price))}</span>
        <span className="text-gray-800 pr-2">تومان</span>
      </div>
      <div className="mt-4 flex justify-between items-center flex-row-reverse">
        <h3 className="text-gray-800 mb-1">سایز</h3>
        <div className="flex items-center space-x-2">
          {sizes &&
            React.Children.toArray(
              sizes.map((size) => {
                return (
                  <button
                    className={`text-sm border border-gray-200 rounded-sm h-8 w-8 flex items-center justify-center cursor-pointer shadow-sm ${
                      size.id === selectedSize
                        ? "bg-primary text-white"
                        : "text-gray-600"
                    }`}
                    onClick={() => setSelectedSize(size.id)}
                  >
                    {persinaDigit(size.name)}
                  </button>
                );
              })
            )}
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center flex-row-reverse">
        <h3 className="text-gray-800 mb-1">رنگ</h3>
        <button
          className={
            "text-xs border border-gray-200 rounded-sm h-8 w-8 shadow-sm"
          }
          style={color && { backgroundColor: `${color.hex}` }}
        ></button>
      </div>
      <div className="mt-4 flex justify-between items-center flex-row-reverse">
        <h3 className="text-gray-800 mb-1">تعداد</h3>
        <Count
          quantity={quantity}
          maxQuantity={maxQuantity}
          setQuantity={setQuantity}
        />
      </div>
    </>
  );
};

export default Features;
