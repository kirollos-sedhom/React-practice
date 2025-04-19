import React from "react";
import { motion } from "framer-motion";
const BasicsOfMotion = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        initial={{
          rotate: "0deg",
        }}
        animate={{
          rotate: "180deg",
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        className="h-32 w-32 bg-black"
      ></motion.div>
    </div>
  );
};

export default BasicsOfMotion;
