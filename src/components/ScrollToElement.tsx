import React from "react";

export default function ScrollToElement({
  elementRef,
}: {
  elementRef: React.MutableRefObject<Element | null>;
}) {
  function handleClick() {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }
  return (
    <div className="flex justify-center my-2">
      <button className="bg-slate-300 px-2 py-1" onClick={handleClick}>
        scroll to ref
      </button>
    </div>
  );
}
