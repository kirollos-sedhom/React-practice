import React, { useEffect, useState } from "react";

export default function useWindowResize() {
  const [screenSize, setScreenSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  })); // get old values to fill the state

  function handleResize() {
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}
