"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../layout/Container";

const reasons = [
    {
        icon: "/services/icons-contact/trophy.svg",
        title: "45+ Years Industry Experience",
    },
    {
        icon: "/services/icons-contact/globe.svg",
        title: "Worldwide Infrastructure Experience",
    },
    {
        icon: "/services/icons-contact/lightbulb.svg",
        title: "Integrated Development Solutions(IDS)",
    },
    {
        icon: "/services/icons-contact/target.svg",
        title: "Vision-Driven & Future Focused",
    },
    {
        icon: "/services/icons-contact/Leadership.svg",
        title: "Strong Leadership & Implementation",
    },
];

const WhyChoose = () => {
  return (
    <section className="relative pb-36 md:pt-10 md:pb-42">

      <Container>
        <div className="relative z-10 pb-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              Why Choose YASPN?
            </h2>
          </div>

          <div className="mt-10 md:mt-20 grid gap-10 md:grid-cols-3 xl:grid-cols-5">
            {reasons.map((reason, index) => (
              
              <motion.div
                key={reason.title}
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1.1,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group flex flex-col items-center border-l border-white/10 px-6 text-center transition-all duration-500"
              >
                
                {/* ICON */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <Image
                    src={reason.icon}
                    alt={reason.title}
                    width={58}
                    height={58}
                    className="mb-8 object-contain transition duration-500 group-hover:scale-110"
                  />
                </motion.div>

                {/* TITLE */}
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + index * 0.12,
                  }}
                  viewport={{ once: true }}
                  className="max-w-[220px] text-xl leading-9 text-zinc-300 transition duration-300 group-hover:text-white"
                >
                  {reason.title}
                </motion.p>

              </motion.div>

            ))}
          </div>

        </div>
      </Container>

      {/* Bottom SVG Skyline */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <img
          src="/services/skyline-cut-grdnt.svg"
          alt="City Skyline"
          className="block h-[200px] md:h-[300px] lg:h-auto w-full object-cover"
        />
      </div>

    </section>
  )
}

export default WhyChoose