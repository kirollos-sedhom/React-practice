import React from "react";
import ReactDOM from "react-dom";

import QRCode from "react-qr-code";
const QRGenerator = () => {
  const [text, setText] = React.useState<string>("");

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <input
        type="text"
        className="border-1 border-black/30 rounded-md p-1"
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="please enter your text"
      />
      <QRCode value={text} />
    </div>
  );
};

export default QRGenerator;
