import React from "react";
import WithLayoutpages from "hoc/WithLayoutPages";
import avatar from 'assets/images/undraw_male_avatar.svg';
import unlock from 'assets/images/undraw_unlock.svg';

const Logintopanel = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
      <img
        src={unlock}
        className="hidden lg:block w-48 hover:scale-110 transition-all duration-500 transform mx-auto"
      />
      <form className="flex flex-col justify-center items-center w-1/2">
        <img src={avatar} className="w-32" />
        <h2 className="my-8 font-display font-bold text-3xl text-gray-700 text-center">
          خوش آمدید
        </h2>
        <a href="#" className="self-end pr-10 mt-4 text-gray-500 font-bold text-sm hover:text-primary">
          فراموشی رمز عبور
        </a>
        <a
          href="#"
          className="py-3 px-20 bg-primary rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
        >
          ورود
        </a>
      </form>
    </div>
  );
};

export default WithLayoutpages(Logintopanel);
