"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../layout/Container";
import AnimatedLine from "../ui/animatedLine";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/services/Large-hospital.webp"
          alt="Services Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 4,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[#08152f]/75"
        />

        {/* Bottom Gradient Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.3,
            ease: "easeInOut",
          }}
          className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#08152f] to-transparent"
        />

      </div>

      <Container>
        <div className="relative z-10 flex min-h-[720px] items-center overflow-hidden">
          
          <div>

            {/* Small Top Text */}
            <motion.p
              initial={{
                opacity: 0,
                y: -30,
                letterSpacing: "0px",
              }}
              animate={{
                opacity: 1,
                y: 0,
                letterSpacing: "5px",
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-4 text-sm uppercase tracking-[5px] text-[#F0A516]"
            >
              OUR SERVICES
            </motion.p>

            {/* Main Heading */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  opacity: 0,
                  x: 300,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 3.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl"
              >
                BUILDING{" "}
                
                <motion.span
                  animate={{
                    color: ["#F0A516", "#ffd36a", "#F0A516"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-[#F0A516]"
                >
                  TOMORROW
                </motion.span>

              </motion.h1>
            </div>
            
            <AnimatedLine />

            {/* Sub Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                x: -150,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 4.3,
                delay: 0.6,
              }}
              className="mt-8 max-w-3xl text-3xl font-bold leading-tight md:text-5xl"
            >
              Comprehensive Development Solutions for a Better Tomorrow
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 4.2,
              }}
              className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300"
            >
              YASPN delivers world-class infrastructure, sports, hospitality,
              healthcare, education and real estate development solutions to
              create sustainable communities and future-ready environments.
            </motion.p>

          </div>

        </div>
      </Container>
    </section>
  )
}

export default HeroSection;