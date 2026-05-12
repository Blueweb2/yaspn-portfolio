"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/layout/Container";

export default function ProjectsHero() {
  return (
    <section className="relative flex h-[70vh] items-center overflow-hidden">
      {/* Background */}
      <Image
        src="/projectpage.webp"
        alt="Projects Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <Container className="relative z-10 lg:pb-10">
        <div className="max-w-3xl">
         
          <h1 className="text-5xl md:font-black leading-tight text-white md:text-7xl">
            OUR{" "}
            <span className="text-[#d69a2d]">
              PROJECTS
            </span>
          </h1>

          {/* Animated Line */}
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

        </div>
      </Container>

      {/* Skyline */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/skyline-cut-Navy.svg"
          alt="Skyline"
          width={1920}
          height={180}
          className="h-[200px] md:h-[300px] lg:h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}