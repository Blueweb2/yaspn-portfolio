"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Images */}
          <div className="relative h-[300px] md:h-[450px]">
            {/* Large Image */}
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.9 }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 h-full w-[80%] overflow-hidden"
            >
              <Image
                src="/ground.webp"
                alt="stadium"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Small Image */}
            <motion.div
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute right-0 top-1/2 h-[200px] w-[40%] -translate-y-1/2 overflow-hidden md:h-[300px]"
            >
              <Image
                src="/city2.webp"
                alt="building"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="h-full">

            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-3 text-sm uppercase tracking-[3px] text-[#d69a2d]"
              >
                About YASPN
              </motion.p>

              <motion.h2 className="max-w-xl text-[24px] font-bold leading-tight md:text-3xl">
                {/* First Line */}
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.9 }}
                  viewport={{ once: true }}
                  className="block"
                >
                  A Global Vision
                </motion.span>

                {/* Second Line */}
                <motion.span
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.9, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="block"
                >
                  for a Better Tomorrow
                </motion.span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ filter: "blur(10px)", opacity: 0.2 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="pt-5 text-sm"
            >
              YASPN (Youth Athletic Sports Programming Network) specializes in developing global projects across sports infrastructure, education, healthcare, hospitality, and sustainable urban development. Its vision is to create high-quality ecosystems that empower youth, strengthen communities, and generate lasting social and economic impact worldwide. Founded as part of Jacob Group, YASPN is backed by more than 40 years of experience across the Middle East and India.
            </motion.p>

            <motion.p
              initial={{ filter: "blur(10px)", opacity: 0.2 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-3 text-sm"
            >
              YASPN has also empowered Jacob’s Trading and Contractors Pvt. Ltd. and the associates of ATG/YASPN — Americas Technology Group Inc. (USA) — to act on its behalf in supporting and delivering global initiatives. Together, they are committed to building impactful projects that create opportunities for young people and contribute to sustainable global development.
            </motion.p>

            <Button className="rounded-full bg-[#d69a2d] px-8 py-6 text-black hover:bg-[#c58d26] mt-5">
              Learn More
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
};