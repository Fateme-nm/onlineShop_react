import React from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import PaymentSummary from "./components/PaymentSummary";
import { useFormik } from "formik";

const Finalizepurchase = () => {
    const formik = useFormik({
        initialValues: {
            lastname: "",
            firstname: "",
            address: "",
            phone: "", 
            date: ""
        },
        
    })
  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10 flex-row-reverse">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8 flex-row-reverse">
            <h2 className="font-semibold text-xl">نهایی کردن خرید</h2>
          </div>
          
        </div>
        <PaymentSummary />
      </div>
    </div>
  );
};

export default WithLayoutpages(Finalizepurchase);
