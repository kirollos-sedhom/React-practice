import React, { useEffect } from "react";
/*
todo
button to show content
clicking on it makes the content mount
clicking the content is okay
clicking outside the content makes it unmount
*/
type hookType = {
  ref: React.RefObject<HTMLElement>;
  actionToBeDone: () => void;
};

// received props: the ref of the react element being watched, and the function to be called
export default function useClickOutside({ ref, actionToBeDone }: hookType) {
  useEffect(() => {
    function handleClick(e: Event) {
      console.log("clicking on ", e.target);
    }
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
}
