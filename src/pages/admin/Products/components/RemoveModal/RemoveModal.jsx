import { useDispatch, useSelector } from "react-redux";
import { clearId } from "store/slices/removeId";
import { deleteProduct } from "store/slices/products";
import ReactDOM from "react-dom";

const RemoveModal = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.removeId);

  const handleOKClick = () => {
    dispatch(deleteProduct(id));
    dispatch(clearId());
  };
  const handleCancelClick = () => {
    dispatch(clearId());
  };

  return ReactDOM.createPortal(
    <div className="bg-gray-50/75 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-10 px-24 border-4 border-primary rounded-xl">
          <div className="flex text-lg text-zinc-800 mb-6 flex-col items-center">
            <i className="fas fa-exclamation-circle mb-6 text-5xl text-gray-200"></i>
            <p>از حذف این کالا مطمئن هستید؟</p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleCancelClick}
              className="rounded px-4 py-2 ml-4 text-zinc-800 bg-gray-200"
            >
              خیر
            </button>
            <button
              onClick={handleOKClick}
              className=" rounded px-4 py-2 text-white  bg-primary"
            >
              بله حذف شود
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default RemoveModal;
