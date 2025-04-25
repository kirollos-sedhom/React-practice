import { AnimationControls, motion, useAnimationControls } from "framer-motion";
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

  // effect to handle escape and scroll lock functionality
  React.useEffect(() => {
    if (!showModal) {
      return;
    }

    window.addEventListener("keydown", handleEscapeCloseModal);

    // preventing scroll behavior
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscapeCloseModal);

      // enable scrolling again
      document.body.style.overflow = "";
    };
  }, [showModal]);

  // effect to handle trap focus in modal
  React.useEffect(() => {
    if (!showModal) {
      return;
    }

    const modalElement = modalRef.current;
    const focusableElements = modalElement?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements || focusableElements.length === 0) return;

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
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    modalElement?.addEventListener("keydown", handleTabKeyPress);

    return () => {
      modalElement?.removeEventListener("keydown", handleTabKeyPress);
      // making the modal button focused again
      if (modalButtonRef.current) {
        modalButtonRef.current.focus();
      }
    };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <motion.div
      onClick={handleCloseModal}
      className="fixed top-0 left-0 w-screen h-screen bg-black/30 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ translateY: "-200%" }}
        animate={{ translateY: "0" }}
        exit={{ translateY: "200%" }}
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
        <input type="text" className="bg-white" placeholder="something here" />
        <input
          type="text"
          className="bg-white"
          placeholder="something here 2"
        />
        <p className="bg-yellow-300 w-full p-4 text-center">{footer}</p>
      </motion.div>
    </motion.div>
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
