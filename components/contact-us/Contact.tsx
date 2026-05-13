"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

const Contact = () => {
  return (
    <section className="relative w-full bg-[#0F1D3A] pt-40 pb-52 text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* ───────────────── LEFT CONTENT ───────────────── */}
          <div className="max-w-lg">

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 50,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="text-5xl font-extrabold uppercase leading-tight md:text-6xl"
            >
              Contact Us
            </motion.h2>

            {/* Yellow Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="mt-6 mb-8 h-[2px] bg-[#D89A1D]"
            />

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.3,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="text-[17px] leading-8 text-gray-300"
            >
              If you have any questions about YASPN, our team is always here to
              help. Whether you're exploring partnership opportunities, planning a
              development project, or simply want to learn more about our global
              infrastructure and community-driven solutions, we'd love to hear from
              you.
            </motion.p>

            {/* Contact Details */}
            <div className="mt-14 space-y-8 overflow-hidden">

              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="size-6 text-[#D89A1D]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.5 1.5 0 00-1.465.417l-.97.97a12.035 12.035 0 01-5.292-5.292l.97-.97a1.5 1.5 0 00.417-1.465L8.213 3.102A1.125 1.125 0 007.122 2.25H5.75a1.5 1.5 0 00-1.5 1.5z"
                      />
                    </svg>
                  ),
                  text: "+971 50 123 4567",
                },

                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="size-6 text-[#D89A1D]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.876 1.782l-7.5 5.625a2.25 2.25 0 01-2.748 0l-7.5-5.625A2.25 2.25 0 012.25 6.993V6.75"
                      />
                    </svg>
                  ),
                  text: "info@yaspn.com",
                },

                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="size-6 text-[#D89A1D]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  ),
                  text: (
                    <>
                     <p>
                  YASPN Global Company
                  <br />
                  Building No:3277 Koob Ibn Malik, Al Amamrah Dist.,Dammam, Kingdom of Saudi Arabia
                  <br />
                  Postal Code:32415
                </p>
                    </>
                  ),
                },
              ].map((item, index) => (
                
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 1.1,
                    delay: index * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    x: 10,
                  }}
                  className="flex items-start gap-5 transition-all duration-300"
                >
                  
                  {/* Icon */}
                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="mt-1"
                  >
                    {item.icon}
                  </motion.div>

                  {/* Text */}
                  <p className="text-lg leading-7 text-gray-300">
                    {item.text}
                  </p>

                </motion.div>

              ))}
            </div>

          </div>

          {/* ───────────────── FORM SECTION ───────────────── */}
          <div className="bg-black p-8 md:p-10 z-20">
            <form className="space-y-5">
              
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="bg-[#1A1A1A] h-14 px-5 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#D89A1D]"
                />

                <input
                  type="text"
                  placeholder="Last Name*"
                  className="bg-[#1A1A1A] h-14 px-5 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#D89A1D]"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full bg-[#1A1A1A] h-14 px-5 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#D89A1D]"
              />

              {/* Phone */}
              <input
                type="text"
                placeholder="Phone"
                className="w-full bg-[#1A1A1A] h-14 px-5 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#D89A1D]"
              />

              {/* Company */}
              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-[#1A1A1A] h-14 px-5 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#D89A1D]"
              />

              {/* Select */}
              <select
                className="w-full bg-[#1A1A1A] h-14 px-5 text-gray-400 outline-none border border-transparent focus:border-[#D89A1D]"
              >
                <option>Service Interested In</option>
                <option>Infrastructure</option>
                <option>Sports Development</option>
                <option>Urban Development</option>
              </select>

              {/* Location */}
              <input
                type="text"
                placeholder="Project Location"
                className="w-full bg-[#1A1A1A] h-14 px-5 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#D89A1D]"
              />

              {/* Message */}
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full bg-[#1A1A1A] p-5 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-[#D89A1D] resize-none"
              ></textarea>

              {/* Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#D89A1D] hover:bg-[#c58b17] transition-all duration-300 text-white px-8 py-4 rounded-full flex items-center gap-3 font-medium"
                >
                  Send Inquiry
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div>

            </form>
          </div>

        </div>
      </Container>

      {/* Bottom SVG Skyline */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <img
            src="/skyline-cut-Black.svg"
            alt="City Skyline"
            className="block w-full object-cover"
          />
        </div>
    </section>
  );
};

export default Contact;