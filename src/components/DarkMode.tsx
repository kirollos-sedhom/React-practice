import React from "react";
import useToggleTheme from "../hooks/useToggleTheme";

/*
hints from instructor:
you will need custom hook
you will store theme local storage and toggle it on button click
*/

const DarkMode = () => {
  console.log(localStorage.getItem("dark-mode"));
  const [darkMode, toggle] = useToggleTheme();

  return (
    <div
      className={`h-screen w-full p-4 ${
        darkMode === "on" ? "bg-black" : "bg-white"
      }`}
    >
      <p
        className={`${
          darkMode === "on" ? "text-white" : "text-black"
        } text-3xl mb-4`}
      >
        Hello world
      </p>
      <button
        className={`  ${
          darkMode === "on"
            ? "text-white bg-white/20"
            : "text-black bg-black/20"
        } px-2 py-1 rounded-md cursor-pointer hover:bg-zinc-500/50 `}
        onClick={toggle}
      >
        change theme
      </button>
    </div>
  );
};

export default DarkMode;
