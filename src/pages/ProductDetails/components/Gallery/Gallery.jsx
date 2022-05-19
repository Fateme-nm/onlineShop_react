import React from "react";

const Gallery = (mainImg, images) => {
  return (
    <div className="w-full">
      <div>
        <img
          id="main-img"
          src={`https://localhost3002${mainImg}`}
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4">
        <div>
          <img
            src={`https://localhost3002${mainImg}`}
            className="w-full cursor-pointer border border-primary"
          />
        </div>
        {images.map((img) => {
          return (
            <div>
              <img
                src={`https://localhost3002${img}`}
                className="w-full cursor-pointer border border-primary"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
