import React from "react";

const ImageUploader = ({name, formik}) => {
  return (
    <div>
      <div class="flex items-center justify-center w-full">
        <label class="flex flex-col w-32 h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
          <div class="relative flex flex-col items-center justify-center pt-7">
            <img id="preview" class="absolute inset-0 w-full h-32" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-12 h-12 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clip-rule="evenodd"
              />
            </svg>
            <p class="pt-1 text-sm tracking-wider text-gray-400">
              انتخاب تصویر
            </p>
          </div>
          <input
            type="file"
            class="opacity-0"
            accept="image/*"
            name={name}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;
