import React, { useState } from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import PaymentSummary from "./components/PaymentSummary/PaymentSummary";
import { useFormik } from "formik";
import * as Yup from "yup";
import Field from "./components/Field/Field";
import { useNavigate } from "react-router-dom";
import routes from "routes/routes";

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(4, "خیلی کوتاه است")
    .max(50, "خیلی بلند است")
    .required("این فیلد ضروری است"),
  lastname: Yup.string()
    .min(4, "خیلی کوتاه است")
    .max(50, "خیلی بلند است")
    .required("این فیلد ضروری است"),
  address: Yup.string()
    .min(4, "خیلی کوتاه است")
    .max(200, "خیلی بلند است")
    .required("این فیلد ضروری است"),
  phone: Yup.string()
    .matches(
      /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
      "این شماره نامعتبر است"
    )
    .max(11, "این شماره نامعتبر است")
    .required("این فیلد ضروری است"),
});

const Finalizepurchase = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      lastname: "",
      firstname: "",
      address: "",
      phone: "",
      date: "",
    },
    onSubmit: async (values) => {
      navigate(routes.PAYMENT.path, {
        state: { ...values, date: date.getTime() },
      });
    },
    validationSchema,
  });

  return (
    <div className="container mx-auto mt-10">
      <form className="flex shadow-md my-10 flex-row-reverse">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8 flex-row-reverse">
            <h2 className="font-semibold text-xl">نهایی کردن خرید</h2>
          </div>
          <div>
            <div className="space-y-8 mt-10">
              <div className="flex flex-row-reverse justify-between items-start space-x-5 space-x-reverse">
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
              </div>
              <div className="flex flex-row-reverse justify-between items-start space-x-5 space-x-reverse">
                <Field
                  label="تلفن همراه"
                  type="phone"
                  id="phone"
                  name="phone"
                  formik={formik}
                  input={true}
                />
                <Field
                  label="تاریخ"
                  type="text"
                  id="date"
                  name="date"
                  formik={formik}
                  date={date}
                  setDate={setDate}
                />
              </div>
              <Field
                label="آدرس"
                id="address"
                name="address"
                formik={formik}
                textarea={true}
              />
            </div>
          </div>
        </div>
        <PaymentSummary handleSubmit={formik.handleSubmit} />
      </form>
    </div>
  );
};

export default WithLayoutpages(Finalizepurchase);
