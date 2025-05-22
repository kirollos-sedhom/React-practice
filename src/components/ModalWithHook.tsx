import React, { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";
export default function ModalWithHook() {
  const divRef = useRef(null);
  useClickOutside({
    ref: divRef,
    actionToBeDone: () => {
      alert("clicking outside div");
    },
  });
  return <div ref={divRef}>ModalWithHook</div>;
}
