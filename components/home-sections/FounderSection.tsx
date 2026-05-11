"use client"

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

const achievements = [
  "40+ Years of Construction and Infrastructure Leadership",
  "Delivered landmark residential, hotel and industrial projects",
  "Successfully launched businesses in UAE & Saudi Arabia",
  "Created jobs for 7000+ professionals",
  "Deep commitment to community development & social impact",
];

export default function FounderSection() {
  return (
    <section className="py-10 lg:py-24">
      <Container className="flex flex-col md:flex-row">

        <div className="md:w-[80%] bg-[#0d1b3d] p-5 md:p-10">
          <p className="mb-3 text-sm uppercase tracking-[3px] text-[#d69a2d]">
            Chairman & Founder
          </p>

          <motion.h2
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-bold"
          >
            Jacob Cheruvallil
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="mb-8 text-zinc-300 md:md:max-w-[500px] lg:max-w-2xl"
          >
            Visionary entrepreneur with over 40 years of experience
            in infrastructure development, construction, real estate,
            and global business operations. across the Middle East & India
          </motion.p>

          <div className="space-y-4">
            {achievements.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.8,
                }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 rounded-full bg-[#d69a2d]/20 p-1 text-[#d69a2d]">
                  <Check className="size-3" />
                </div>

                <p className="text-zinc-300">{item}</p>
              </motion.div>
            ))}
          </div>

          <Button className="mt-10 rounded-full border border-[#bd8620] bg-[#bd8620] px-6 py-5 text-xs text-white transition-all duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-[#bd8620]">
            View Profile
          </Button>
        </div>

        <div className="relative md:ml-[-130px] lg:ml-[-190px] mx-auto h-[300px] md:h-[450px] 2xl:h-[600px] my-10 
        w-[70%] md:w-[30%]">
          <div className="my-5 h-[90%]" >
            <Image
              src="/jacob.png"
              alt="Founder"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </Container>
    </section>
  );
};