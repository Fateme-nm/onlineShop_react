import React, { useState } from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import PaymentSummary from "./components/PaymentSummary/PaymentSummary";
import { useFormik } from "formik";
import * as Yup from "yup";
import Field from "./components/Field/Field";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "routes/routes";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "خیلی کوتاه است")
    .max(50, "خیلی بلند است")
    .required("این فیلد ضروری است"),
  lastName: Yup.string()
    .min(1, "خیلی کوتاه است")
    .max(50, "خیلی بلند است")
    .required("این فیلد ضروری است"),
  billingAddress: Yup.string()
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
  const { cartProducts } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      lastName: "",
      firstName: "",
      billingAddress: "",
      phone: "",
      date: "",
    },
    onSubmit: async (values) => {
      localStorage.setItem(
        "order",
        JSON.stringify({ ...values, date: date.getTime() })
      );
      window.location.href =
        "http://127.0.0.1:5500/maktab66-front/public/payment.html";
    },
    validationSchema,
  });

  if (cartProducts.length === 0) {
    navigate(routes.CART.path, { replace: true });
  } else {
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
                    id="firstName"
                    name="firstName"
                    formik={formik}
                    input={true}
                  />
                  <Field
                    label="نام خانوادگی"
                    type="text"
                    id="lastName"
                    name="lastName"
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
                  id="billingAddress"
                  name="billingAddress"
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
  }
};

export default WithLayoutpages(Finalizepurchase);
