

import Image from "next/image";

import Container from "@/components/layout/Container";

import {
  Globe,
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  Factory,
  BriefcaseBusiness,
  Target,
  ShieldCheck,
  Trophy,
  Users,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    title: "Infrastructure for Sports",
    description:
      "We construct modern stadiums, sports complexes, training academies and multi-purpose athletic facilities.",
    image: "/services/sports.jpg",
    points: [
      "Sports Academies",
      "Stadium Development",
      "Training Facilities",
      "Indoor & Outdoor Sports Complexes",
    ],
  },
  {
    title: "Education & Youth Development",
    description:
      "Building innovative learning environments to inspire future generations.",
    image: "/services/education.jpg",
    points: [
      "K-12 Educational Campuses",
      "Leadership Programs",
      "Sports Education",
      "Youth Development",
    ],
  },
  {
    title: "Healthcare & Well-being",
    description:
      "Advancing healthcare through modern hospitals and wellness centers.",
    image: "/services/healthcare.jpg",
    points: [
      "Hospitals",
      "Wellness Centers",
      "Medical Institutions",
      "Healthcare Infrastructure",
    ],
  },
  {
    title: "Tourism & Hospitality",
    description:
      "Luxury hospitality projects that provide premium experiences and tourism growth.",
    image: "/services/hospitality.jpg",
    points: [
      "Luxury Hotels",
      "Resorts",
      "Tourism Destinations",
      "Entertainment Developments",
    ],
  },
  {
    title: "Real Estate Development",
    description:
      "Innovative urban planning for premium residential and commercial developments.",
    image: "/services/real-estate.jpg",
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
    image: "/services/industrial.jpg",
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
    image: "/services/consulting.jpg",
    points: [
      "Infrastructure Consultancy",
      "Master Planning",
      "Engineering Design",
      "Project Management",
    ],
  },
];

const reasons = [
  {
    icon: Trophy,
    title: "40+ Years Industry Experience",
  },
  {
    icon: Globe,
    title: "Worldwide Infrastructure Experience",
  },
  {
    icon: Lightbulb,
    title: "Integrated Development Solutions",
  },
  {
    icon: Target,
    title: "Vision-Driven & Future Focused",
  },
  {
    icon: ShieldCheck,
    title: "Strong Leadership & Implementation",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#08152f] text-white">
      {/* HERO SECTION */}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/services/hero.jpg"
            alt="Services Hero"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#08152f]/75" />

          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#08152f] to-transparent" />
        </div>

        <Container>
          <div className="relative z-10 flex min-h-[720px] items-center">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[5px] text-[#F0A516]">
                Our Services
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
                OUR <span className="text-[#F0A516]">SERVICES</span>
              </h1>

              <div className="mt-6 h-[3px] w-24 bg-[#F0A516]" />

              <h2 className="mt-8 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                Comprehensive Development Solutions for a Better Tomorrow
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                YASPN delivers world-class infrastructure, sports, hospitality,
                healthcare, education and real estate development solutions to
                create sustainable communities and future-ready environments.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}

      <section className="relative py-24">
        <Container>
          <div className="space-y-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid overflow-hidden border-b-[3px] border-b-[#1B3A5B] bg-[#112347] md:grid-cols-2"
              >
                {/* IMAGE */}

                <div
                  className={`relative min-h-[320px] ${
                    index % 2 !== 0
                      ? "md:order-2"
                      : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover grayscale"
                  />
                </div>

                {/* CONTENT */}

                <div className="flex flex-col justify-center p-8 md:p-12">
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

                    <ul className="space-y-3 text-zinc-300">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3"
                        >
                          <span className="text-[#F0A516]">✦</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE */}

      <section className="relative overflow-hidden border-t border-white/10 py-24">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-[url('/city.webp')] bg-cover bg-center opacity-10" />

        <Container>
          <div className="relative z-10">
            <div className="text-center">
              <h2 className="text-4xl font-bold md:text-5xl">
                Why Choose YASPN?
              </h2>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3 xl:grid-cols-5">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="flex flex-col items-center border border-white/10 bg-[#0f1f42]/80 p-8 text-center transition duration-500 hover:border-[#F0A516]"
                  >
                    <Icon
                      className="mb-5 text-[#F0A516]"
                      size={42}
                    />

                    <p className="leading-7 text-zinc-300">
                      {reason.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* CONTACT SECTION */}

      <section className="py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <Image
                src="/logo.png"
                alt="YASPN"
                width={220}
                height={80}
                className="object-contain"
              />

              <p className="mt-8 max-w-xl leading-8 text-zinc-300">
                We are ready to deliver your next project and vision. Let’s
                build the future together with innovation, excellence and
                sustainable development.
              </p>

              <div className="mt-10 space-y-4 text-zinc-300">
                <div className="flex items-center gap-3">
                  <Building2 size={18} className="text-[#F0A516]" />
                  <span>PO Box 124345 Dubai, UAE</span>
                </div>

                <div className="flex items-center gap-3">
                  <Users size={18} className="text-[#F0A516]" />
                  <span>+971 50 123 4567</span>
                </div>

                <div className="flex items-center gap-3">
                  <BriefcaseBusiness
                    size={18}
                    className="text-[#F0A516]"
                  />
                  <span>info@yaspn.com</span>
                </div>
              </div>
            </div>

            {/* FORM */}

            <div className="border border-white/10 bg-[#112347] p-8 md:p-10">
              <h2 className="text-3xl font-bold text-white">
                Contact Us
              </h2>

              <form className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-14 w-full border border-white/10 bg-transparent px-5 text-white outline-none placeholder:text-zinc-500"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="h-14 w-full border border-white/10 bg-transparent px-5 text-white outline-none placeholder:text-zinc-500"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="h-14 w-full border border-white/10 bg-transparent px-5 text-white outline-none placeholder:text-zinc-500"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full border border-white/10 bg-transparent p-5 text-white outline-none placeholder:text-zinc-500"
                />

                <button
                  type="submit"
                  className="h-14 w-full bg-[#F0A516] font-semibold text-black transition duration-300 hover:opacity-90"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
