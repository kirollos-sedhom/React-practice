import React from "react";

export default function ScrollTop() {
  function handleClick() {
    window.scroll({
      top: 0,

      behavior: "smooth",
    });
  }
  return (
    <div className="flex justify-center">
      <button className="bg-slate-400 px-2 py-1" onClick={handleClick}>
        scroll to top
      </button>
    </div>
  );
}
