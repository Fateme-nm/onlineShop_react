import React from "react";
import ReactDOM from "react-dom";

const GalleryModal = ({ activeImage, setActiveImage, images }) => {
  return ReactDOM.createPortal(
    <div className="bg-gray-300/75 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div
          className="flex-col justify-center bg-white py-6 px-10 rounded-xl overflow-hidden shadow-md"
          style={{ height: "85%" }}
        >
          <div className="flex text-md justify-between items-center w-full pb-4 mb-4 border-b border-b-gray-150">
            <button onClick={() => setActiveImage(null)}>
              <i className="fa fa-close rounded px-2 py-1 hover:text-primary"></i>
            </button>
            <p>تصاویر</p>
          </div>
          <div className="flex justify-between space-x-10 h-3/4">
            <div className="flex flex-col space-y-2 overflow-y-auto">
              {images.map((img) => {
                return (
                  <div
                    onClick={() => {
                      setActiveImage(img);
                    }}
                    className="w-28 pr-3"
                  >
                    <img
                      src={`http://localhost:3002${img}`}
                      className={`cursor-pointer border rounded-md hover:border-primary w-full 
                      ${img === activeImage ? "border-primary": "border-gray-300"}`}
                    />
                  </div>
                );
              })}
            </div>
            <div className="w-96">
              <img src={`http://localhost:3002${activeImage}`} />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default GalleryModal;
