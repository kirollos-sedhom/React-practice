import React from "react";
import { motion, MotionConfig } from "framer-motion";
const Gestures = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
            rotate: "2.5deg",
          }}
          className="bg-blue-300 rounded-md px-4 py-2"
        >
          click me!
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
            rotate: "-2.5deg",
          }}
          className="bg-red-300 rounded-md px-4 py-2"
        >
          click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
