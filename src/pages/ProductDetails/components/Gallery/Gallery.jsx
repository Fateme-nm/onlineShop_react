import React, { useState } from "react";
import GalleryModal from "./GalleryModal/GalleryModal";
import { imageUrl } from "utils";

const Gallery = ({ mainImg, images }) => {
  const [activeImage, setActiveImage] = useState(null);
  if (mainImg) {
    return (
      <div className="w-2/3">
        <div onClick={() => setActiveImage(mainImg)}>
          <img
            id="main-img"
            src={imageUrl(mainImg)}
            className="w-full cursor-pointer"
          />
        </div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {images &&
            images.map((img) => {
              return (
                <div onClick={() => setActiveImage(img)}>
                  <img
                    src={imageUrl(img)}
                    className="w-full cursor-pointer border border-gray-300 rounded-md hover:border-primary"
                  />
                </div>
              );
            })}
        </div>
        {activeImage && (
          <GalleryModal
            activeImage={activeImage}
            setActiveImage={setActiveImage}
            images={images ? [mainImg, ...images] : [mainImg]}
          />
        )}
      </div>
    );
  }
};

export default Gallery;
