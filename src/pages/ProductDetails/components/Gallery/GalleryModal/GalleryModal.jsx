import React from 'react';

const GalleryModal = ({handleClose, images}) => {
    return ReactDOM.createPortal(
        <div className="bg-gray-50/75 fixed inset-0 z-50">
          <div className="flex h-screen justify-center items-center">
            <div className="flex-col justify-center bg-white py-6 px-8 border-4 border-primary rounded-xl">
              <div className="flex text-md justify-between items-center w-full">
                <button onClick={handleClose}>
                  <i className="fa fa-close bg-primary rounded px-2 py-1"></i>
                </button>
                <p>تصاویر</p>
              </div>
              <div className="flex justify-between">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("modal")
      );
}

export default GalleryModal;
