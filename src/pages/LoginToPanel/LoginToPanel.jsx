import React from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import avatar from "assets/images/undraw_male_avatar.svg";
import unlock from "assets/images/undraw_unlock.svg";
import InputLogin from "./InputLogin/InputLogin";
import { Link } from "react-router-dom";
import routes from "routes/routes";
import Botton from "components/Botton/Botton";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Logintopanel = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      resetForm();
      const admin = await axios
        .get("http://localhost:3002/whoami")
        .then(
          (res) =>
            res.username === formik.values.username &&
            res.password === formik.values.password
        )
        .catch((err) => console.log(err));
      admin
        ? navigate(routes.PRODUCTS.path, { replace: true })
        : alert("اطلاعات وارد شده نادرست است!");
    },
  });
  return (
    <div className="w-full h-screen flex justify-center lg:justify-between items-center px-56 flex-row-reverse">
      <img
        src={unlock}
        className="hidden lg:block w-56 hover:scale-110 transition-all duration-500 transform"
      />
      <form
        className="flex flex-col justify-center items-center basis-1/2"
        onSubmit={formik.handleSubmit}
      >
        <img src={avatar} className="w-28" />
        <h2 className="my-8 mb-0 font-bold text-3xl text-gray-700 text-center">
          خوش آمدید
        </h2>
        <InputLogin type="text" iconClass="fa-user">
          نام کاربری
        </InputLogin>
        <InputLogin type="password" iconClass="fa-lock">
          رمز عبور
        </InputLogin>
        <Link to={routes.PRODUCTS.path} className="w-full">
          <Botton>ورود</Botton>
        </Link>
      </form>
    </div>
  );
};

export default WithLayoutpages(Logintopanel);
