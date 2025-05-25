import React, { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { div } from "framer-motion/client";
export default function ModalWithHook() {
  const [viewModal, setViewModal] = useState(false);
  const divRef = useRef(null);

  function closeModal() {
    setViewModal(false);
  }
  return (
    <div className="w-fit" ref={divRef}>
      <button
        className="bg-green-300 px-2 py-1"
        onClick={() => setViewModal(true)}
      >
        show modal
      </button>
      {viewModal && <NewModal closeModal={closeModal} divRef={divRef} />}
    </div>
  );
}

function NewModal({
  closeModal,
  divRef,
}: {
  closeModal: () => void;
  divRef: React.MutableRefObject<null>;
}) {
  useClickOutside({
    ref: divRef,
    actionToBeDone: () => {
      closeModal();
    },
  });
  return <div className="h-32 w-32 bg-blue-300">this is a nice modal</div>;
}
