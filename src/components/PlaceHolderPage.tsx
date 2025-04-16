import React from "react";
import Modal from "./Modal";
const PlaceHolderPage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    window.addEventListener("keydown", trapFocus);

    return () => {
      window.removeEventListener("keydown", trapFocus);
    };
  }, []);
  return (
    <div>
      <div className="w-full flex justify-center">
        <button
          onClick={() => setShowModal((prev) => !prev)}
          className="px-2 py-1 rounded-md bg-blue-300"
        >
          show modal
        </button>
      </div>
      <Modal
        modalRef={modalRef}
        showModal={showModal}
        setShowModal={setShowModal}
        header="this is a header"
        body="this is the body"
        footer="this is the footer"
      />
    </div>
  );

  function trapFocus(e: KeyboardEvent) {
    const isTabPressed = e.key === "Tab";
    if (!isTabPressed) {
      return;
    }
    const modal = modalRef.current;
    const possibleFocusableElements = `button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])`;
    const focusableContent = modal?.querySelectorAll(possibleFocusableElements);
    console.log(focusableContent ? [0] : "found none");
    console.log(focusableContent ? [-1] : "found none");
  }
};

export default PlaceHolderPage;
