import React from "react";

/*
hints from instructor:
you will need custom hook
you will store theme local storage and toggle it on button click
*/

/*
my plan:
use ternary operator to check the local storage
depending on the value, it will set a light or dark style
problem: not sure why i would need custom hook
*/

const DarkMode = () => {
  const [theme, setTheme] = React.useState<string | null>(
    localStorage.getItem("theme")
  );
  localStorage.setItem("theme", "light");
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    localStorage.setItem("theme", theme ? theme : "light");
  }
  return (
    <div
      className={`h-screen w-full p-4 ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <p
        className={`${
          theme === "light" ? "text-black" : "text-white"
        } text-3xl mb-4`}
      >
        Hello world
      </p>
      <button
        className={`${
          theme === "light"
            ? "text-black bg-black/20"
            : "text-white bg-white/20"
        } px-2 py-1 rounded-md`}
        onClick={toggleTheme}
      >
        change theme
      </button>
    </div>
  );
};

export default DarkMode;
