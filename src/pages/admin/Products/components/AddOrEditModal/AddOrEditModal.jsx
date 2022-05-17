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
});

const AddOrEditModal = ({setAddOrEditModalOn}) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      categoryId: "",
      description: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      const { image, name, categoryId, description } = values;
      dispatch(postProduct({ image, name, categoryId, description }))
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
              <FieldModal
                label="دسته بندی"
                id="categoryId"
                name="categoryId"
                formik={formik}
                select={true}
              />
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
