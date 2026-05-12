"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/layout/Container";

const stats = [
  {
    tag: "EXPERIENCE",
    value: "45+",
    label: "YEARS OF EXPERIENCE",
  },
  {
    tag: "PEOPLE",
    value: "7000+",
    label: "PEOPLE EMPLOYED",
  },
  {
    tag: "PROJECTS",
    value: "100+",
    label: "PROJECTS COMPLETED",
  },
  {
    tag: "COUNTRIES",
    value: "3",
    label: "COUNTRIES OPERATING",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#02040c] pb-52 pt-24">
      <Container>

        <div className="relative z-10 mb-10 grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 2.1,
                delay: index * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden border-l border-white/20 px-4 sm:px-6 lg:px-8"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#d69a2d]/0 via-[#d69a2d]/0 to-transparent transition-all duration-700 group-hover:via-[#d69a2d]/10" />

              {/* Small Tag */}
              <motion.div
                initial={{ opacity: 0, y: 39 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 4,
                  delay: 0.2 + index * 0.18,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="mb-8 inline-flex rounded-full border border-white/15 px-5 py-2 text-xs text-white/80 backdrop-blur-sm transition-all duration-500 group-hover:border-[#d69a2d]/50"
              >
                {item.tag}
              </motion.div>

              {/* Number */}
              <motion.h3
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(6px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 2.3,
                  delay: 0.35 + index * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl font-light leading-none text-white transition-all duration-500 group-hover:text-[#d69a2d]"
              >
                {item.value}
              </motion.h3>

              {/* Label */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 + index * 0.18,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="mt-4 text-xs sm:text-sm uppercase tracking-wide text-zinc-400 transition-colors duration-500 group-hover:text-zinc-200"
              >
                {item.label}
              </motion.p>

            </motion.div>
          ))}
        </div>


      </Container>

      {/* Bottom SVG Skyline */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/stats-skyline.svg"
          alt="City Skyline"
          width={1920}
          height={220}
          className="h-auto w-full object-cover opacity-90"
        />
      </div>
    </section>
  );
}