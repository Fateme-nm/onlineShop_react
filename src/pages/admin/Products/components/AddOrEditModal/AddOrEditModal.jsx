import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FieldModal from "./FieldModal/FieldModal";
import { postProduct } from "store/slices/products";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object().shape({
  image: Yup.string().required("این فیلد ضروری است"),
  name: Yup.string()
    .min(8, "خیلی کوتاه است")
    .max(60, "خیلی بلند است")
    .required("این فیلد ضروری است"),
  categoryId: Yup.string().required("این فیلد ضروری است"),
  description: Yup.string().min(8, "خیلی کوتاه است").max(300, "خیلی بلند است"),
  price: Yup.number().required("این فیلد ضروری است"),
  count: Yup.number().required("این فیلد ضروری است"),
});

const AddOrEditModal = ({ setAddOrEditModalOn }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      categoryId: "",
      colorId: "",
      description: "",
      price: "",
      count: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      const formData = new FormData();
      Object.entries(values).map((key, value) => {
        formData.append(key[0], key[1]);
      });
      dispatch(postProduct(formData))
        .unwrap()
        .catch((err) => {
          console.log(err);
        })
        .finally(() => resetForm());
    },
    validationSchema,
  });

  return (
    <div className="bg-zinc-200 opacity-80 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-6 px-8 border-4 border-primary rounded-xl">
          <div className="flex text-md justify-between items-center w-full">
            <button onClick={() => setAddOrEditModalOn(false)}>
              <i className="fa fa-close bg-primary rounded px-2 py-1"></i>
            </button>
            <p>افزودن/ویرایش کالا</p>
          </div>
          <div className="flex justify-between">
            <form
              className="flex flex-col items-end w-full"
              onSubmit={formik.handleSubmit}
            >
              <div className="w-full flex justify-between space-x-3">
                <FieldModal
                  label="تصویر کالا"
                  type="file"
                  accept="image/*"
                  id="image"
                  name="image"
                  formik={formik}
                  input={true}
                />
                <FieldModal
                  label="نام کالا"
                  type="text"
                  id="name"
                  name="name"
                  formik={formik}
                  input={true}
                />
              </div>
              <div className="w-full flex justify-between space-x-3">
                <FieldModal
                  label="قیمت"
                  type="text"
                  id="price"
                  name="price"
                  formik={formik}
                  input={true}
                />
                <FieldModal
                  label="تعداد"
                  type="number"
                  id="count"
                  name="count"
                  formik={formik}
                  input={true}
                />
                <FieldModal
                  label="دسته بندی"
                  id="categoryId"
                  name="categoryId"
                  formik={formik}
                  select={true}
                />
                <FieldModal
                  label="رنگ"
                  id="colorId"
                  name="colorId"
                  formik={formik}
                  select={true}
                />
              </div>
              <FieldModal
                label="توضیحات"
                id="description"
                name="description"
                formik={formik}
                textarea={true}
              />
              <button type="submit" className="bg-submit rounded-md py-2 px-4">
                ذخیره
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrEditModal;
