import Image from "next/image";

import Container from "@/components/layout/Container";

const stats = [
  {
    tag: "EXPERIENCE",
    value: "40+",
    label: "YEARS OF EXPERIENCE",
  },
  {
    tag: "PEOPLE",
    value: "7000+",
    label: "PEOPLE EMPLOYED",
  },
  {
    tag: "PROJECTS",
    value: "100+",
    label: "PROJECTS COMPLETED",
  },
  {
    tag: "COUNTRIES",
    value: "3",
    label: "COUNTRIES OPERATING",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#02040c] pb-62 pt-24">
      <Container>
        <div className="relative z-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`border-white/10 px-8 ${
                index !== stats.length - 1
                  ? "lg:border-r"
                  : ""
              }`}
            >
              {/* Small Tag */}
              <div className="mb-8 inline-flex rounded-full border border-white/15 px-5 py-2 text-xs text-white/80">
                {item.tag}
              </div>

              {/* Number */}
              <h3 className="text-6xl font-light text-white">
                {item.value}
              </h3>

              {/* Label */}
              <p className="mt-5 text-sm uppercase tracking-wide text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* Bottom SVG Skyline */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/skyline-cut.svg"
          alt="City Skyline"
          width={1920}
          height={220}
          className="h-auto w-full object-cover opacity-90"
        />
      </div>
    </section>
  );
}