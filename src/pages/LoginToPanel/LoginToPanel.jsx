import React, {useEffect} from "react";
import WithCheckLogin from "hoc/WithCheckLogin";
import WithLayoutpages from "hoc/WithLayoutPages";
import avatar from "assets/images/undraw_male_avatar.svg";
import unlock from "assets/images/undraw_unlock.svg";
import InputLogin from "./InputLogin/InputLogin";
import routes from "routes/routes";
import Botton from "components/Botton/Botton";
import { useFormik } from "formik";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "store/slices/auth";
import * as Yup from "yup";
import Loader from "components/Loader/Loader";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "خیلی کوتاه است")
    .max(20, "خیلی بلند است")
    .required("این فیلد ضروری است"),
  password: Yup.string()
    .min(4, "خیلی کوتاه است")
    .max(50, "خیلی بلند است")
    .required("این فیلد ضروری است"),
});

const Logintopanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, isLoading } = useSelector((state) => state.auth);
  // const { message  } = useSelector((state) => state.message);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      resetForm();
      const {username, password} = values
      dispatch(login({username, password}))
        .unwrap()
        .then(() => {
          navigate(routes.ORDERS.path, { replace: true });
        })
        .catch((err) => {
          console.log(err)
        });
    },
    validationSchema,
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
        <InputLogin
          type="text"
          iconClass="fa-user"
          formik={formik}
          name="username"
        >
          نام کاربری
        </InputLogin>
        <InputLogin
          type="password"
          iconClass="fa-lock"
          formik={formik}
          name="password"
        >
          رمز عبور
        </InputLogin>
        <Botton>
          ورود
          {isLoading && <Loader />}
        </Botton>
      </form>
    </div>
  );
};

export default WithCheckLogin(WithLayoutpages(Logintopanel));
