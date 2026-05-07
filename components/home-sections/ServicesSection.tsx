import {
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  Factory,
  Landmark,
} from "lucide-react";

import Container from "@/components/layout/Container";

const services = [
  {
    title: "Sports Infrastructure",
    description:
      "Designing world-class sports venues and athletic ecosystems.",
    icon: Building2,
  },
  {
    title: "Education",
    description:
      "Innovative K-12 education institutions focused on excellence.",
    icon: GraduationCap,
  },
  {
    title: "Healthcare",
    description:
      "Modern healthcare systems and wellness centers.",
    icon: HeartPulse,
  },
  {
    title: "Hospitality & Tourism",
    description:
      "Luxury hospitality and tourism destination development.",
    icon: Hotel,
  },
  {
    title: "Energy & Industrial",
    description:
      "Industrial modernization and sustainable infrastructure.",
    icon: Factory,
  },
  {
    title: "Real Estate Development",
    description:
      "High-rise towers and modern urban communities.",
    icon: Landmark,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <Container>
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[4px] text-[#d69a2d]">
            Our Services
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">What We Do</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-[#0d1b3d] p-8 transition duration-300 hover:border-[#d69a2d]"
              >
                <div className="mb-6 inline-flex rounded-xl bg-[#d69a2d]/10 p-4 text-[#d69a2d]">
                  <Icon className="size-8" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="leading-7 text-zinc-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}