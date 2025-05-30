import React from "react";

export default function ScrollBottom() {
  function handleClick() {
    window.scroll({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
  return (
    <div className="flex justify-center">
      <button className="bg-slate-400 px-2 py-1" onClick={handleClick}>
        scroll to bottom
      </button>
    </div>
  );
}
