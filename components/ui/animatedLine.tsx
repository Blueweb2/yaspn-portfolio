'use client';
import { motion } from "framer-motion";

const AnimatedLine = () => {
  return (
    <motion.div
      initial={{
        width: 96,
        opacity: 1,
      }}
      animate={{
        width: [96, 70, 96],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="mt-6 h-[3px] bg-[#F0A516]"
    />
  );
};

export default AnimatedLine;