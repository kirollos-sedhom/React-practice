import React from "react";
import ReactDOM from "react-dom";

import QRCode from "react-qr-code";
const QRGenerator = () => {
  const [text, setText] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    if (error) setTimeout(() => setError(false), 2000);
  }, [error]);
  function handleQRGenaration() {
    if (!inputRef.current?.value.trim()) {
      // alert("please enter something");
      setError(true);
    } else {
      setError(false);
      setText(inputRef.current?.value);
    }
  }
  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <input
        aria-label="write text for QR code generation"
        maxLength={4000}
        ref={inputRef}
        type="text"
        className="border-1 border-black/30 rounded-md p-1"
        placeholder="please enter your text"
      />
      <button
        className="bg-zinc-200 rounded-md px-3 py-1 hover:bg-zinc-300 cursor-pointer"
        onClick={handleQRGenaration}
      >
        Generate QR code
      </button>
      {error && (
        <p className="text-red-500 font-bold">Please Enter something first</p>
      )}
      {text && <QRCode value={text} />}
    </div>
  );
};

export default QRGenerator;
