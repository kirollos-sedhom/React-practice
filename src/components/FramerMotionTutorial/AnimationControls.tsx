import React from "react";
import { motion, useAnimationControls } from "framer-motion";
const AnimationControls = () => {
  const flipControls = useAnimationControls();
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <button
        onClick={handleClick}
        className="bg-blue-300 px-4 py-1 rounded-md font-bold"
      >
        flip it
      </button>
      <motion.div
        className="w-48 h-48 bg-black"
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
          banana: {
            rotate: "720deg",
          },
        }}
        initial="initial"
        animate={flipControls}
      ></motion.div>
    </div>
  );

  function handleClick() {
    flipControls.start("banana");
  }
};

export default AnimationControls;
