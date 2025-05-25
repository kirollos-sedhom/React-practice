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
      console.log("the click is working");
      if (ref.current && ref.current.contains(e.target as Node)) {
        console.log("clicking on element");
      } else {
        console.log("clicking outside element");
        actionToBeDone();
      }
    }
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
}
