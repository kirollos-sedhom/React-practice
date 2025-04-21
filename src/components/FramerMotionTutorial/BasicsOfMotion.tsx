import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <motion.button
        onClick={() => setIsVisible((prev) => !prev)}
        className="my-4 px-4 py-2 bg-blue-300 rounded-md text-xl font-bold"
        layout
      >
        toggle box
      </motion.button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [150, 0, 100, 200, 0, 120],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: [150, 0, 100, 200, 0, 120].reverse(),
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.3, 0.5, 0.85, 1],
            }}
            className="h-32 w-32 bg-black"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
