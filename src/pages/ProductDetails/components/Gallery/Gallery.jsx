import React, { useState } from "react";
import GalleryModal from "./GalleryModal/GalleryModal";

const Gallery = ({ mainImg, images }) => {
  const [openModal, setOpenModal] = useState(false);
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
          <div>
            <img
              src={`http://localhost:3002${mainImg}`}
              className="w-full cursor-pointer border border-primary"
            />
          </div>
          {images &&
            images.map((img) => {
              return (
                <div onClick={() => setOpenModal(true)}>
                  <img
                    src={`http://localhost:3002${img}`}
                    className="w-full cursor-pointer border border-gray-500"
                  />
                </div>
              );
            })}
        </div>
        {openModal && (
          <GalleryModal
            handleClose={() => setOpenModal(false)}
            images={[mainImg, ...images]}
          />
        )}
      </div>
    );
  }
};

export default Gallery;
