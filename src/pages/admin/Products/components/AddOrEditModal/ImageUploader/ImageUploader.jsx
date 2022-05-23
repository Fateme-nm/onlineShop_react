import React, { useState } from "react";
import httpService from "services/HttpService";
import { imageUrl } from "utils";

const ImageUploader = ({
  name,
  formik,
  setThumbnailImg,
  isThumbnail,
  setImagesArr,
}) => {
  const [showPreview, setShowPreview] = useState();
  const handleChangeImage = (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    httpService.post("upload", formData).then((res) => {
      console.log(3);
      const filename = res.data.filename;
      console.log(4);
      isThumbnail ? setThumbnailImg(filename) : setImagesArr(filename);
      console.log(6);
      setShowPreview(imageUrl(res.data.filename));
    });
  };

  return (
    <div>
      <div class="flex items-center justify-center w-full ml-2">
        <label
          class={`flex flex-col border-4 border-dashed hover:bg-gray-100 hover:border-gray-300 ${
            isThumbnail ? "w-36 h-36" : "w-20 h-20"
          }`}
        >
          <div
            class={`relative flex flex-col items-center justify-center h-full w-full`}
          >
            <img src={showPreview} class={`absolute inset-0 w-full h-full object-cover`} />
            {isThumbnail ? (
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
            ) : (
              <i className="fa fa-plus text-gray-400"></i>
            )}
            {isThumbnail && (
              <p class="pt-1 text-sm tracking-wider text-gray-400">
                انتخاب تصویر
              </p>
            )}
          </div>
          <input
            type="file"
            class="hidden"
            accept="image/*"
            name={name}
            value={formik.values[name]}
            onChange={(e) => {
              formik.handleChange(e);
              handleChangeImage(e);
            }}
            onBlur={formik.handleBlur}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;
