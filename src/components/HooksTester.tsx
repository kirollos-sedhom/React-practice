import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function HooksTester() {
  const [inputText, setInputText] = useLocalStorage("textInput", "");

  return (
    <div>
      {/* localStorage hook test */}
      <input
        className="border-2 py-1 px-2"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
}
