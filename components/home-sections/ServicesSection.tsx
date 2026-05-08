import Image from "next/image";


import Container from "@/components/layout/Container";

const services = [
  {
    title: "Sports Infrastructure",
    description:
      "Designing world-class sports venues and athletic ecosystems.",
    icon: "/icons/Sports-Infrastructure.svg",
  },
  {
    title: "Education",
    description:
      "Innovative K-12 education institutions focused on excellence.",
    icon: "/icons/education.svg",
  },
  {
    title: "Healthcare",
    description:
      "Modern healthcare systems and wellness centers.",
    icon: "/icons/healthcare.svg",
  },
  {
    title: "Hospitality & Tourism",
    description:
      "Luxury hospitality and tourism destination development.",
    icon: "/icons/Hospitality&Tourism.svg",
  },
  {
    title: "Energy & Industrial",
    description:
      "Industrial modernization and sustainable infrastructure.",
    icon: "/icons/Energy-and-Industrial.svg",
  },
  {
    title: "Real Estate Development",
    description:
      "High-rise towers and modern urban communities.",
    icon: "/icons/realestate.svg",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/city.webp"
          alt="Background"
          fill
          className="object-cover"
        />

        {/* Dark Overlay */}
        {/* Base Dark Overlay */}
        <div className="absolute inset-0 bg-[#08152f]/85" />

        {/* Top Gradient Blend */}
        <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-[#141D33] to-transparent" />  </div>

      <Container>
        <div className="relative z-10">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm uppercase tracking-[4px] text-[#d69a2d]">
              Our Services
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              What We Do
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-[#0d1b3d]/90 p-8 transition duration-300 hover:border-[#d69a2d]"
              >
                <div className="mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="leading-7 text-zinc-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}