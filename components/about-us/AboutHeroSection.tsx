"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container"

const AboutHeroSection = () => {
  return (
    <section className="relative flex h-[calc(50vh)] items-center overflow-hidden">
      <img src="/about-page-bg.webp" alt="" className="absolute inset-0 h-full w-full object-cover"/>
      <Container className="relative">
        <motion.h1
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="bg-[linear-gradient(90deg,#ffffff,#f8e7b9,#d69a2d,#fff4d6,#ffffff)] bg-[length:300%_100%] bg-clip-text text-7xl font-bold text-transparent"
        >
          ABOUT US
        </motion.h1>
      </Container>
    </section>
  );
};

export default AboutHeroSection;