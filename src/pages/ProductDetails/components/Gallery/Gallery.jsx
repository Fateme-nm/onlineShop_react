import React, { useState } from "react";
import GalleryModal from "./GalleryModal/GalleryModal";

const Gallery = ({ mainImg, images }) => {
  const [activeImage, setActiveImage] = useState(null);
  if (mainImg) {
    return (
      <div className="w-2/3">
        <div>
          <img
            id="main-img"
            src={`http://localhost:3002${mainImg}`}
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div onClick={() => setActiveImage(mainImg)}>
            <img
              src={`http://localhost:3002${mainImg}`}
              className="w-full cursor-pointer border border-gray-300 rounded-md hover:border-primary"
            />
          </div>
          {images &&
            images.map((img) => {
              return (
                <div onClick={() => setActiveImage(img)}>
                  <img
                    src={`http://localhost:3002${img}`}
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
            images={[mainImg, ...images]}
          />
        )}
      </div>
    );
  }
};

export default Gallery;
