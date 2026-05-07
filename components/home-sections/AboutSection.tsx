import Image from "next/image";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Images */}
          <div className="relative h-[450px]">
            <div className="absolute left-0 top-0 h-[320px] w-[80%] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/placeholder.jpg"
                alt="stadium"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 h-[260px] w-[60%] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/placeholder.jpg"
                alt="building"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[3px] text-[#d69a2d]">
                About YASPN
              </p>

              <h2 className="max-w-xl text-4xl font-bold leading-tight md:text-5xl">
                A Global Vision for a Better Tomorrow
              </h2>
            </div>

            <p className="leading-8 text-zinc-300">
              YASPN develops transformative infrastructure projects across sports,
              education, healthcare, hospitality, and sustainable urban
              development.
            </p>

            <p className="leading-8 text-zinc-400">
              With decades of experience and innovation, we empower youth,
              strengthen communities, and build high-quality ecosystems for the
              future.
            </p>

            <Button className="rounded-full bg-[#d69a2d] px-8 py-6 text-black hover:bg-[#c58d26]">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}