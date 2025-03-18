import React from "react";

const ColorGenerator = () => {
  const [backGroundColor, setBackGroundColor] = React.useState("bg-stone-50");
  const [colorSystem, setColorSystem] = React.useState("hex");
  function generateHexColor() {
    const choices = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let hexCode = "";
    for (let index = 0; index < 6; index++) {
      const randomIndex = Math.floor(Math.random() * choices.length);
      hexCode += choices[randomIndex];
    }
    setColorSystem("hex");
    setBackGroundColor(hexCode);
  }
  function generateRGBColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const bg_color = `${red},${green},${blue}`;

    setColorSystem("rgb");
    setBackGroundColor(bg_color);
  }

  const pageStyle =
    colorSystem === "hex"
      ? { backgroundColor: `#${backGroundColor}` }
      : { backgroundColor: `RGB(${backGroundColor})` };
  return (
    <div style={pageStyle} className="h-screen">
      <div className="color_generate_options flex justify-center gap-4 py-4">
        <button
          onClick={generateHexColor}
          className="bg-slate-200 py-1 px-2 rounded-sm cursor-pointer hover:bg-blue-200 focus:bg-blue-400"
        >
          Hex Color
        </button>
        <button
          onClick={generateRGBColor}
          className="bg-slate-200 py-1 px-2 rounded-sm cursor-pointer hover:bg-blue-200 focus:bg-blue-400"
        >
          RGB color
        </button>
      </div>
    </div>
  );
};

export default ColorGenerator;
