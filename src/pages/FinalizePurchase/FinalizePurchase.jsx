import React from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import PaymentSummary from "./components/PaymentSummary";
import { useFormik } from "formik";
import * as Yup from "yup";
import Field from "./components/Field/Field";

const validationSchema = Yup.object().shape({});

const Finalizepurchase = () => {
  const formik = useFormik({
    initialValues: {
      lastname: "",
      firstname: "",
      address: "",
      phone: "",
      date: "",
    },
    onSubmit: async (values, { resetForm }) => {},
    validationSchema,
  });
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10 flex-row-reverse">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8 flex-row-reverse">
            <h2 className="font-semibold text-xl">نهایی کردن خرید</h2>
          </div>
          <div>
            <form>
              <Field
                label="نام"
                type="text"
                id="firstname"
                name="firstname"
                formik={formik}
                input={true}
              />
              <Field
                label="نام خانوادگی"
                type="text"
                id="lastname"
                name="lastname"
                formik={formik}
                input={true}
              />
              <Field
                label="آدرس"
                type="text"
                id="lastname"
                name="lastname"
                formik={formik}
                textarea={true}
              />
              <Field
                label="نام"
                type="phone"
                id="phone"
                name="phone"
                formik={formik}
                input={true}
              />
            </form>
          </div>
        </div>
        <PaymentSummary />
      </div>
    </div>
  );
};

export default WithLayoutpages(Finalizepurchase);
