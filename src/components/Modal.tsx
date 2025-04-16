import React from "react";
import { IoClose } from "react-icons/io5";

type ModalPropsType = {
  modalRef: React.RefObject<HTMLDivElement>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  header: string;
  body: string;
  footer: string;
};
const Modal = ({
  modalRef,
  showModal,
  setShowModal,
  header,
  body,
  footer,
}: ModalPropsType) => {
  React.useEffect(() => {
    window.addEventListener("keydown", handleEscapeCloseModal);

    return () => {
      window.removeEventListener("keydown", handleEscapeCloseModal);
    };
  }, []);
  return (
    showModal && (
      <div
        onClick={handleCloseModal}
        className="fixed top-0 left-0 w-screen h-screen bg-black/30 flex items-center justify-center"
      >
        <div
          ref={modalRef}
          onClick={(e) => handleModalClick(e)}
          className="bg-red-300 w-1/2 h-1/2 flex flex-col items-center justify-between"
        >
          <div className="header bg-green-300 flex w-full items-center relative">
            <p className="w-full p-4 text-center">{header}</p>
            <IoClose
              className="absolute right-10 cursor-pointer"
              onClick={handleCloseModal}
            />
          </div>

          <p className="w-full p-4 text-center">{body}</p>
          <p className="bg-yellow-300 w-full p-4 text-center">{footer}</p>
        </div>
      </div>
    )
  );

  function handleModalClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
  }
  function handleCloseModal() {
    setShowModal(false);
  }
  function handleEscapeCloseModal(e: KeyboardEvent) {
    if (e.key == "Escape") {
      setShowModal(false);
    }
  }
};

export default Modal;
