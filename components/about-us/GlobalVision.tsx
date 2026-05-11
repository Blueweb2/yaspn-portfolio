"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

const content = [
  `YASPN (Youth Athletic Sports Programming Network) is a
  next-generation global development platform focused on creating
  integrated ecosystems that combine sports infrastructure,
  education, healthcare, hospitality, infrastructure, and sustainable
  urban development.`,

  `Built on innovation, leadership, and long-term vision, YASPN is
  dedicated to empowering youth, strengthening communities, and
  delivering transformative projects designed for future generations.`,

  `With a mission to create meaningful social and economic impact
  worldwide, YASPN develops high-quality environments that inspire
  growth, opportunity, and community well-being.`,

  `From world-class sports facilities and educational institutions to
  healthcare centers, hospitality destinations, and urban
  developments, every initiative is designed to create lasting value
  for people and communities around the globe.`,

  `YASPN was founded as part of Jacob Group, an organization with
  more than 40 years of business experience across the Middle East
  and India.`,

  `Backed by the group’s extensive resources, expertise, and
  industry knowledge, YASPN is positioned to successfully deliver
  impactful projects on an international scale while maintaining a
  strong commitment to quality, sustainability, and innovation.`,
];

const ourMissionContent = [
  'Provide world class developments with integrity and excellence',
  'Youth empowerment through sports and education programs',
  'Build resilient communities and future-ready infrastructure',
  'Promote innovation, partnerships & long-term social impact'
];

const GlobalVision = () => {
  return (
    <section className="w-full bg-[#0F1D3A] text-white py-20">
      <Container>

        {/* ───────────────── TOP SECTION ───────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>
            
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 3.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="mb-10 text-4xl font-bold leading-tight md:text-5xl"
            >
              A{" "}
              <span className="text-[#D89A1D]">
                Global Vision
              </span>
              <br />
              for a Better Tomorrow
            </motion.h2>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="h-[260px] w-full overflow-hidden sm:h-[350px] md:h-[420px]"
            >
              <motion.img
                src="/about-ground-explore.webp"
                alt="Global Vision"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="h-full w-full object-cover"
              />
            </motion.div>

          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-8 text-[15px] leading-8 text-gray-300">
            {content.map((text, index) => (

              <motion.p
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.4,
                  delay: index * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true }}
                className="text-gray-300/90"
              >
                {text}
              </motion.p>

            ))}
          </div>

        </div>

        {/* ───────────────── DIVIDER ───────────────── */}
        <div className="border-t border-white/10 my-20"></div>

        {/* ───────────────── VISION SECTION ───────────────── */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 3.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold md:text-5xl">
                Our{" "}
                <span className="text-[#D89A1D]">
                  Vision
                </span>
              </h2>
            </motion.div>

            {/* RIGHT */}
            <div>
              <motion.p
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 3.2,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="max-w-xl text-[15px] leading-8 text-gray-300"
              >
                To be a globally recognized leader in integrated infrastructure and
                community development, creating sustainable environments that
                inspire growth, opportunity and innovation.
              </motion.p>
            </div>

          </div>
        </div>

        {/* ───────────────── DIVIDER ───────────────── */}
        <div className="border-t border-white/10 my-20"></div>

        {/* ───────────────── MISSION SECTION ───────────────── */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 3.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Our{" "}
                <span className="text-[#D89A1D]">
                  Mission
                </span>
              </h2>
            </motion.div>

            {/* RIGHT */}
            <div className="space-y-6">
              {ourMissionContent.map((content, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 3,
                      delay: index * 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <motion.img
                      src="/sportsman-icon.svg"
                      alt=""
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "linear",
                        delay: index * 0.3,
                      }}
                      className="w-5"
                    />

                    <p className="text-gray-300">
                      {content}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </Container>
    </section>
  )
}

export default GlobalVision
