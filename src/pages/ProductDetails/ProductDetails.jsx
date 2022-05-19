import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import WithLayoutpages from "hoc/WithLayoutPages";
import userService from "services/user.service";
import Gallery from "./components/Gallery/Gallery";

const Productdetails = () => {
  // const { name } = useParams();
  const location = useLocation();
  const { id } = location.state;
  const [product, setProduct] = useState()

  const handleRequest = async () => {
    try {
      const res = await userService.getProducts(`?id=${id}`)
      setProduct(res.data[0])
    }catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <div>
      <div class="container pt-10 pb-6 flex flex-row-reverse justify-between space-x-32 space-x-reverse">
        <Gallery mainImg={product.image} images={product.images}/>
        <div className="w-full">
          
          <div class="flex gap-3 pb-5 mt-6">
            <a
              href="#"
              class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded 
                    hover:bg-transparent hover:text-primary transition text-sm flex items-center"
            >
              <span class="mr-2">
                <i class="fas fa-shopping-bag"></i>
              </span>{" "}
              افزودن به سبد خرید
            </a>
            <a
              href="#"
              class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded 
                    hover:bg-transparent hover:text-primary transition text-sm"
            >
              <span class="mr-2">
                <i class="far fa-heart"></i>
              </span>{" "}
              ذخیره محصول
            </a>
          </div>
        </div>
      </div>

      <div class="container pb-16">
        <h3 class="border-b border-gray-200 text-gray-800 pb-3 font-medium">
          توضیحات محصول
        </h3>
        <div class="space-y-3 text-gray-600 pt-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aut
            corrupti odit maiores qui porro! Corporis architecto voluptate amet
            odio? Culpa nisi, vitae quia accusamus harum fuga assumenda sed,
            illo id, sapiente veritatis sunt quis consequuntur dolorem
            cupiditate? Officia suscipit praesentium facere odit cupiditate quod
            unde, facilis, officiis accusantium, commodi ad voluptas repellendus
            itaque blanditiis incidunt enim iure? Quidem quia beatae quis odio
            dolorem magni, ex natus, pariatur esse, praesentium perferendis
            nulla neque dolorum nobis. Ullam hic autem earum dolores eos in
            laborum, similique itaque praesentium magni sequi doloremque eaque,
            nisi deleniti error officia nemo, sint sunt modi a quos.
          </p>
        </div>
      </div>

      <div class="container pb-16">
        <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
          محصولات مشابه
        </h2>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-6"></div>
      </div>
    </div>
  );
};

export default WithLayoutpages(Productdetails);
