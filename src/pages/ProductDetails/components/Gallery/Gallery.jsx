import React from "react";

const Gallery = ({ mainImg, images }) => {
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
          {images && images.map((img) => {
            return (
              <div>
                <img
                  src={`http://localhost:3002${img}`}
                  className="w-full cursor-pointer border border-primary"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Gallery;
