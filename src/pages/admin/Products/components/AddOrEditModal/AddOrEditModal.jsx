import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  image: Yup.string().required("این فیلد ضروری است"),
  name: Yup.string()
    .min(8, "خیلی کوتاه است")
    .max(60, "خیلی بلند است")
    .required("این فیلد ضروری است"),
  category: Yup.string().required("این فیلد ضروری است"),
});

const AddOrEditModal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      category: "",
      description: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      const { image, name, category, description } = values;
      dispatch(login({ image, name, category, description }))
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
        <div className="flex-col justify-center bg-white py-8 px-8 border-4 border-primary rounded-xl">
          <div className="flex text-md mb-6 justify-between items-center w-80">
            <button>
              <i className="fa fa-close bg-primary rounded px-2 py-1"></i>
            </button>
            <p>افزودن/ویرایش کالا</p>
          </div>
          <div className="flex justify-between">
            <form
              className="flex flex-col items-end w-full"
              onSubmit={handleSubmit}
            >
              <label htmlFor="img" className="mb-2">
                تصویر کالا
              </label>
              <input
                type="text"
                id="img"
                name="image"
                className="w-full border-2 border-gray-300 focus:outline-0 mb-4 rounded-sm"
              />
              <label htmlFor="name" className="mb-2">
                نام کالا
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-2 border-gray-300 focus:outline-0 mb-4 rounded-sm"
              />
              <label htmlFor="category" className="mb-2">
                دسته بندی
              </label>
              <select
                id="category"
                name="category"
                className="w-full border-2 border-gray-300 focus:outline-0 mb-4 rounded-sm"
              >
                <option value={1}>اول</option>
                <option value={2}>دوم</option>
                <option value={3}>سوم</option>
              </select>
              <label htmlFor="description" className="mb-2">
                توضیحات
              </label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                className="w-full border-2 border-gray-300 focus:outline-0 mb-4 rounded-sm"
              ></textarea>
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
