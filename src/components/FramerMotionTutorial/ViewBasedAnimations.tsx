import React from "react";
import { motion } from "framer-motion";
const ViewBasedAnimations = () => {
  return (
    <>
      <div className="h-[150vh] bg-blue-300"></div>
      <motion.div
        className="h-[100vh]  bg-black"
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
      ></motion.div>
    </>
  );
};

export default ViewBasedAnimations;
