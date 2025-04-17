import React from "react";
import { IoClose } from "react-icons/io5";

type ModalPropsType = {
  modalButtonRef: React.RefObject<HTMLButtonElement>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  header: string;
  body: string;
  footer: string;
};
const Modal = ({
  modalButtonRef,
  showModal,
  setShowModal,
  header,
  body,
  footer,
}: ModalPropsType) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (showModal) {
      const modalElement = modalRef.current;
      const focusableElements = modalElement?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        // Force modal focus context to activate focus trap (without keeping focus on any element)
        firstElement.focus();
        firstElement.blur();
        const lastElement = focusableElements[focusableElements.length - 1];
        const handleTabKeyPress = (event: KeyboardEvent) => {
          if (event.key === "Tab") {
            if (event.shiftKey && document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            } else if (
              !event.shiftKey &&
              document.activeElement === lastElement
            ) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        };
        window.addEventListener("keydown", handleEscapeCloseModal);

        if (modalElement)
          modalElement.addEventListener("keydown", handleTabKeyPress);

        // preventing scroll behavior
        document.body.style.overflow = "hidden";
        return () => {
          if (modalElement)
            modalElement.removeEventListener("keydown", handleTabKeyPress);
          window.removeEventListener("keydown", handleEscapeCloseModal);

          // making the modal button focused again
          if (modalButtonRef.current) {
            modalButtonRef.current.focus();
          }

          // enable scrolling again
          document.body.style.overflow = "";
        };
      }
    }
  }, [showModal]);
  return (
    showModal && (
      <div
        onClick={handleCloseModal}
        className="fixed top-0 left-0 w-screen h-screen bg-black/30 flex items-center justify-center"
      >
        <div
          role="dialog"
          ref={modalRef}
          aria-modal={true}
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
          <input
            type="text"
            className="bg-white"
            placeholder="something here"
          />
          <input
            type="text"
            className="bg-white"
            placeholder="something here 2"
          />
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
