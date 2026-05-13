"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../layout/Container";

const services = [
    {
        title: "Infrastructure for Sports",
        description:
            "We construct modern stadiums, sports complexes, training academies and multi-purpose athletic facilities to international standards.",
        image: "/services/Big-Stadium.webp",
        points: [
            "Sports Academies",
            "Stadium Development",
            "Training Facilities",
            "Indoor & Outdoor Sports Complexes",
            "Youth development programs",
        ],
    },
    {
        title: "Education & Youth Development",
        description:
            "Building innovative learning environments to inspire future generations through education,leadership and sports-based learning.",
        image: "/services/education.webp",
        points: [
            "K-12 Educational Campuses",
            "Leadership and Development Opportunities",
            "Integration Sports Education",
            "Programs for Youth Development",
        ],
    },
    {
        title: "Healthcare & Well-being",
        description:
            "Advancing healthcare through modern hospitals and wellness centers.",
        image: "/services/healthcare.webp",
        points: [
            "Multi Speciality Hospitals",
            "Wellness Centers",
            "Medical Institutions",
            "Healthcare Infrastructure",
        ],
    },
    {
        title: "Tourism & Hospitality",
        description:
            "Luxury hospitality projects that provide premium experiences and tourism growth.",
        image: "/services/hospitality.webp",
        points: [
            "Luxury Hotels",
            "Sports Resorts",
            "Tourism Destinations",
            "Entertainment Developments",
        ],
    },
    {
        title: "Real Estate Development",
        description:
            "Innovative urban planning for premium residential and commercial developments.",
        image: "/services/real-estate.webp",
        points: [
            "High Rise Buildings",
            "Luxury Villas",
            "Commercial Towers",
            "Smart Urban Communities",
        ],
    },
    {
        title: "Industrial & Energy",
        description:
            "Industrial infrastructure solutions to support sustainable economic growth.",
        image: "/services/industrial.webp",
        points: [
            "Power Plants",
            "Industrial Facilities",
            "Refinery Projects",
            "Infrastructure Construction",
        ],
    },
    {
        title: "Project Management & Consulting",
        description:
            "Planning, engineering, management and execution services for global projects.",
        image: "/services/consulting.webp",
        points: [
            "Infrastructure Consultancy",
            "Master Planning",
            "Engineering Design",
            "Project Management",
        ],
    },
];

const Services = () => {
  return (
    <section className="relative py-24">
      <Container>
        <div className="space-y-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group grid overflow-hidden border-b-[3px] border-b-[#1B3A5B] bg-[#112347] transition-all duration-500 md:grid-cols-2"
            >
              {/* IMAGE */}
              <div
                className={`relative min-h-[320px] ${index % 2 !== 0
                  ? "md:order-2"
                  : ""
                  }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 grayscale-0 lg:grayscale lg:group-hover:grayscale-0"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center bg-[#112347] p-8 transition-all duration-500 group-hover:bg-[#194874] md:p-12">
                <h2 className="text-3xl font-bold text-[#F0A516]">
                    {service.title}
                </h2>

                <p className="mt-5 leading-8 text-zinc-300">
                    {service.description}
                </p>

                <div className="mt-8">
                  <h3 className="mb-4 text-lg font-semibold text-white">
                      Services Include :
                  </h3>

                  <ul className="space-y-3 overflow-hidden text-zinc-300">
                    {service.points.map((point, index) => (
                      <motion.li
                        key={point}
                        initial={{
                          opacity: 0,
                          x: 80,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 2.9,
                          delay: index * 0.15,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <Image
                          src="/sportsman-icon.svg"
                          alt="Check"
                          width={14}
                          height={14}
                          className="object-contain"
                        />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services;