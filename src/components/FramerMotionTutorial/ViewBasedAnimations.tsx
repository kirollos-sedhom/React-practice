import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const ViewBasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // receives the ref and some properties
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

      <div
        style={{ backgroundColor: isInView ? "red" : "blue" }}
        className="h-[100vh] transition-[background] duration-1000"
        ref={ref}
      />
    </>
  );
};

export default ViewBasedAnimations;
