"use client"
import { motion } from 'framer-motion';
import { MoveRight  } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/herovideo.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#050816]/30 to-transparent" />

      <Container className="relative z-10 pt-28">
        <div className="max-w-2xl">

          {/* Top Text */}
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="tracking-wider"
          >
            <span className="text-[#d69a2d]">Y</span>outh{" "}
            <span className="text-[#d69a2d]">A</span>thletic{" "}
            <span className="text-[#d69a2d]">S</span>ports{" "}
            <span className="text-[#d69a2d]">P</span>rogramming{" "}
            <span className="text-[#d69a2d]">N</span>etwork
          </motion.p>

          {/* Main Heading */}
          <div className="mt-5 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, x: 390 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.9 }}
              className="text-5xl font-black text-white md:text-8xl"
            >
              VISION INTO
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, x: -190 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, delay: 0.2 }}
              className="text-5xl font-black text-[#d69a2d] md:text-8xl"
            >
              REALITY
            </motion.h1>
          </div>

          {/* Bottom Text */}
          <div className="mt-9 text-2xl font-semibold text-zinc-200 md:text-4xl">
            {[
              "Inspiring Legacies.",
              "Uplifting Youth.",
              "Strengthening",
              "Communities.",
            ].map((text, index) => (
              <motion.p
                key={text}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 4,
                  delay: 0.5 + index * 0.3,
                }}
                className={
                  text === "Strengthening" || text === "Communities."
                    ? "text-[#d69a2d]"
                    : ""
                }
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Button */}
          <Button
            className="mt-10 rounded-full bg-[#c58d26] px-8 py-6 text-base font-semibold hover:bg-[#184873]"
          >
            Learn More

            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="ml-2"
            >
              <MoveRight className="size-5" />
            </motion.div>
          </Button>

        </div>
      </Container>

    </section>
  );
};