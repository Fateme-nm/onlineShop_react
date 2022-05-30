import { useDispatch } from "react-redux";
import { clearCart } from "store/slices/cart";
import ReactDOM from "react-dom";

const RemoveModal = ({ setOpenModal }) => {
  const dispatch = useDispatch();

  const handleOKClick = () => {
    dispatch(clearCart());
    setOpenModal(false);
  };
  const handleCancelClick = () => {
    setOpenModal(false);
  };

  return ReactDOM.createPortal(
    <div className="bg-gray-300/75 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-10 px-24 rounded-xl shadow-2xl ">
          <div className="flex text-lg text-zinc-800 mb-6 flex-col items-center">
            <i className="fas fa-exclamation-circle mb-6 text-5xl text-gray-200"></i>
            <p>از حذف کالاهای سبد خرید مطمئن هستید؟</p>
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
