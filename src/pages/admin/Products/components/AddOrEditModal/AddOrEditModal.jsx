import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FieldModal from "./FieldModal/FieldModal";
import { postProduct, updateProduct } from "store/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { clearEditId } from "store/slices/editId";
import ReactDOM from "react-dom";
import httpService from "services/HttpService";
import ImageUploader from "./ImageUploader/ImageUploader";

const validationSchema = Yup.object().shape({
  image: Yup.string().required("این فیلد ضروری است"),
  name: Yup.string()
    .min(8, "خیلی کوتاه است")
    .max(60, "خیلی بلند است")
    .required("این فیلد ضروری است"),
  categoryId: Yup.string().required("این فیلد ضروری است"),
  description: Yup.string().min(8, "خیلی کوتاه است").max(800, "خیلی بلند است"),
  price: Yup.number().required("این فیلد ضروری است"),
  count: Yup.number().required("این فیلد ضروری است"),
});

const AddOrEditModal = ({ setAddOrEditModalOn }) => {
  const dispatch = useDispatch();
  const { edit_id } = useSelector((state) => state.editId);
  const { products } = useSelector((state) => state.products);
  const [editProduct, setEditProduct] = useState(null);
  const thumbnailImg = useRef();

  const handleClose = () => {
    setAddOrEditModalOn(false);
    dispatch(clearEditId());
  };

  const getSelectedProduct = (id) => {
    return products.find((pro) => pro.id == id);
  };

  useEffect(() => {
    setEditProduct(getSelectedProduct(edit_id));
  }, [edit_id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      image: editProduct ? editProduct.image : "",
      images: editProduct ? editProduct.images : "",
      name: editProduct ? editProduct.name : "",
      categoryId: editProduct ? editProduct.categoryId : "",
      colorId: editProduct ? editProduct.colorId : "",
      description: editProduct ? editProduct.description : "",
      price: editProduct ? editProduct.price : "",
      count: editProduct ? editProduct.count : "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      setAddOrEditModalOn(false);
      const formData = new FormData();
      Object.entries(values).map((key, value) => {
        if (key[0] === "image") {
          formData.append("image", thumbnailImg.current);
        } else formData.append(key[0], key[1]);
      });
      if (edit_id) {
        formData.append("id", edit_id);
        dispatch(updateProduct(formData))
          .unwrap()
          .catch((err) => {
            console.log(err);
          })
          .finally(() => resetForm());
      } else {
        dispatch(postProduct(formData))
          .unwrap()
          .catch((err) => {
            console.log(err);
          })
          .finally(() => resetForm());
      }
    },
    validationSchema,
  });

  return ReactDOM.createPortal(
    <div className="bg-gray-300/75 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div
          className="flex-col justify-center bg-white py-6 px-8 rounded-xl shadow-2xl w-3/4"
          style={{ height: "95%" }}
        >
          <div className="flex text-md justify-between items-center w-full pb-4 mb-4 border-b border-b-gray-150">
            <button onClick={handleClose}>
              <i className="fa fa-close rounded px-2 py-1 hover:text-primary"></i>
            </button>
            <p>افزودن/ویرایش کالا</p>
          </div>
          <div className="flex justify-between">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex justify-between space-x-10">
                <div className="flex flex-wrap w-full">
                  <div className="w-full">
                    <FieldModal
                      label="نام کالا"
                      type="text"
                      id="name"
                      name="name"
                      formik={formik}
                      input={true}
                    />
                  </div>
                  <div className="w-1/2 pr-2">
                    <FieldModal
                      label="دسته بندی"
                      id="categoryId"
                      name="categoryId"
                      formik={formik}
                      select={true}
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <FieldModal
                      label="قیمت"
                      type="text"
                      id="price"
                      name="price"
                      formik={formik}
                      input={true}
                    />
                  </div>
                  <div className="w-1/2 pr-2">
                    <FieldModal
                      label="تعداد"
                      type="number"
                      id="count"
                      name="count"
                      formik={formik}
                      input={true}
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <FieldModal
                      label="رنگ"
                      id="colorId"
                      name="colorId"
                      formik={formik}
                      select={true}
                    />
                  </div>
                </div>
                <div className="flex w-full justify-start flex-row-reverse">
                  <ImageUploader
                    name={"image"}
                    formik={formik}
                    setThumbnailImg={(img) => thumbnailImg.current = img}
                    isThumbnail={true}
                  />
                  <ImageUploader
                    name={"images"}
                    formik={formik}
                    setThumbnailImg={(img) => thumbnailImg.current = img}
                  />
                </div>

              </div>
              <div className="w-full">
                <FieldModal
                  label="توضیحات"
                  id="description"
                  name="description"
                  formik={formik}
                  textarea={true}
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white rounded-md py-2 px-8 mt-4"
              >
                ذخیره
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default AddOrEditModal;
