import React from "react";

const ImageUploader = () => {
  return (
    <div
      x-data="showImage()"
      class="flex items-center justify-center h-screen mt-32 mb-32 bg-gray-200"
    >
      <div class="bg-white rounded-lg shadow-xl md:w-9/12 lg:w-1/2">
        <div class="m-4">
          <label class="inline-block mb-2 text-gray-500">
            Upload Image(jpg,png)
          </label>
          <div class="flex items-center justify-center w-full">
            <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
              <div class="relative flex flex-col items-center justify-center pt-7">
                <img id="preview" class="absolute inset-0 w-full h-32" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Select a photo
                </p>
              </div>
              <input type="file" class="opacity-0" accept="image/*" />
            </label>
          </div>
        </div>
        <div class="flex p-2 space-x-4">
          <button class="px-4 py-2 text-white bg-green-500 rounded shadow-xl">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
