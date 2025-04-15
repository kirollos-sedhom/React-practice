import React from "react";
type ModalPropsType = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  header: string;
  body: string;
  footer: string;
};
const Modal = ({
  showModal,
  setShowModal,
  header,
  body,
  footer,
}: ModalPropsType) => {
  return (
    showModal && (
      <div
        onClick={() => setShowModal(false)}
        className="fixed top-0 left-0 w-screen h-screen bg-black/30 flex items-center justify-center"
      >
        <div className="bg-red-300 w-1/2 h-1/2 flex flex-col items-center justify-between">
          {/* BUG: clicking here also closes the modal */}
          <p className="bg-green-300 w-full p-4 text-center">{header}</p>
          <p className="w-full p-4 text-center">{body}</p>
          <p className="bg-yellow-300 w-full p-4 text-center">{footer}</p>
        </div>
      </div>
    )
  );
};

export default Modal;
