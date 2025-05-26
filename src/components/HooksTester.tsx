import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useWindowResize from "../hooks/useWindowResize";

export default function HooksTester() {
  const [inputText, setInputText] = useLocalStorage("textInput", "");
  const screenSize = useWindowResize();
  return (
    <div>
      {/* localStorage hook test */}
      {/* <input
        className="border-2 py-1 px-2"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      /> */}

      {/* window resize hook test */}
      <div className="flex flex-col items-center ">
        <p>width: {screenSize.width}</p>
        <p>height: {screenSize.height}</p>
      </div>
    </div>
  );
}
