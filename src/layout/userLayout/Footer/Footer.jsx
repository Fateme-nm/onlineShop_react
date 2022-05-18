import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-white pt-12 pb-12 border-t border-gray-100">
        <div class="container">
          <div class="flex justify-between flex-row-reverse items-center">
            <div className="w-1/2">
              <p>شرکت تولیدی دنیلی</p>
              <p class="text-gray-500 text-base mt-3">
                یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
                متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
                مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
                که فروشگاه اینترنتی دنیلی سال‌هاست بر روی آن‌ها کار کرده و
                توانسته از این طریق مشتریان ثابت خود را داشته باشد.
              </p>
            </div>
            
          </div>
        </div>
      </footer>
      <div class="bg-gray-800 py-4">
        <div class="container flex items-center justify-between">
          <p class="text-gray-200 text-md">denily-2022 © copy right</p>
          <p class="text-gray-200 text-md">
            کلیه حقوق این سایت متعلق به شرکت دنیلی می باشد
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
