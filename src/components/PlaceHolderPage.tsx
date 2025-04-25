import React from "react";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";
const PlaceHolderPage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const modalButtonRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <div>
      <div className="w-full flex justify-center">
        <button
          ref={modalButtonRef}
          onClick={() => setShowModal((prev) => !prev)}
          className="px-2 py-1 rounded-md bg-blue-300"
        >
          show modal
        </button>
        <input type="text" className="bg-white" placeholder="something here" />
        <input
          type="text"
          className="bg-white"
          placeholder="something here 2"
        />
        <input
          type="text"
          className="bg-white"
          placeholder="something here 3"
        />
      </div>
      <AnimatePresence>
        {showModal && (
          <Modal
            modalButtonRef={modalButtonRef}
            showModal={showModal}
            setShowModal={setShowModal}
            header="this is a header"
            body="this is the body"
            footer="this is the footer"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlaceHolderPage;
